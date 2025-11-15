'use client'
import { useEffect, useRef, useState } from "react";
import Navbar from "../Component/Navbar";
import Products from "../Component/Products";
import style from '../CSS/mainContent.module.css'
import { fetchRandomProduct } from "../services/clientServices/ProductService";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const hasLoadedRef = useRef(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProducts = async ({ pageNumber, pageSize }) => {
        try {
            setIsLoading(true);
            const res = await fetchRandomProduct({ pageNumber, pageSize });
            const { data } = res.data;
            const processedProduct = data.map(product => ({
                ...product,
                imageUrls: createImageUrls(product.imageUrls)
            }))
            setProducts(processedProduct);
            if (typeof window !== 'undefined') {
                sessionStorage.setItem("shopProducts", JSON.stringify(processedProduct))
            }
        } catch (error) {
            console.log("Error for fetching product:", error.response?.data)
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }
    }

    const createImageUrls = (imageUrls) => {
        if (!imageUrls || !Array.isArray(imageUrls)) return [];

        return imageUrls.map(imageUrl => {
            if (imageUrl.startsWith("/api/")) {
                return `http://localhost:8080${imageUrl}`
            }
        })
    }
    useEffect(() => {
        if (hasLoadedRef.current) {
            console.log("Products already loaded");
            return;
        }

        if (typeof window !== 'undefined') {
            const isNavigated = sessionStorage.getItem('shopNavigated');
            console.log("isNavigated: ", sessionStorage.getItem('shopNavigated'));
            if (isNavigated === 'true') {
                console.log("Using cached products");
                const shopProducts = sessionStorage.getItem('shopProducts');
                if (shopProducts) {
                    setProducts(JSON.parse(shopProducts))
                } else {
                    console.log("No cached products found, but navigation flag was set");
                }
                sessionStorage.removeItem('shopNavigated');
            } else {
                console.log("Fetching new products");
                sessionStorage.removeItem('shopNavigated')
                fetchProducts({ pageNumber: 0, pageSize: 9 });
            }
            hasLoadedRef.current = true;
        }
    }, [])
    // if (isLoading) {
    //     return (
    //         <div className={style.LoadingPage}>
    //             <p>Loading....</p>
    //         </div>
    //     )
    // }
    return (
        <div className={style.pageWrapper}>
            <Navbar />
            <div className={style.pageContainer} >
                {
                    !isLoading ? (
                        <Products
                            products={products}
                            setProducts={setProducts}
                        />
                    ) : (
                        <div className={style.Loading}>
                            <p>Loading....</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}