"use client";
import style from "../../CSS/userSide/orderReview.module.css";
import { RouteGuard } from "./../../Component/RouteGuard";
import { useOrderContext } from "../../Context/OrderContext";
import { useEffect, useState } from "react";
export default function OrderReview() {
  const {
    fetchOrderDetails,
    fetchAllOrderItems,
    orderData,
    shippingAddress,
    orderItems,
  } = useOrderContext();

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const getFormatedDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString("en-Us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const getFormatedDateAndTime = (dateAndTime) => {
    return new Date(dateAndTime).toTimeString;
  };
  const handleCancelClick = () => {
    const orderId = localStorage.getItem("orderId");
    if (orderId) {
      cancelOrder(orderId)
        .then(() => {
          localStorage.removeItem("orderId");
          router.push("/cart");
        })
        .catch((error) => {
          console.error("Failed to cancel order:", error);
          router.push("/cart");
        });
    } else {
      router.push("/cart");
    }
  };
  const handleNextClick = () => {};
 return (
    <RouteGuard requiredRole={"ROLE_CUSTOMER"}>
      <div className={style.orderReviewContainer}>
        <div className={style.title}>
          <h3>Order Review</h3>
        </div>

        <div className={style.orderDetailsContainer}>
          {/* Customer Information */}
          <div className={style.orderDetailSection}>
            <p>Full name: <span>{orderData.fullName || "N/A"}</span></p>
          </div>

          <div className={style.orderDetailSection}>
            <p>Phone Number: <span>{orderData.phoneNumber || "N/A"}</span></p>
          </div>

          <div className={style.orderDetailSection}>
            <p>Order Receiving Date: <span>{getFormatedDate(orderData.orderDate)}</span></p>
          </div>

          {/* Shipping Address */}
          {shippingAddress && (
            <div className={style.orderDetailSection}>
              <div className={style.shippingAddressSection}>
                <div>
                  <p>Shipping Address</p>
                  <p>Ward Number {shippingAddress.shippingWardNumber}</p>
                  <p>
                    {shippingAddress.shippingMunicipality}, {shippingAddress.shippingDistrict}, {shippingAddress.shippingProvince}
                  </p>
                </div>

                <div>
                  <p>House Number: <span>{shippingAddress.houseNumber || "N/A"}</span></p>
                </div>

                <div>
                  <p>Landmark: <span>{shippingAddress.shippingLandmark || "N/A"}</span></p>
                </div>

                <div>
                  <p>Shipping Area: <span>{shippingAddress.shippingArea || "N/A"}</span></p>
                </div>

                <div>
                  <p>Address Type: <span>{shippingAddress.addressType}</span></p>
                </div>
              </div>
            </div>
          )}

          {/* Order Items */}
          {orderItems && orderItems.length > 0 && (
            <div className={style.orderDetailSection}>
              <div className={style.orderItemsGrid}>
                {orderItems.map((item, index) => (
                  <div key={index} className={style.orderItemCard}>
                    <p><span>{item.productName}</span></p>
                    <p>Quantity: <span>{item.quantity}</span></p>
                    <p>Subtotal: <span>Rs. {item.subTotal}</span></p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Status */}
          <div className={`${style.orderDetailSection} ${style.statusSection}`}>
            <p>Order Status: <span>{orderData.status || "PENDING"}</span></p>
          </div>

          {/* Total Amount */}
          <div className={`${style.orderDetailSection} ${style.totalAmountSection}`}>
            <p>Total Amount: <span>Rs. {orderData.totalAmount || 0}</span></p>
          </div>

          {/* Action Buttons */}
          <div className={style.actionGroup}>
            <div className={style.cancelButton}>
              <button onClick={handleCancelClick}>Cancel Order</button>
            </div>
            <div className={style.nextButton}>
              <button onClick={handleNextClick}>Proceed to Payment</button>
            </div>
          </div>
        </div>
      </div>
    </RouteGuard>
  );
}
