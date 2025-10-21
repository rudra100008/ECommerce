import { useState } from 'react'
import style from '../../CSS/adminNavbar/AddProductForm/editForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupee, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { updateProduct } from '../../services/ProductServices'
export default function EditProduct({ selectedProduct, setSelectedProduct, setShowEditForm }) {
    const [validationError, setValidationError] = useState({
        productName: '',
        description: '',
        price: '',
        discount: '',
        sku: '',
        stockQuantity: ''
    })

    const [localProduct,setlocalProduct] = useState(selectedProduct)
    const handleValueChange = (e) => {
        setlocalProduct((prev )=> ({...prev, [e.target.name ]: e.target.value}))
    }
    const handleEditButton = async() =>{
        try{
        const response = await updateProduct(localProduct);
        setSelectedProduct(response.data.product)
        }catch(error){
            console.log("Error in handleEditButton()",error.response?.data);
        }
    }

    const handleBackButton = () => {
        setShowEditForm(false)
    }

    return (
        <div className={style.editForm}>
            <div className={style.header}>
                <h3>Edit a Product</h3>
            </div>
            <form>
                <div className={style.InputGroup}>
                    <label htmlFor='productName'>Product Name</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='text'
                            name='productName'
                            id='productName'
                            value={localProduct.productName || ''}
                            onChange={(e) => handleValueChange(e)}
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
                            value={localProduct.description || ''}
                            onChange={(e) => handleValueChange(e)}
                            placeholder='Enter description'
                        />
                    </div>
                    <span className={style.validationError}>{validationError.description}</span>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='price'>Price</label>
                    <div className={style.inputWrapper}>
                        <FontAwesomeIcon className={style.inputIcon} icon={faRupee} />
                        <input
                            type='number'
                            name='price'
                            id='price'
                            value={localProduct.price || ''}
                            onChange={(e) => handleValueChange(e)}
                            placeholder='Enter a price'
                        />
                    </div>
                    <span className={style.validationError}>{validationError.price}</span>
                </div>
                <div className={style.InputGroup}>
                    <label htmlFor='discount'>Discount</label>
                    <div className={style.inputWrapper}>
                        <FontAwesomeIcon className={style.inputIcon} icon={faRupee} />
                        <input
                            type='number'
                            name='discount'
                            id='discount'
                            value={localProduct.discount || ''}
                            onChange={(e) => handleValueChange(e)}
                            placeholder='Enter discount'
                        />
                    </div>
                    <span className={style.validationError}>{validationError.discount}</span>
                </div>
                 <div className={style.InputGroup}>
                    <label htmlFor=''>Stock Quantity</label>
                    <div className={style.inputWrapper}>
                        <input
                            type='number'
                            name='stockQuantity'
                            id='stockQuantity'
                            value={localProduct.stockQuantity}
                            onChange={(e) => handleValueChange(e)}
                            placeholder='Enter stock quantity'
                        />
                    </div>
                    <span className={style.validationError}>{validationError.stockQuantity}</span>
                </div>

                <div className={style.ButtonGroup}>
                    <button
                        type='button'
                        className={style.backButton}
                        onClick={handleBackButton}
                    >
                        Back
                    </button>
                    <button
                        type='button'
                        className={style.editButton}
                        onClick={handleEditButton}
                    >
                        Edit Product
                    </button>
                </div>
            </form>
        </div>
    )
}