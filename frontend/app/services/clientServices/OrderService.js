import api from "../../Component/axiosInterceptor";
import ShippingAddress from './../../order/shippingAddress/page';

export const createOrder = async(orderRequest) => {
    try{
        const response = await api.post(`/api/order`,orderRequest)
        console.log("Response in OrderService: ",response)
        return response.data;
    }catch(err){
        console.log("Error in OrderService: ",err.response?.data)
        throw err;
    }
}

export const getOrderDetails = async(orderId,userId)=>{
    try{
        const response = await api.get(`/api/order/${orderId}/user/${userId}`);
        console.log("Response in OrderService:",response);
        return response.data;
    }catch(err){
        console.log("Error in OrderService: ",err.response.data);
        throw err;
    }
}
export const cancelOrder = async(orderId)=>{
    try{
        console.log("Cancelling a order")
        const response = await api.delete(`/api/order/${orderId}`);
        console.log("Response in OrderService: ",response.data)
    }catch(err){
        console.log("Error in OrderService: ",err.response?.data);
        throw err;
    }
}

export const saveShippingAddress = async (orderId,userId,order) => {
    try{
        const response  = await api.post(`/api/order/${orderId}/shippingAddress/user/${userId}`,order);
        console.log("Response in OrderService: ",response);
        return response.data;
    }catch(err){
        console.log("Error in OrderService: ",err.response?.data)
        throw err;
    }
}