import api from '../../Component/axiosInterceptor'

export const addCategory = async ({ category, setValidationError }) => {
    try {
        // console.log('Category: ', category)
        const res = await api.post('/api/admin/category', category);
        // console.log("Add Category Res: ", res);
        return res;
    } catch (error) {
        if (error.response.status === 400) {
            setValidationError({ name: error.response.data?.name || "Validation Failed." })
        } else if (error.response && error.response.status === 401) {

        } else {
            console.log("AddCategory(): ", error.response.data);
        }
        throw error;
    }
}

export const createProduct = async ({ product, category, setValidationError }) => {
    try {
        product.categoryId = category.categoryId;
        console.log('Product in CreateProduct(): ', product);
        const res = await api.post('/api/admin/addProduct', product);
        console.log(" Res of CreateProduct(): ", res.data);
        return res;
    } catch (error) {
        const validationEr = error.response.data
        if (error.response && error.response.status === 400) {
            setValidationError(prevData => ({ ...prevData, ...validationEr }));
        }
        console.log("Error in CreateProduct(): ", error.response?.data);
        throw error;
    }
}

export const addProductImage = async ({ product, images }) => {
    try {
        console.log("Sending FormData with productId:", product.productId);

        const res = await api.post(
            `/api/admin/addProductImage/${product.productId}`,
            images,  // This should now be the FormData object
            {
                headers: {
                    'Content-Type': 'multipart/form-data'  // Explicitly set content type
                }
                // Remove responseType: 'blob' unless you're expecting a file back
            }
        );
        console.log("Res of addProductImage(): ", res);
        return res;
    } catch (error) {
        console.log("Error in addProductImage(): ", error.response?.data);
        throw error;
    }
}


