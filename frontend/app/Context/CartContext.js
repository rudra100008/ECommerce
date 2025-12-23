"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useNavigation } from "./NavigationContext";
import { useNotification } from "./NotificationContext";
import {
  addToCart,
  fetchProductInCart,
  deleteCartItemFromCart,
  updateQuantityOfItem,
} from "../services/clientServices/CartService";
import { findProductById } from "../services/clientServices/ProductService";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { userData } = useNavigation();
  const { success, error: showError,clear } = useNotification();
  const [cartItems, setCartItems] = useState([]);
  const [checkedCartItems,setCheckedCartItems] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchCartItems = useCallback(async () => {
    if (!userData?.cartId) {
      console.log("cartItem becomes empty->26");
      setCartItems([]);
      return;
    }

    try {
      setLoading(true);
      const response = await fetchProductInCart(userData.cartId);
      console.log("Cart", response.Cart);
      const { Cart } = response;
      setCart(Cart);

      if (Cart.cartItem && Cart.cartItem.length > 0) {
        const productPromises = Cart.cartItem.map(async (cartItem) => {
          try {
            const product = await findProductById(cartItem.productId);
            return {
              ...cartItem,
              product: product,
            };
          } catch (err) {
            console.log(`Error fetching product ${cartItem.productId}:`, err);
            return {
              ...cartItem,
              product: null,
            };
          }
        });
        const productWithDetails = await Promise.all(productPromises);
        setCartItems(productWithDetails);
      } else {
        setCartItems([]);
      }
    } catch (err) {
      console.log("error in CartItem: ", err.response?.data);
      showError("Failed to load cart items");
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  }, [userData?.cartId, showError]);

  const addItemToCart = useCallback(
    async (product) => {
      if (!userData?.cartId) {
        throw new Error("User cart not available");
      }

      const cartItem = {
        quantity: 1,
        productId: product.productId,
        cartId: userData.cartId,
      };

      try {
        const data = await addToCart(userData.cartId, cartItem);
        await fetchCartItems();
        success(data.message)
        setTimeout(()=>{
          clear()
        },4000)
        return true;
      } catch (err) {
        console.log("Error adding to cart:", err.response?.data);
        throw err;
      }
    },
    [userData?.cartId, fetchCartItems]
  );

  const removeItemFromCart = useCallback(
    async (cartItemId) => {
      try {
        await deleteCartItemFromCart(cartItemId);
        await fetchCartItems();
      } catch (err) {
        console.log("Error removing cart item:", err.response?.data);
        throw err;
      }
    },
    [fetchCartItems]
  );


  const updateItemQuantity = async (cartItemId, quantity) => {
    if (quantity < 1) {
      quantity = 1;
    }
    try {
      const data = await updateQuantityOfItem(cartItemId, quantity);
      console.log("CartItems: ", cartItems);
      setCartItems((prev) =>
        prev.map((item) =>
          item.cartItemId === data.cartItemId
            ? { ...item, quantity: data.quantity }
            : item
        )
      );
    } catch (err) {
      console.log("Error updating quantity:", err.response?.data);
      throw err;
    }
  };

  useEffect(() => {
    if (userData?.cartId) {
      fetchCartItems();
    } else {
   
      setCartItems([]);
    }
  }, [userData?.cartId]);

   const handleCheckBox = (cartItem)=>{
        setCheckedCartItems(prev =>{
            const exists = prev.some(item => item.cartItemId === cartItem.cartItemId);
            if(exists){
                return prev.filter(item => item.cartItemId !== cartItem.cartItemId)
            }else{
                return [...prev,cartItem];
            }
        });
    }
    const clearCheckedCart = () => {
        setCheckedCartItems([]);
    };

  const value = useMemo(
    () => ({
      cartItems,
      checkedCartItems,
      setCheckedCartItems,
      cart,
      loading,
      fetchCartItems,
      addItemToCart,
      removeItemFromCart,
      updateItemQuantity,
      handleCheckBox,
      clearCheckedCart,
      cartItemCount: cartItems?.length,
    }),
    [
      cartItems,
      cart,
      loading,
      fetchCartItems,
      addItemToCart,
      removeItemFromCart,
      updateItemQuantity,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
