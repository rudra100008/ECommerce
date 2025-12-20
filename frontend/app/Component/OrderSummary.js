"use client";
import { useEffect, useState } from "react";
import style from "../CSS/userSide/cartItemTable.module.css";
import { useOrderSection } from "../hooks/useOrderSection";
import Link from "next/link";
import { useCart } from "../Context/CartContext";
import { useRouter } from "next/navigation";
import { useNotification } from "../Context/NotificationContext";
import { useOrder } from "../hooks/useOrder";
export default function OrderSummary() {
  const router = useRouter();
  const { success, error } = useNotification();
  const { subTotal, setSubTotal, fetchSubTotal } = useOrderSection();
  const { checkedCartItems } = useCart();
  const [shippingFee, setShippingFee] = useState(0.0);
  const { order, orderItems, saveOrder } = useOrder();
   const [isLoading, setIsLoading] = useState(false);
  const isButtonDisabled = checkedCartItems.length === 0 || isLoading;
  const handleProceedToCheckOut = async (e) => {
    e.preventDefault(); // Prevent default navigation
    
    if (checkedCartItems.length === 0) {
      error("Please select at least one item to proceed to checkout.");
      return;
    }

    try {
      setIsLoading(true);
  
       await saveOrder();
      
    
      router.push("/order/shippingAddress");
      
    } catch (err) {
      error("Failed to create order. Please try again.");
      console.error("Error in handleProceedToCheckOut:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("checkedCartItems changed:", checkedCartItems);

    if (checkedCartItems.length === 0) {
      setSubTotal(0);
      return;
    } else if (checkedCartItems.length > 0) {
      fetchSubTotal();
    }
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
  }, [checkedCartItems]);

  

  return (
    <div className={style.orderSection}>
      <div>
        <h3 className={style.title}>Order Summary</h3>
      </div>
      <div className={style.detailSection}>
        <div className={style.subTotalSection}>
          <p>
            Sub Total ({checkedCartItems.length}): <span>{subTotal}</span>
          </p>
        </div>
        <div className={style.shippingFeeSection}>
          <p>
            Shipping Fee: <span>{shippingFee}</span>
          </p>
        </div>
        <div className={style.buttonSection}>
          <button
            disabled={isButtonDisabled}
            className={isButtonDisabled ? style.disabledButton : ""}
            onClick={handleProceedToCheckOut}
          >
            {isLoading ? "Processing..." : "Proceed To Check Out"}
          </button>
        </div>
      </div>
    </div>
  );
}
