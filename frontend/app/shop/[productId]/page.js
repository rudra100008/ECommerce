'use client'
import { findProductById } from "../../services/clientServices/ProductService";
import style from '../../CSS/userSide/products.module.css';
import { use, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { fetchCategoryById } from "../../services/CategoryService";


export default function ProductDetails({ params }) {
    const router = useRouter();
    const unwrappedParams = use(params);
    const productId = unwrappedParams.productId
    const [product, setProduct] = useState(null); // Start with null instead of empty object
    const [category, setCategory] = useState({});
    const [imageIndex, setImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    
    const fetchProductById = async () => {
        try {
            setLoading(true);
            const product = await findProductById(productId);
            console.log("Product: ", product);
            setProduct(product);
        } catch (error) {
            console.log(error.response?.data);
        } finally {
            setLoading(false);
        }
    }
    
    const getCategoryById = async () => {
        if (!product?.categoryId) return;
        
        try {
            const category = await fetchCategoryById(product.categoryId)
            setCategory(category);
        } catch (error) {
            console.log("Error in ProductDetails: ", error.response?.data)
        }
    }
    
    useEffect(() => {
        fetchProductById();
    }, [])

    useEffect(() => {
        getCategoryById()
    }, [product])

    const goBackToShop = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem("shopNavigated", "true");
        }
        router.back();
    }

    const handlePreviousImage = () => {
        if (imageIndex > 0) {
            setImageIndex(prev => {
                return prev - 1;
            });
        }
    }
    
    const handleNextImage = () => {
        if (imageIndex < product?.imageUrls?.length - 1) {
            setImageIndex(prev => prev + 1);
        }
    }

    // Calculate total price safely
    const calculateTotalPrice = () => {
        if (!product) return 0;
        const price = product.price || 0;
        const discount = product.discount || 0;
        return price - discount;
    }

    if (loading) {
        return <div className={style.singleProductContainer}>Loading...</div>;
    }

    if (!product) {
        return <div className={style.singleProductContainer}>Product not found</div>;
    }

    console.log("product: ", product)
    console.log("imageIndex, ", imageIndex);
    
    return (
        <div className={style.singleProductContainer}>
            <button onClick={goBackToShop} className={style.goBackButton}>
                <FontAwesomeIcon icon={faArrowLeft} /> Back to Shop
            </button>
            <div className={style.productDetails}>
                <div className={style.productImageGroup}>
                    {
                        product.imageUrls && product.imageUrls.length > 0 && (
                            <>
                                <div onClick={handlePreviousImage} className={`${style.previousButton} ${imageIndex === 0 ? style.activePreviousButton : ''}`}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </div>
                                <div className={style.productImageContainer}>
                                    <div>
                                        {
                                            product.imageUrls && product.imageUrls.length > 0 ? (
                                                <img
                                                    src={`http://localhost:8080${product.imageUrls[imageIndex]}`}
                                                    alt={product.productName}
                                                    className={style.productImage}
                                                />
                                            ) : (
                                                <div>
                                                    <p>No product Image </p>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div onClick={handleNextImage} className={`${style.nextButton} ${imageIndex === product.imageUrls.length - 1 ? style.activeNextButton : ''}`}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </>
                        )
                    }
                </div>
                <div className={style.productGroup}>
                    <div className={style.category}>
                        Category : <span>{category.name || 'Loading...'}</span>
                    </div>
                    <div className={style.productName}>
                        <span>{product.productName}</span>
                    </div>
                    <div>
                        <span>{product.description}</span>
                    </div>
                    <div className={style.price}>
                        Price: <span> {product.price}</span>
                    </div>
                    <div className={style.discount}>
                        Discount Price : <span>{product.discount || 0}</span>
                    </div>
                    <div className={style.totalPrice}>
                        Total Price: <span>{calculateTotalPrice()}</span>
                    </div>
                    <div className={style.isInStock} >
                        isInStock : <span>{product.isInStock ? 'Yes' : 'No'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}