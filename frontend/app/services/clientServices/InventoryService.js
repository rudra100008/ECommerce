// import api from "../../Component/axiosInterceptor"


// export const productDetailsInInventory = async(productId) =>{
//     try{
//         const response  = await api.get(`/api/inventory/${productId}`);
//         console.log("Response in inventoryService: ",response.data)
//         return response.data;
//     }catch(err){
//           console.log("Error in inventoryService: ",err.response.data);
//           throw err;
//     }
// }

// export const updateReservedQuantity = async (productId,quantity) =>{
//     try{
//         const response = await api.put(`/api/inventory/${productId}/reserved-quantity/${quantity}`);
//          console.log("Response in inventoryService: ",response.data);
//          return response.data;
//     }catch(err){
//           console.log("Error in inventoryService: ",err.response.data);
//           throw err;
//     }
// }