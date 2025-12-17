"use client";
import { useState } from "react";
import style from "../../CSS/userSide/shippingAddressForm.module.css";
export default function ShippingAddress() {
  const [shippingAddress, setShippingAddress] = useState({
    shippingDistrict: "",
    shippingProvince: "",
    shippingMunicipality: "",
    shippingWardNumber: "",
    shippingLandmark: "",
    houseNumber: "",
    addressType: "",
  });
  const [userData, setUserData] = useState({
    fullName: "",
    phoneNumber: "",
  });
  const onShippingAddressChange = (e) => {
    const { name, value } = e.target;
    console.log("Name: ", name, "value: ", value);
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDataSubmit = ()=>{

  }

  const handleCancelClick = ()=>{

  }
  return (
    <div className={style.FormContainer}>
      <div className={style.title}>
        <h3>Shipping Address</h3>
      </div>
      <div className={style.FormSection}>
        <form onSubmit={handleDataSubmit} className={style.Form}>

          <div className={style.inpputSection}>
            <label htmlFor="fullName">Full Name</label>
            <div className={style.inputGroup}>
              <input
                id="fullName"
                name="fullName"
                value={userData.fullName}
                onChange={handleUserDataChange}
                placeholder="Enter a full Name"
              />
            </div>
          </div>

          <div className={style.inputSection}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <div className={style.inputGroup}>
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleUserDataChange}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className={style.inputSection}>
            <label htmlFor="houseNumber">House Number</label>
            <div className={style.inputGroup}>
              <input
                id="houseNumber"
                name="houseNumber"
                value={shippingAddress.houseNumber}
                onChange={onShippingAddressChange}
                placeholder="Enter house number"
              />
            </div>
          </div>

          <div className={style.inputSection}>
            <label htmlFor="">Land Mark</label>
            <div className={style.inputGroup}>
              <input
                id="shippingLandmark"
                name="shippingLandmark"
                value={shippingAddress.shippingLandmark}
                onChange={onShippingAddressChange}
                type="text"
                placeholder="Enter a  land mark"
              />
            </div>
          </div>

          <div className={style.inputSection}>
            <label htmlFor="">Province</label>
            <div className={style.inputGroup}>
              <select
                id="shippingProvince"
                name="shippingProvince"
                value={shippingAddress.shippingProvince}
                onChange={onShippingAddressChange}
                className={style.selectGroup}
              >
                <option value={""}>Select a province</option>/
                <option value={"Bagmati"}>Bagmati</option>
              </select>
            </div>
          </div>

          <div className={style.inputSection}>
            <label>District</label>
            <div className={style.inputGroup}>
              <select
                id="shippingDistrict"
                name="shippingDistrict"
                value={shippingAddress.shippingDistrict}
                onChange={onShippingAddressChange}
                className={style.selectGroup}
              >
                <option value={""}>Select a district</option>
                <option value={"Kathmandu"}>Kathmandu</option>
              </select>
            </div>
          </div>

          <div className={style.inputSection}>
            <label htmlFor="">Municipality</label>
            <div className={style.inputGroup}>
              <select
                id="shippingMunicipality"
                name="shippingMunicipality"
                value={shippingAddress.shippingMunicipality}
                onChange={onShippingAddressChange}
                className={style.selectGroup}
              >
                <option value={""}>Select a municipality</option>
                <option value={"Gokarneshwor"}>Gokarneshwor</option>
              </select>
            </div>
          </div>

          <div className={style.inputSection}>
            <label htmlFor="">Ward number</label>
            <div className={style.inputGroup}>
              <select
                id="shippingWardNumber"
                name="shippingWardNumber"
                value={shippingAddress.shippingWardNumber}
                onChange={onShippingAddressChange}
                className={style.selectGroup}
              >
                <option value={""}>Select a wardNumber</option>
                <option value={"6"}>6</option>
              </select>
            </div>
          </div>
          <div className={style.actionGroup}>
            <div>
              <button onClick={handleCancelClick} className={style.cancelButton} type="button">
                Cancel
              </button>
              <button className={style.submitButton} type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
