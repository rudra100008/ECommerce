import api from "../../Component/axiosInterceptor"


export const fetchRandomProduct=async({pageNumber = 0,pageSize=9})=>{
    try{
        const res = await api.get('/api/product/fetchProducts',{
            params:{
                pageNumber:pageNumber,
                pageSize:pageSize
            }
        })
        console.log("Response in ProductService of fetchRandomProductByCategoryId():",res)
        return res;
    }catch(error){
        console.log("Error in ProductService of fetchRandomProductByCategoryId():",error.response?.data)
        throw error;
    }
}

export const findProductById = async (productId) => {
    console.log("ProductId: ",productId)
    try{
        const response = await api.get(`/api/product/${productId}`);
        console.log("Response of ProductService: ",response);
        return response.data;
    }catch(error){
        console.log("Error in ProductService: ",error.response?.data)
        throw error;
    }
}