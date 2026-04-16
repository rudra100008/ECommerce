import api from "@/app/Component/axiosInterceptor";



export const addToCart = async(cartId,cartItem)=>{
    try{
        const requestData = {
            cartId:cartId,
            cartItemDTO:cartItem
        }
        console.log("RequestData: ",requestData)
        const response = await api.post("/api/cart/addToCart",requestData);
        console.log("Response in CartService: ",response)
        return response.data;
    }catch(err){
        console.log("Error in CartService: ",err.response?.data)
        throw err;
    }
}

export const fetchProductInCart = async (cartId) =>{
    try{
        const  response = await api.get("/api/cart/fetchProductInCart",{
            params:{
                cartId:cartId
            }
        })
        return response.data
    }catch(err){
        console.log("Error in CartService: ",err.response?.data)
        throw err;
    }
}

export const updateQuantityOfItem = async(cartItemId,quantity) =>{
    try{
        const response = await api.post(`/api/cart/${cartItemId}/update-quantity/${quantity}`);
        console.log("Response of updateQuantity: ",response);
        return response.data;
    }catch(err){
        console.log("Error in CartService: ",err.response?.data)
        throw err;
    }
}

export const deleteCartItemFromCart = async(cartItemId) => {
    try{
        const resposne = await api.delete(`/api/cart/${cartItemId}/delete-item`);
        console.log("Response of CartService",resposne);
    }catch(err){
        console.log("Error in CartService: ",err.response?.data)
        throw err;
    }
}

export const calculateSubTotal = async(cartItems)=>{
    try{
        if(!cartItems) return;
        const response = await api.post(`/api/cart/getSubTotal`,cartItems);
        console.log("Response in CartService: ",response.data);
        return response.data;
    }catch(err){
        console.log("Error in CartService: ",err.response.data)
    }
}