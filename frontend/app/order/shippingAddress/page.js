"use client";
import { useEffect, useState } from "react";
import style from "../../CSS/userSide/shippingAddressForm.module.css";
import { useAddressData } from "../../hooks/useAddressData";

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
  const {
    province,
    district,
    municipality,
    wards,
    fetchProvince,
    selectedAddress,
    fetchDistrict,
    fetchMunicipality,
    addWards,

    handleSelectedProvince,
    handleSelectedDistrict,
  } = useAddressData();

  const onShippingAddressChange = (e) => {
    const { name, value } = e.target;
    console.log("Name: ", name, "value: ", value);
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
    if (name === "shippingProvince") {
      handleSelectedProvince(value);
    } else if (name === "shippingDistrict") {
      handleSelectedDistrict(value);
    } else if (name === "shippingMunicipality") {

      addWards(parseInt(value, 10));
    }
  };

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDataSubmit = () => {};

  const handleCancelClick = () => {};

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    if (selectedAddress.provinceId !== null) {
      fetchDistrict(selectedAddress.provinceId);
    }
    if (selectedAddress.districtId !== null) {
      fetchMunicipality(selectedAddress.districtId);
    }
  }, [selectedAddress.provinceId, selectedAddress.districtId]);


  return (
    <div className={style.FormContainer}>
      <div className={style.title}>
        <h3>Shipping Address</h3>
        <span>Select a province for district and municipality</span>
      </div>
      <div className={style.FormSection}>
        <form onSubmit={handleDataSubmit}>
          <div className={style.Form}>
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
                  <option value={""}>Select a province</option>
                  {province &&
                    province.length > 0 &&
                    province.map((province, index) => (
                      <option key={index} value={province.provinceId}>
                        {province.englishName}
                      </option>
                    ))}
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
                  className={`${style.selectGroup}`}
                  disabled={selectedAddress.provinceId === null}
                >
                  <option value={""}>Select a district</option>
                  {district &&
                    district.length > 0 &&
                    district.map((district, index) => (
                      <option key={index} value={district.districtId}>
                        {district.englishName}
                      </option>
                    ))}
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
                  className={`${style.selectGroup}`}
                  disabled={selectedAddress.districtId === null}
                >
                  <option value={""}>Select a municipality</option>
                  {municipality &&
                    municipality.length > 0 &&
                    municipality.map((municipality, index) => (
                      <option key={index} value={municipality.municipalityId}>
                        {municipality.englishName}
                      </option>
                    ))}
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
                  {wards &&
                    wards.length > 0 &&
                    wards.map((ward, index) => (
                      <option key={index} value={ward}>{ward}</option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className={style.actionGroup}>
            <div>
              <button
                onClick={handleCancelClick}
                className={style.cancelButton}
                type="button"
              >
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
