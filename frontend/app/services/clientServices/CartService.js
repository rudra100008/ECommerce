import api from "../../Component/axiosInterceptor"


export const addToCart = async(cartId,cartItem)=>{
    try{
        const requestData = {
            cartId:cartId,
            cartItemDTO:cartItem
        }
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
        const resposne = await api.post(`/api/cart/${cartItemId}/update-quantity/${quantity}`);
        console.log("Response of updateQuantity: ",resposne);
        return resposne.data;
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