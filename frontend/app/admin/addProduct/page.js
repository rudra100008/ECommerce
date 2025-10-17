'use client'
import { useState } from "react";
import CategoryForm from "../../AdminComponent/AddProductForm/CategoryForm";
import ProductForm from "../../AdminComponent/AddProductForm/ProductForm";
import ProductImage from "../../AdminComponent/AddProductForm/ProductImage";
import { addCategory } from "../../services/adminServices/ProductCategoryServices";

export default function AddProductPage() {
    const [currentState, setCurrentState] = useState('category');
   const [formData, setFormData] = useState({
        category: {
            categoryId:'',
            name: ''
        },
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

    const updateFormData = (newData) => {
        setFormData(prevData => ({ ...prevData, ...newData }))
    }
    if (currentState === 'category') {
        return (
            <div>
                <CategoryForm
                    setState={setCurrentState}
                    formData={formData}
                    updateFormData={updateFormData}
                />
            </div>
        )
    } else if (currentState === 'product') {
        return (
            <div>
                <ProductForm
                    setState={setCurrentState}
                    formData={formData}
                    updateFormData={updateFormData}
                />
            </div>
        )
    } else if (currentState === 'productImage') {
        return (
            <div>
                <ProductImage
                    setState={setCurrentState}
                    formData={formData}
                    updateFormData={updateFormData}
                />
            </div>
        )
    }
}