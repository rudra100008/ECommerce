import api from '../Component/axiosInterceptor'

export const fetchAllCategories = async (pageNumber = 0,pageSize = 5) => {
    try{
        const res = await api.get(`/api/category/fetchAll`,{
            params:{
                pageNumber:pageNumber,
                pageSize:pageSize
            }
        })
        console.log("fetchAllCategories() in CategoryServices:",res)
        return res;
    }catch(error){
        console.log("fetchAllCategories() in CategoryServices: ",error.response?.data)
    }
}