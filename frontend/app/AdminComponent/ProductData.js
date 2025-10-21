import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../CSS/adminNavbar/productData.module.css';
import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { fetchProductImageUrls } from '../services/ProductServices';
import GetProductImage from '../Component/GetProductImage';
import EditProduct from './AddProductForm/EditProduct';

export default function ProductData({ selectedProduct, setShowProductDetails, setSelectedProduct }) {
    const [imageUrls, setImageUrls] = useState([]);
    const [isProductImage, setIsProductImage] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const fetchImageUrls = async () => {
        console.log("ProductId: ", selectedProduct)
        const response = await fetchProductImageUrls(selectedProduct.productId);
        const { images } = response.data;
        setImageUrls(images);
    }
    useEffect(() => {
        fetchImageUrls();
    }, [selectedProduct.productId])


    const handleProductEdit = async () => {
        setShowEditForm(true);
    }
    if (isProductImage && !showEditForm) {
        return (
            <div className={style.container}>
                <div className={style.header}>
                    <h3>Product Images</h3>
                </div>
                <div className={style.imageGrid}>
                    {
                        imageUrls.map((imageUrl, index) => (
                            <div key={index} className={style.imageGridItem}>
                                <div className={style.imageContainer}>
                                    <GetProductImage imageUrl={imageUrl} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={style.backButton}>
                    <button type='button' onClick={() => setIsProductImage(false)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back
                    </button>
                </div>
            </div>
        )
    } else if (!isProductImage && !showEditForm) {
        return (
            <div className={style.container}>
                <div className={style.closeButton} onClick={() => setShowProductDetails(false)}>
                    <FontAwesomeIcon icon={faX} />
                </div>
                <div className={style.header}>
                    <h3>Product Information</h3>
                </div>
                <div className={style.product}>
                    <div className={style.productGroup}>
                        <div className={style.label}>
                            Product
                        </div>
                        <p>{selectedProduct.productName}</p>
                    </div>
                    <div className={style.productGroup}>
                        <div className={style.label}>
                            Description
                        </div>
                        <p>{
                            selectedProduct.description.length > 200 ? (
                                <p>selectedProduct.description.slice(0,200).....</p>
                            ) : selectedProduct.description

                        }</p>
                    </div>
                    <div className={style.productGroup}>
                        <div className={style.label}>
                            Price
                        </div>
                        <p>₹{selectedProduct.price}</p>
                    </div>
                    <div className={style.productGroup}>
                        <div className={style.label}>
                            Discount
                        </div>
                        <p>₹{selectedProduct.discount || 0}</p>
                    </div>
                    <div className={style.productGroup}>
                        <div className={style.label}>
                            Stock
                        </div>
                        <p>{selectedProduct.stockQuantity}</p>
                    </div>
                    <div className={style.editButton} onClick={handleProductEdit}>
                        <button type='button' >
                            Edit product
                        </button>
                    </div>
                    <div className={style.imageButton}>
                        <button type='button' onClick={() => setIsProductImage(true)}>
                            See product Images
                        </button>
                    </div>
                </div>
            </div>
        )
    } else if (showEditForm) {
        return (
            <div className={style.container}>
                <EditProduct
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    setShowEditForm ={setShowEditForm}
                />
            </div>
        )
    }
}