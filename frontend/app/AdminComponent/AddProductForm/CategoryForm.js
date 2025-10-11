import style from '../../CSS/adminNavbar/AddProductForm/categoryForm.module.css'
export default function CategoryForm({ setState, formData, updateFormData }) {
    const handleNext = () => {
        setState('product');
    }
    return (
        <div className={style.categoryForm}>
            <div className={style.title}>
                <h3>Category</h3>
            </div>
            <div className={style.inputGroup}>
                <label className={style.label} htmlFor='categoryName'>Category Name</label>
                <input
                    className={style.textInput}
                    type='text'
                    name='categoryName'
                    id='categoryName'
                    value={formData.category.name}
                    onChange={(e)=> updateFormData({
                        category :{...formData.category,name:e.target.value}
                    })}
                    placeholder='Enter categoryName'
                />
            </div>

            <div className={style.ButtonGroup}>
                <button type='button' className={style.backButton} >Cancel</button>
                <button
                    type='button'
                    className={style.nextButton}
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    )
}