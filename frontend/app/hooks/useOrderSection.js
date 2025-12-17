import { useCallback, useState } from "react"
import { calculateSubTotal } from "../services/clientServices/CartService";
import { useCart } from "../Context/CartContext";

export const useOrderSection = ()=>{
    const {checkedCartItems,setCheckedCartItems} = useCart();
    const [subTotal,setSubTotal] = useState(0);
    const fetchSubTotal = useCallback( async()=>{
        try{
            const data = await calculateSubTotal(checkedCartItems);
            setSubTotal(data);
        }catch(err){
            console.log("Error in fetchSubTotal:",err.response.data)
        }
    },[checkedCartItems])
    return {
        subTotal,
        setSubTotal,
        checkedCartItems,
        fetchSubTotal
    }
}