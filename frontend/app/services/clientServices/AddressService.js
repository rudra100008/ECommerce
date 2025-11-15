import api from "../../Component/axiosInterceptor";

export const fetchAllAddressesOfUser = async (userId) =>{
    try{
        const response = await api.get(`/api/address/user/${userId}`);
        console.log("Response of fetchAllAddressesOfUser: ",response)
        return response.data;
    }catch(err){
        console.log("error in AddressService: ",err.response.data);
        throw err;
    }
}

export const addAddress = async(addressDTO = {}) =>{
    try{
        const respsone = await api.post("/api/address/addAddress",addressDTO);
        console.log("Response of addAddress: ",respsone);
        return respsone.data;
    }catch(err){
        console.log("error in AddressService: ",err.response.data);
        throw err;
    }
}