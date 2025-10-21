
import { useState } from 'react';
import style from '../../CSS/adminNavbar/AddProductForm/productImage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUpload, faX } from '@fortawesome/free-solid-svg-icons';
import { addProductImage } from '../../services/adminServices/ProductCategoryServices';
import { useRouter } from 'next/navigation';

export default function ProductImage({ setState, formData, updateFormData }) {
    const [previewUrls, setPreviewUrls] = useState([]);
    const router = useRouter();
    const handleBack = () => {
        setState('product');
    }

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        updateFormData({ images: [...formData.images, ...files] });

        const newPreviewUrls = files.map(file => URL.createObjectURL(file));
        setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
        e.target.value = "";
    }
    console.log("FormData.Images ", formData);
    console.log("previewUrls ", previewUrls)

    const removeImage = (index) => {
        const newImages = formData.images.filter((_, i) => i !== index);
        console.log("New Images", newImages)
        updateFormData({ images: newImages });

        URL.revokeObjectURL(previewUrls[index]);
        const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
        setPreviewUrls(newPreviewUrls);
    }
    
   const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.images.length === 0) {
        alert("Select at least 1 image");
        return;
    }
    try {
        const formDataToSend = new FormData();
    
        formData.images.forEach((image, index) => {
            formDataToSend.append("images", image);
        });
        
        console.log("FormData being sent:", formDataToSend);
        
        const res = await addProductImage({ 
            product: formData.product, 
            images: formDataToSend  
        });
        console.log("Response of handleSubmit() in productImage: ", res.data);

        setTimeout(()=> router.push("/admin"),2000)
    } catch (error) {
        console.log("Error in handleSubmit() in productImage", error.response?.data);
    }
}
    return (
        <div className={style.productImage}>
            <div className={style.header}>
                <h3>Add a Product Image</h3>
                <p>Select multiple images</p>
            </div>

            <div className={style.inputGroup}>
                <label htmlFor='productImage' className={style.customLabel}>
                    <FontAwesomeIcon icon={faUpload} />
                    Upload Image
                </label>
                <input
                    type='file'
                    multiple
                    id='productImage'
                    accept='image/*'
                    onChange={handleImageChange}
                    className={style.hiddenFileInput}
                />
            </div>

            {previewUrls.length > 0 && (
                <div className={style.imagePreviews}>
                    <h3>Selected Images</h3>
                    <div className={style.previewGrid}>
                        {previewUrls.map((url, index) => (
                            <div key={index} className={style.previewItem}>
                                <img
                                    src={url}
                                    alt={`Preview ${index + 1}`}
                                    className={style.previewImage}
                                />
                                <button
                                    type='button'
                                    onClick={() => removeImage(index)}
                                    className={style.removeButton}
                                >
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                                <span className={style.imageName}>
                                    {formData.images[index]?.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {previewUrls.length === 0 && (
                <div className={style.noImages}>
                    <p>No images selected yet</p>
                </div>
            )}
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
                    onClick={handleSubmit}
                    className={style.nextButton}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}