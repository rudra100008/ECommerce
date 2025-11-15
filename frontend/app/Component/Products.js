'use client'
import style from '../CSS/userSide/products.module.css'
import Link from 'next/link'
import { fetchAllCategories, fetchCategoryById } from '../services/CategoryService'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { addToCart } from '../services/clientServices/CartService'
import { useNavigation } from "../Context/NavigationContext";
import { useNotification } from '../Context/NotificationContext'
import { productDetailsInInventory } from '../services/clientServices/InventoryService'
export default function Products({ products, setProducts }) {
    const { success, error, clear } = useNotification();
    const { userData } = useNavigation();
    const [categories, setCategories] = useState([]);
    const [favoriteProduct, setFavoriteProduct] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const getCategories = async () => {
        try {
            const response = await fetchAllCategories({ pageNumber: 0, pageSize: 100000 });
            const categories = response.data.data;
            setCategories(categories);
        } catch (err) {
            console.log("Error: ", err.response?.data);
        }
    }
    const getCategory = (product) => {
        const category = categories.find(category => category.categoryId === product.categoryId);
        return category ? category.name : "Loading...";
    }

    const checkFavoriteProduct = (favoriteProduct = [], product = {}) => {
        return favoriteProduct.some(prod => prod.productId === product.productId)
    }
    const handleFavoriteIcon = (product) => {
        setFavoriteProduct(prev => {
            const isProductInFavorites = checkFavoriteProduct(favoriteProduct, product);

            if (isProductInFavorites) {
                return prev.filter(prod => prod.productId !== product.productId);
            } else {
                return [...prev, product];
            }
        });
    }
    useEffect(() => {
        getCategories();
    }, [])

    const handleAddToCart = async (product) => {
        const cartItem = {
            quantity: 1,
            productId: product.productId,
            cartId: userData.cartId
        }
        try {
            const cart = await addToCart(userData.cartId, cartItem);
            console.log("Cart: ", cart.Cart);
            const { Cart, message } = cart;
            setCartItem(Cart.cartItemDTOList);
            success(message);
            setTimeout(() => {
                clear();
            }, 6000)
        } catch (err) {
            console.log("Error in Product: ", err.response?.data)
            error("Failed to added to cart.Please try later.")
            setTimeout(() => {
                clear();
            }, 6000)
        }
    }
    return (
        <div className={style.productContainer}>
            <div className={style.productGrid}>
                {
                    products.length > 0 &&
                    products.map((product, index) => (
                        <div key={index} className={style.product}>
                            <div className={style.productActionGroup} >
                                {
                                    checkFavoriteProduct(favoriteProduct, product) ? (
                                        <div onClick={() => handleFavoriteIcon(product)} className={style.favoriteIconActive}>
                                            <FontAwesomeIcon icon={fasHeart} />
                                        </div>
                                    ) : (
                                        <div onClick={() => handleFavoriteIcon(product)} className={style.favoriteIcon}>
                                            <FontAwesomeIcon icon={farHeart} />
                                        </div>
                                    )
                                }
                            </div>
                            <div className={style.productImageDiv}>
                                {
                                    product.imageUrls && product.imageUrls.length > 0 && product.imageUrls[0] ? (
                                        <img
                                            src={product.imageUrls[0]}
                                            alt={product.productName}
                                            className={style.productImage}
                                        />
                                    ) : (
                                        <p>No Image</p>
                                    )
                                }

                            </div>
                            <div className={style.category}>
                                {getCategory(product)}
                            </div>
                            <div className={style.productName}>
                                {product.productName}
                            </div>
                            <p className={style.description}>
                                {product.description}
                            </p>

                            {
                                product.discount > 0 ? (
                                    <div className={style.discountPrice}>
                                        <p className={style.price}>
                                            Rs {product.price}
                                        </p>
                                        <p className={style.discount}>
                                            Rs {product.price - product.discount}
                                        </p>
                                    </div>
                                ) : (
                                    <div className={style.priceView}>
                                        <p className={style.price}>
                                            Rs {product.price}
                                        </p>
                                    </div>
                                )
                            }

                            <div className={style.actionGroup}>
                                <button onClick={() => handleAddToCart(product)} className={style.cartButton} type='button'>
                                    Add to Cart
                                </button>
                                <Link className={style.detailLink} href={`/shop/${product.productId}`}>
                                    Details
                                </Link>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

        </div>
    )
}