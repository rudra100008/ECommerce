'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigation } from "./NavigationContext";
import { getOrderDetails } from "../services/clientServices/OrderService";

 const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({});
  const { userData, loadCurrentUser } = useNavigation();

  const fetchOrderDetails = async () => {
    const orderId = localStorage.getItem("orderId");
    const userId = localStorage.getItem("userId");

    try {
      if (!orderId || !userId) {
        console.log("OrderId or userId is missing.");
        return;
      }
      const data = await getOrderDetails(orderId, userId);
    } catch (err) {
      console.error("Error in OrderContext: ", err.response?.data);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const value = {
    orderData,
    setOrderData,

    fetchOrderDetails,
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
