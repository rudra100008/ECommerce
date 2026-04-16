import api from "../../component/axiosInterceptor";

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
        const response = await api.post("/api/address/addAddress",addressDTO);
        console.log("Response of addAddress: ",response);
        return response.data;
    }catch(err){
        console.log("error in AddressService: ",err.response.data);
        throw err;
    }
}

export const removeAddressById = async(userId = 0 ,addressId = 0)=>{
    try{
        const response = await api.delete(`/api/address/${addressId}/user/${userId}`)
        console.log("Response: ",response.data.message)
        return response.data
    }catch(err){
        console.log("error in AddressService: ",err.response.data);
        throw err;
    }
}

export const updateAddress = async (address = {}) =>{
    try{
        const response = await api.put('/api/address/updateAddress',address);
        console.log("Response in AddressService:",response.data)
        return response.data
    }catch(err){
        console.log("Error in AddressService:",err.response.data)
    }
}

export const getProvinces = async()=>{
    try{
        const response = await api.get(`/api/address/province`);
        console.log("Response in addressService: ",response);
        return response.data;
    }catch(err){
        console.log("Error in AddressService: ",err.response.data);
        throw err;
    }
}

export const getDistricts = async(provinceId = null)=>{
    try{
        const response  = await api.get(`/api/address/district/${provinceId}`);
        console.log("Response in AddressService: ",response.data)
        return response.data
    }catch(err){
        console.log("Error in AddressService: ",err.response.data)
        return err;
    }
}

export const getMunicipalities = async(districtId = null)=>{
    try{
        const response  = await api.get(`/api/address/municipality/${districtId}`);
        console.log("Response in AddressService: ",response.data);
        return response.data
    }catch(err){
        console.log("Error in AddressService: ",err.response.data)
        return err;
    }
}