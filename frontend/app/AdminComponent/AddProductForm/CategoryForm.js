import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../CSS/adminNavbar/AddProductForm/categoryForm.module.css'
import { faArrowLeft, faArrowRight, faTag } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { addCategory } from '../../services/adminServices/ProductCategoryServices';
import { useState } from 'react';
export default function CategoryForm({ setState, formData, updateFormData }) {
    const [validationError,setValidationError] = useState({
        name:''
    });
    const router = useRouter();
    const handleNext = async (e) => {
        e.preventDefault();
        try {
            const cleanCategoryData ={
                name : formData.category.name
            };
            const result = await addCategory({ category:cleanCategoryData, setValidationError });
            updateFormData({category:{...formData.category,...result.data}})
            setState('product');
        } catch (error) {
            console.error("Failed to create category:", error.response?.data);
        }
    }

    const handleCancel = () => {
        router.push("/admin")
        updateFormData({
            category: { name: '' },
            product: {
                productName: '',
                description: '',
                price: '',
                discount: '',
                sku: '',
                stockQuantity: ''
            },
            images: []

        })
    }
    return (
        <div className={style.categoryForm}>
            <div className={style.title}>
                <h3>Category</h3>
            </div>
            <div className={style.inputGroup}>
                <label className={style.label} htmlFor='categoryName'>Category</label>
                <div className={style.inputWrapper}>
                    <FontAwesomeIcon icon={faTag} className={style.tagIcon} />
                    <input
                        className={style.textInput}
                        type='text'
                        name='categoryName'
                        id='categoryName'
                        value={formData.category.name}
                        onChange={(e) => updateFormData({
                            category: { ...formData.category, name: e.target.value }
                        })}
                        placeholder='Enter category of product'
                    />
                </div>
                <span className={style.validationError}>{validationError.name}</span>
            </div>

            <div className={style.ButtonGroup}>
                <button
                    type='button'
                    onClick={handleCancel}
                    className={style.backButton} >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Cancel
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