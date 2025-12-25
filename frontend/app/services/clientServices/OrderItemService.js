import api from "../../Component/axiosInterceptor";

export const fetchAllOrderItems = async(orderItemIds = [])=>{
    try{
        const response = await api.post(`/api/orderItem/fetchAllOrderItems`,orderItemIds);
        console.log("Response of OrderItemService: ",response);
        return response.data;
    }catch(err){
        console.log("Error in OrderItemService: ",err.response.data)
        throw err;
    }
}