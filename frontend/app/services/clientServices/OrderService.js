import api from "../../Component/axiosInterceptor";

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

export const cancelOrder = async(orderId)=>{
    try{
        const response = await api.delete(`/api/order/${orderId}`);
        console.log("Response in OrderService: ",response.data)
    }catch(err){
        console.log("Error in OrderService: ",err.response?.data);
        throw err;
    }
}