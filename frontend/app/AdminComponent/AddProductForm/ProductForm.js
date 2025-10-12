
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../CSS/adminNavbar/AddProductForm/productForm.module.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { createProduct } from '../../services/adminServices/ProductCategoryServices';
import { useState } from 'react';
export default function ProductForm({ setState, formData, updateFormData }) {
    const [validationError, setValidationError] = useState({
        productName: '',
        description: '',
        price: '',
        discount: '',
        sku: '',
        stockQuantity: ''
    })
    const handleBack = () => {
        setState('category')
    }
    const handleNext = async(e) => {
        e.preventDefault();
        try {
             const res = await createProduct({ product: formData.product,category:formData.category })
             console.log("handleNext() ProductForm(): ",res);


             setState('productImage');
        } catch (error) {
            console.log("Product creation  failed: ", error.response?.data);
        }
    }

    console.log("FormData", formData);
    // console.log("updateFormData: ", updateFormData)
    return (
        <div className={style.productForm}>
            <div className={style.header}>
                <h3>Add a Product</h3>
            </div>
            <form>
                <div className={style.InputGroup}>
                    <label htmlFor='productName'>Product Name</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='text'
                            name='productName'
                            id='productName'
                            value={formData.product.productName}
                            onChange={(e) => updateFormData({ product: { ...formData.product, productName: e.target.value } })}
                            placeholder='Enter product Name'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='description'>Description</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='text'
                            name='description'
                            id='description'
                            value={formData.product.description}
                            onChange={(e) => updateFormData({ product: { ...formData.product, description: e.target.value } })}
                            placeholder='Enter description'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='price'>Price</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='number'
                            name='price'
                            id='price'
                            value={formData.product.price}
                            onChange={(e) => updateFormData({ product: { ...formData.product, price: e.target.value } })}
                            placeholder='Enter a price'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='discount'>Discount</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='number'
                            name='discount'
                            id='discount'
                            value={formData.product.discount}
                            onChange={(e) => updateFormData({ product: { ...formData.product, discount: e.target.value } })}
                            placeholder='Enter discount'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='sku'>SKU</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='text'
                            name='sku'
                            id='sku'
                            value={formData.product.sku}
                            onChange={(e) => updateFormData({ product: { ...formData.product, sku: e.target.value } })}
                            placeholder='Enter sku'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor=''>Stock Quantity</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='number'
                            name='stockQuantity'
                            id='stockQuantity'
                            value={formData.product.stockQuantity}
                            onChange={(e) => updateFormData({ product: { ...formData.product, stockQuantity: e.target.value } })}
                            placeholder='Enter stock quantity'
                        />
                    </div>
                </div>

            </form>
            <div className={style.ButtonGroup}>
                <button
                    type='button'
                    className={style.backButton}
                    onClick={handleBack}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Back
                </button>
                <button
                    type='button'
                    className={style.nextButton}
                    onClick={handleNext}
                >
                    Next
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}