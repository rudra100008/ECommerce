import { useEffect, useState } from "react";
import { createOrder } from "../services/clientServices/OrderService";
import { useCart } from "../Context/CartContext";
import { useAuth } from "./useAuth";
import { useNotification } from "../Context/NotificationContext";

export const useOrder = () => {
  const { checkedCartItems } = useCart();
  const { user } = useAuth();
  const { error } = useNotification();
  const [orderItems, setOrderItems] = useState([]);
  const [order, setOrder] = useState({
    orderId: "",
    orderDate: null,
    status: "",
    totalAmount: null,
    userId: user.userId,
    createdAt: null,
    updatedAt: null,
    orderItemIds: [],
    shippingAddress: {},
  });
  useEffect(() => {
    console.log("CheckedCartItem in useOrder: ", checkedCartItems);
  }, []);
  const saveOrder = async () => {
    try {
      const items = [];
      checkedCartItems.forEach((item) =>
        items.push({
          quantity: item.quantity,
          productId: item.productId,
          priceAtPurchase: item.product.price,
          discountPurchase: item.product.discount,
        })
      );
      console.log("items: ", items);
      setOrderItems(items);
      const orderData = {
        orderDTO: {
          userId: user.userId,
        },
        orderItemDTOs: items,
      };
      const response = await createOrder(orderData);
      setOrder(response.data);
      localStorage.setItem("orderId", response.data.orderId);
      console.log("Response in userOrder: ", response);

      return response;
    } catch (err) {
      if (err.response) {
        console.log("Error in userOrder: ", err.response?.data);
        const { message } = err.response?.data;
        
        if (err.response?.data && err.response?.data.status === 400) {
          error(message || "Failed to create order");
        } else {
          error("An error occurred while creating the order");
        }
      } else {
        error("Network error. Please check your connection.");
      }

      throw err;
    }
  };

  return {
    orderItems,
    order,

    saveOrder,
  };
};
