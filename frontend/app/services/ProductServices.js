import api from '../Component/axiosInterceptor'
export const fetchProductsWithCategoryId = async (pageNumber = 0, pageSize = 10,categoryId = 8) => {
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
