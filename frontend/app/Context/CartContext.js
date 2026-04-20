"use client";

import { useNavigation } from "./NavigationContext";
import { useNotification } from "./NotificationContext";
import { findProductsByIds } from "@/app/services/clientServices/ProductService";
import { addToCart, fetchProductInCart } from "@/app/services/clientServices/CartService";
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from "react";

const intitalState = {
  items: [],
  checkedItems: [],
  cart: null,
  loading: false,
  error: null,
};

const CART_ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_CART: "SET_CART",
  SET_ERROR: "SET_ERROR",
  UPDATE_ITEM_QUANTITY: "UPDATE_ITEM_QUANTITY",
  REMOVE_ITEM: "REMOVE_ITEM",
  TOGGLE_CHECKED: "TOGGLE_CHECKED",
  CLEAR_CHECKED: "CLEAR_CHECKED",
  RESET: "RESET",
};

function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload, error: null };

    case CART_ACTIONS.SET_CART:
      return {
        ...state,
        cart: action.payload.cart,
        items: action.payload.items,
        loading: false,
      };

    case CART_ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };

    case CART_ACTIONS.UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartItemId === action.payload.cartItemId
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
        checkedItems: state.checkedItems.map((item) =>
          item.cartItemId === action.payload.cartItemId
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((i) => i.cartItemId !== action.payload),
        checkedItems: state.checkedItems.filter(
          (i) => i.cartItemId !== action.payload,
        ),
      };

    case CART_ACTIONS.TOGGLE_CHECKED: {
      const exists = state.checkedItems.some(
        (i) => i.cartItemId === action.payload.cartItemId,
      );

      return {
        ...state,
        checkedItems: exists
          ? state.checkedItems.filter(
              (i) => i.cartItemId !== action.payload.cartItemId,
            )
          : [...state.checkedItems, action.payload],
      };
    }

    case CART_ACTIONS.CLEAR_CHECKED: {
      return { ...state, checkedItems: [] };
    }

    case CART_ACTIONS.RESET:
      return intitalState;

    default:
      return state;
  }
}

const CartStateContext = createContext(null);
const CartActionsContext = createContext(null);

export function CartProvider({ children }) {

  const { userData } = useNavigation();
  const { success, error: showError } = useNotification();
  const [state, dispatch] = useReducer(cartReducer, intitalState);

  const fetchCartItems = useCallback(async () => {
    const cartId = userData?.cartId;
    if (!cartId) {
      dispatch({ type: CART_ACTIONS.RESET });
      return;
    }

    dispatch({ type: CART_ACTIONS.SET_LOADING, payload: true });

    try {
      const response = await fetchProductInCart(cartId);
      const cartData = response?.Cart;

      if (!cartData?.cartItem?.length) {
        dispatch({
          type: CART_ACTIONS.SET_CART,
          payload: { items: [], cart: cartData },
        });
        return;
      }

      const productIds = cartData.cartItem.map((item) => item.productId);
      const products = await findProductsByIds(productIds);

      const productMap = new Map(products.map((p) => [p.productId, p]));

      const enrichedItems = cartData.cartItem.map((cartItem) => ({
        ...cartItem,
        product: productMap.get(cartItem.productId) ?? null,
      }));

      dispatch({
        type: CART_ACTIONS.SET_CART,
        payload: { items: enrichedItems, cart: cartData },
      });
    } catch (err) {
      const message =
        err?.response?.data?.message ?? "Failed to load cart items";
      dispatch({ type: CART_ACTIONS.SET_ERROR, payload: message });
      showError(message);
    }
  },[userData?.cartId, showError]);


  const addItemToCart = useCallback(
    async (product) => {
      if (!userData?.cartId) throw new Error("Cart not available");
 
      const cartItem = {
        quantity: 1,
        productId: product.productId,
        cartId: userData.cartId,
      };
 
      try {
        const data = await addToCart(userData.cartId, cartItem);
        success(data.message);

        await fetchCartItems();
      } catch (err) {
        const message = err?.response?.data?.message ?? "Failed to add item";
        showError(message);
        throw err; 
      }
    },
    [userData?.cartId, fetchCartItems, success, showError]
  );


  const removeItemFromCart = useCallback(
    async (cartItemId) =>{
      dispatch({type:CART_ACTIONS.REMOVE_ITEM, payload: cartItemId});

      try{
         await deleteCartItemFromCart(cartItemId);
      }catch(err){
          await fetchCartItems();
        showError("Failed to remove item. Please try again.");
        throw err;
      }

    },[fetchCartItems, showError] )


     const updateItemQuantity = useCallback(
    async (cartItemId, quantity) => {
      const safeQuantity = Math.max(1, quantity);
 
      // Save previous for rollback
      const previous = state.items.find((i) => i.cartItemId === cartItemId);
 
      // Optimistic update
      dispatch({
        type: CART_ACTIONS.UPDATE_ITEM_QUANTITY,
        payload: { cartItemId, quantity: safeQuantity },
      });
 
      try {
        await updateQuantityOfItem(cartItemId, safeQuantity);
      } catch (err) {
        // Rollback to previous quantity
        if (previous) {
          dispatch({
            type: CART_ACTIONS.UPDATE_ITEM_QUANTITY,
            payload: { cartItemId, quantity: previous.quantity },
          });
        }
        const message = err?.response?.data?.message ?? "Failed to update quantity";
        showError(message);
        throw err;
      }
    },
    [state.items, showError]
  );
 
  const toggleCheckedItem = useCallback((cartItem) => {
    dispatch({ type: CART_ACTIONS.TOGGLE_CHECKED, payload: cartItem });
  }, []);
 
  const clearCheckedItems = useCallback(() => {
    dispatch({ type: CART_ACTIONS.CLEAR_CHECKED });
  }, []);



   useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);
 

  // don't re-render on action changes
  const stateValue = useMemo(
    () => ({
      cartItems: state.items,
      checkedCartItems: state.checkedItems,
      cart: state.cart,
      loading: state.loading,
      error: state.error,
      cartItemCount: state.items.length,
      checkedCount: state.checkedItems.length,
    }),
    [state]
  );


// never changes reference
  const actionsValue = useMemo(
    () => ({
      fetchCartItems,
      addItemToCart,
      removeItemFromCart,
      updateItemQuantity,
      toggleCheckedItem,
      clearCheckedItems,
    }),
    [fetchCartItems, addItemToCart, removeItemFromCart, updateItemQuantity, toggleCheckedItem, clearCheckedItems]
  );
 
  return (
    <CartStateContext.Provider value={stateValue}>
      <CartActionsContext.Provider value={actionsValue}>
        {children}
      </CartActionsContext.Provider>
    </CartStateContext.Provider>
  );
}


export function useCartState() {
  const ctx = useContext(CartStateContext);
  if (!ctx) throw new Error("useCartState must be used within <CartProvider>");
  return ctx;
}
 
export function useCartActions() {
  const ctx = useContext(CartActionsContext);
  if (!ctx) throw new Error("useCartActions must be used within <CartProvider>");
  return ctx;
}
 
// ─── Legacy compatibility hook (keeps existing components working) ─────────────
export function useCart() {
  return { ...useCartState(), ...useCartActions() };
}

