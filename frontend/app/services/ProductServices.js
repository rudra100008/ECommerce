import api from '../Component/axiosInterceptor'

export const fetchProductsWithCategoryId = async (pageNumber = 0, pageSize = 10,categoryId = null) => {
    try {
        const response = await api.get(`/api/admin/products/category/${categoryId}`, {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        })
        console.log("fetchProductsWithCategoryId() in productServices: ",response)
        return response;
    } catch (error) {
        console.log("Error in fetchProductsWithCategoryId(): ",error.response?.data)
        throw error;
    }
}

export const fetchProductImageUrls = async (productId) =>{
    try{
        const response = await api.get(`/api/product/imageUrl/${productId}`)
        console.log("Response of fetchProductImageUrls():",response);
        return response;
    }catch(error){
        console.log("Error in fetchProductImageUrls():",error.response?.data);
        throw error;
    }
}


export const updateProduct  = async (product={}) => {
    try{
        const response = await api.put("/api/product/updateProduct",product)
        console.log("Respons ein updateProduct in productService: ",response);
        return response
    }catch(error){
        console.log("Error in updateProduct() in productService",error.response?.data)
        throw error;
    }
}
