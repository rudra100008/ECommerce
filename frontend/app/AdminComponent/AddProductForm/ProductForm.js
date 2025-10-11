
import style from '../../CSS/adminNavbar/AddProductForm/productForm.module.css'
export default function ProductForm({ setState, formData, updateFormData }) {
    const handleBack = () => {
        setState('category')
    }
    const handleNext = () => {
        setState('productImage');
    }

    console.log("FormData",formData);
    console.log("updateFormData: ",updateFormData)
    return (
        <div>
            <div>
                <h3>Add a Product</h3>
            </div>
            <form>
                <div className={style.InputGroup}>
                    <label htmlFor='productName'>Product Name</label>
                    <div>
                        <input
                            type='text'
                            name='productName'
                            id='productName'
                            value={formData.product.productName}
                            onChange={(e) => updateFormData({ product:{...formData.product,productName:e.target.value} })}
                            placeholder='Enter product Name'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='description'>Description</label>
                    <div>
                        <input
                            type='text'
                            name='description'
                            id='description'
                            value={formData.product.description}
                              onChange={(e) => updateFormData({ product:{...formData.product,description:e.target.value} })}
                            placeholder='Enter description'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='price'>Price</label>
                    <div>
                        <input
                            type='number'
                            name='price'
                            id='price'
                            value={formData.product.price}
                             onChange={(e) => updateFormData({ product:{...formData.product,price:e.target.value} })}
                            placeholder='Enter a price'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='discount'>Discount</label>
                    <div>
                        <input
                            type='number'
                            name='discount'
                            id='discount'
                            value={formData.product.discount}
                             onChange={(e) => updateFormData({ product:{...formData.product,discount:e.target.value} })}
                            placeholder='Enter discount'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='sku'>SKU</label>
                    <div>
                        <input
                            type='text'
                            name='sku'
                            id='sku'
                            value={formData.product.sku}
                              onChange={(e) => updateFormData({ product:{...formData.product,sku:e.target.value} })}
                            placeholder='Enter sku'
                        />
                    </div>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor=''>Stock Quantity</label>
                    <div>
                        <input
                            type='number'
                            name='stockQuantity'
                            id='stockQuantity'
                            value={formData.product.stockQuantity}
                             onChange={(e) => updateFormData({ product:{...formData.product,stockQuantity:e.target.value} })}
                            placeholder='Enter stock quantity'
                        />
                    </div>
                </div>
            
            </form>
            <div className={style.ButtonGroup}>
                <button
                    type='button'
                    className={style.backButton} onClick={handleBack}>
                    Back
                </button>
                <button
                    type='button'
                    className={style.nextButton} onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    )
}