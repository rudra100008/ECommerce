"use client"
import { useEffect, useState } from 'react';
import { useNavigation } from '../Context/NavigationContext'
import style from '../CSS/userSide/cartItemTable.module.css'
import { deleteCartItemFromCart, fetchProductInCart, updateQuantityOfItem } from '../services/clientServices/CartService';
import api from './axiosInterceptor';
import { findProductById } from '../services/clientServices/ProductService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNotification } from '../Context/NotificationContext';
export default function CartItemTable() {
    const { userData } = useNavigation();
    const {error} = useNotification();
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState({})
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [updatingItems, setUpdatingItems] = useState(new Set())
    const getCartItemById = async () => {
        if (userData.cartId) {
            try {
                setLoading(true);
                console.log("userData: ", userData.cartId)
                const response = await fetchProductInCart(userData.cartId);
                console.log("Cart", response.Cart);
                const { Cart, message } = response;
                setCart(Cart);
                setCartItems(Cart.cartItem);
                await fetchProductDetails(Cart.cartItem);
            } catch (err) {
                console.log("error in CartItem: ", err.response.data)
            } finally {
                setLoading(false);
            }
        }
    }
    const fetchProductDetails = async (cartItems) => {
        try {
            const productPromises = cartItems.map(async (cartItem, index) => {
                try {
                    const product = await findProductById(cartItem.productId);
                    return {
                        ...cartItem,
                        product: product
                    }
                } catch (err) {
                    console.log(`Error fetching product ${cartItem.productId}:`, err);
                    return {
                        ...cartItem,
                        product: null
                    };
                }
            });
            const productWithDetails = await Promise.all(productPromises);
            setProducts(productWithDetails);
        } catch (err) {
            console.log("error: ", err.response.data)
        }
    }
    useEffect(() => {
        getCartItemById();
    }, [userData.cartId])
    const handleShowImage = (productId) => {

    }
    const handleQuantityChange = async (cartItemId, itemQuantity) => {
        if (itemQuantity < 1) {
            itemQuantity = 1;
            return;
        }

        try {
            setUpdatingItems(prev => new Set(prev).add(cartItemId))
            setProducts(prev => prev.map(item =>
                item.cartItemId === cartItemId ? { ...item, quantity: itemQuantity } : item
            ))
             await updateQuantityOfItem(cartItemId, itemQuantity);
        } catch (err) {
            console.log("Error", err.response.data);
            const {message} =  err.response.data
            if(err.response.data.status === 400){
                error(message)
            }
            getCartItemById();
        } finally {
            setUpdatingItems(prev => {
                const newSet = new Set(prev);
                newSet.delete(cartItemId);
                return newSet;
            })
        }
    }

    const handleRemoveItem = async(cartItemId)=>{
        try{
            setProducts(prev => prev.filter(item => item.cartItemId !== cartItemId))
            await deleteCartItemFromCart(cartItemId);
        }catch(err){
            console.log("error: ",err.response?.data)
        }
    }
    const calulateTotal = (item) => {
        return (item.product.price - item.product.discount) * item.quantity
    }

    console.log("Product: ", products);
    if (loading) {
        return <div className={style.loading}>Loading cart...</div>;
    }

    return (
        <div className={style.cartTableContainer}>
            <h2>Shopping Cart</h2>

            {
                products.length === 0 ? (
                    <div className={style.emptyCart}>
                        <p>Your  cart is empty</p>
                    </div>
                ) : (
                    <>
                        <table className={style.cartTableBody}>
                            <thead className={style.tableHead}>
                                <tr className={style.headRow}>
                                    <th>SN</th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className={style.tableBody}>
                                {products &&
                                    products.map((item, index) => (
                                        <tr key={item.cartItemId} className={style.bodyRow}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <button className={style.imageButton} onClick={() => handleShowImage(item.product.productId)} type='button'>
                                                    See Product Image
                                                </button>
                                            </td>
                                            <td className={style.productName}>
                                                {item.product.productName}
                                            </td>
                                            <td className={style.price}>
                                                Rs {item.product.price - item.product.discount || 0}
                                            </td>
                                            <td className={style.quantity}>
                                                <div className={style.quantityControls}>
                                                    <div
                                                        onClick={() => handleQuantityChange(item.cartItemId, item.quantity - 1)}
                                                        className={`${style.minusButton}`}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                    </div>
                                                    {item.quantity}
                                                    <div
                                                        onClick={() => handleQuantityChange(item.cartItemId, item.quantity + 1)}
                                                        className={`${style.plusButton}`}>
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={style.totalPrice}>
                                                Rs {item.product ? (calulateTotal(item)) : 'N/A'}
                                            </td>
                                            <td className={style.actions}>
                                                <button
                                                onClick={()=>handleRemoveItem(item.cartItemId)}
                                                    className={style.removeButton}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
                )
            }
        </div>
    )
}