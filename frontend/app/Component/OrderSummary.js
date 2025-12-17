"use client";
import { useEffect, useState } from "react";
import style from "../CSS/userSide/cartItemTable.module.css";
import { useOrderSection } from "../hooks/useOrderSection";
import Link from "next/link";
import { useCart } from "../Context/CartContext";
import { useRouter } from "next/navigation";
import { useNotification } from "../Context/NotificationContext";
export default function OrderSummary() {
  const router = useRouter();
  const { success, error } = useNotification();
  const { subTotal, setSubTotal, fetchSubTotal } = useOrderSection();
  const { checkedCartItems } = useCart();
  const [shippingFee, setShippingFee] = useState(0.0);
  const isButtonDisabled = checkedCartItems.length === 0;

  const handleProceedToCheckOut = (e) => {
    if (checkedCartItems.length === 0) {
      e.preventDefault();
      e.stopPropagation();
      error("Please select at least one item to proceed to checkout.");
      return;
    }
  };

  useEffect(() => {
    console.log("checkedCartItems changed:", checkedCartItems);
    console.log("Array length:", checkedCartItems.length);

    if (checkedCartItems.length === 0) {
      console.log("Empty cart, skipping subtotal calculation");
      setSubTotal(0);
      return;
    } else if (checkedCartItems.length > 0) {
      console.log("Fetching subtotal...");
      fetchSubTotal();
    }
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
            <Link
              onClick={(e) => isButtonDisabled && e.preventDefault()}
               href={isButtonDisabled ? "#" : "/order/shippingAddress"}
            >
              Proceed To Check Out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
