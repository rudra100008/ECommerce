
import api from '../../Component/axiosInterceptor'

export const addCategory = async ({ category, setValidationError }) => {
    try {
        // console.log('Category: ', category)
        const res = await api.post('/api/admin/category', category);
        // console.log("Add Category Res: ", res);
        return res;
    } catch (error) {
        if (error.response.status === 400) {
            setValidationError({ name: error.response.data?.name || "Validation Failed."  })
        } else {
            console.log("AddCategory(): ", error.response.data);
        }
        throw error;
    }
}

export const createProduct = async ({ product,category }) => {
    try {
        product.categoryId = category.categoryId;
        console.log('Product: ',product);
        const res = await api.post('/api/admin/addProduct',product);
        console.log("CreateProduct(): ", res.response.data);
        return res.data;
    } catch (error) {
        console.log("CreateProduct(): ", error.response?.data);
        throw error;
    }
}