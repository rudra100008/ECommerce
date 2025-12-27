"use client";
import { useEffect, useState } from "react";
import { useNavigation } from "../Context/NavigationContext";
import style from "../CSS/userSide/cartItemTable.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../Context/CartContext";
import { useNotification } from "../Context/NotificationContext";
export default function CartItemTable() {
  const { userData } = useNavigation();
  const { error } = useNotification();
  const {
    cartItems,
    loading,
    removeItemFromCart,
    updateItemQuantity,
    fetchCartItems,
    checkedCartItems,
    setCheckedCartItems,
    handleCheckBox,
  } = useCart();


  const [updatingItems, setUpdatingItems] = useState(new Set());

  const handleShowImage = (productId) => {};
  const handleQuantityChange = async (cartItemId, itemQuantity) => {
    if (itemQuantity < 1) return;

    try {
      await updateItemQuantity(cartItemId, itemQuantity);
      setCheckedCartItems((prev) =>
        prev.map((item) =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: itemQuantity }
            : item
        )
      );
    } catch (err) {
      console.log("Error", err.response.data);
      const { message } = err.response.data;
      if (err.response.data.status === 400) {
        error(message);
      }
      fetchCartItems();
    } finally {
      setUpdatingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(cartItemId);
        return newSet;
      });
    }
  };

  const handleRemoveItem = async (cartItemId) => {
    try {
      await removeItemFromCart(cartItemId);
    } catch (err) {
      console.log("error: ", err.response?.data);
    }
  };

  const calulateTotal = (item) => {
    return (item.product.price - item.product.discount) * item.quantity;
  };

  useEffect(() => {
    console.log("CartItems checked: ", checkedCartItems);
  }, [checkedCartItems]);

  if (loading) {
    return <div className={style.loading}>Loading cart...</div>;
  }
  return (
    <div className={style.cartTableContainer}>
      <h2>Shopping Cart</h2>

      {cartItems?.length === 0 ? (
        <div className={style.emptyCart}>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <table className={style.cartTableBody}>
            <thead className={style.tableHead}>
              <tr className={style.headRow}>
                <th>SN</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody className={style.tableBody}>
              {cartItems &&
                cartItems.map((item, index) => (
                  <tr key={item.cartItemId} className={style.bodyRow}>
                    <td>{index + 1}</td>
                    <td>
                      <button
                        className={style.imageButton}
                        onClick={() => handleShowImage(item.product.productId)}
                        type="button"
                      >
                        See Product Image
                      </button>
                    </td>
                    <td className={style.productName}>
                      {item.product.productName}
                    </td>
                    <td className={style.price}>
                      Rs {item.product.price - item.product.discount || 0}
                    </td>
                    <td className={style.quantity}>
                      <div className={style.quantityControls}>
                        <div
                          onClick={() =>
                            handleQuantityChange(
                              item.cartItemId,
                              item.quantity - 1
                            )
                          }
                          className={`${style.minusButton}`}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                        {item.quantity}
                        <div
                          onClick={() =>
                            handleQuantityChange(
                              item.cartItemId,
                              item.quantity + 1
                            )
                          }
                          className={`${style.plusButton}`}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      </div>
                    </td>
                    <td className={style.totalPrice}>
                      Rs {item.product ? calulateTotal(item) : "N/A"}
                    </td>
                    <td className={style.actions}>
                      <button
                        onClick={() => handleRemoveItem(item.cartItemId)}
                        className={style.removeButton}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                    <td className={style.checkBoxSection}>
                      <input
                        type="checkbox"
                        onChange={(e) => handleCheckBox(item)}
                        className={style.checkBox}
                        checked={checkedCartItems.some(
                          (checked) => checked.cartItemId === item.cartItemId
                        )}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
