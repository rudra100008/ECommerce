"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigation } from "./NavigationContext";
import { getOrderDetails } from "../services/clientServices/OrderService";
import { fetchAllOrderItems } from './../services/clientServices/OrderItemService';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({});
  const [shippingAddress, setShippingAddress] = useState({});
  const { userData, loadCurrentUser } = useNavigation();
  const [orderItems, setOrderItems] = useState([]);

  const fetchOrderDetails = async () => {
    const orderId = localStorage.getItem("orderId");
    const userId = localStorage.getItem("userId");

    try {
      if (!orderId || !userId) {
        console.log("OrderId or userId is missing.");
        return;
      }
      const data = await getOrderDetails(orderId, userId);
      setOrderData(data);
    } catch (err) {
      console.error("Error in OrderContext: ", err.response?.data);
    }
  };

  const fetchOrderItems = async (itemIds =[]) =>{
    if(!itemIds) return
    try{
      const data = await fetchAllOrderItems(itemIds);
      setOrderItems(data);
      console.log("Data of orderItems : ",data)
    }catch(err){
      console.log("Error in fetchOrderItems: ",err.response?.data)
    }
  }
  useEffect(() => {
    if (orderData.shippingAddressDTO) {
      setShippingAddress(orderData.shippingAddressDTO);
      
    }
    if(orderData.orderItemIds &&  orderData.orderItemIds?.length > 0){
      fetchOrderItems(orderData.orderItemIds)
    }
  }, [orderData]);

  const value = {
    orderData,
    shippingAddress,
    orderItems,

    setOrderItems,
    setShippingAddress,
    setOrderData,
    fetchOrderDetails,
    fetchAllOrderItems
  };
  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within OrderProvider");
  }

  return context;
};
