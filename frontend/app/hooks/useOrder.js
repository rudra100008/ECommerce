import { useEffect, useState } from "react"
import { createOrder } from "../services/clientServices/OrderService";
import { useCart } from "../Context/CartContext";
import { useAuth } from './useAuth';

export const useOrder = () =>{
    const {checkedCartItems} = useCart();
    const {user} = useAuth();
    const [orderItems,setOrderItems] = useState([]);
    const [order,setOrder] = useState({
        orderId:'',
        orderDate:null,
        status:'',
        totalAmount:null,
        userId:user.userId,
        createdAt:null,
        updatedAt:null,
        orderItemIds:[],
        shippingAddress:{}
    })
   useEffect(()=>{
    console.log("CheckedCartItem in useOrder: ",checkedCartItems)
   },[])
    const saveOrder =async ()=>{
        try{

            const items =[];
            checkedCartItems.forEach(item => items.push({
                quantity:item.quantity,
                productId:item.productId,
                priceAtPurchase:item.product.price,
                discountPurchase:item.product.discount
            }))
            console.log("items: ",items)
            setOrderItems(items);
            const orderData = {
                orderDTO:{
                    userId:user.userId
                },
                orderItemDTOs:items
            }
            const response = await createOrder(orderData);
            setOrder(order);
            localStorage.setItem("orderId",order.orderId)
            console.log("Response in userOrder: ",response);

        }catch(err){
            console.log("Error in userOrder: ",err.response?.data);
        }
    }


    return {
        orderItems,
        order,

        saveOrder
    }
 }