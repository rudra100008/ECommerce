
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../CSS/adminNavbar/AddProductForm/productForm.module.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { createProduct } from '../../services/adminServices/ProductCategoryServices';
import { useEffect, useState } from 'react';
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
    const handleNext = async (e) => {
        e.preventDefault();
        try {
            const cleanProductData = {
                productName: formData.product.productName,
                description: formData.product.description,
                price: formData.product.price,
                discount: formData.product.discount,
                sku: formData.product.sku,
                stockQuantity: formData.product.stockQuantity
            }
            const res = await createProduct({ product: cleanProductData, category: formData.category ,setValidationError})
            console.log("handleNext() ProductForm(): ", res.data);

            updateFormData({ product: { ...formData.product, ...res.data } })
            setState('productImage');
        } catch (error) {
            console.log("Product creation  failed: ", error.response?.data);
        }
    }

     useEffect(() => {
        console.log("ProductForm received formData:", formData);
        console.log("Category type:", typeof formData.category);
        console.log("Category value:", formData.category);
    }, [formData]);

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
                    <span className={style.validationError}>{validationError.productName}</span>
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
                    <span className={style.validationError}>{validationError.description}</span>
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
                    <span className={style.validationError}>{validationError.price}</span>
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
                    <span className={style.validationError}>{validationError.discount}</span>
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
                    <span className={style.validationError}>{validationError.sku}</span>
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
                    <span className={style.validationError}>{validationError.stockQuantity}</span>
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