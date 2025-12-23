"use client";
import { useCallback, useEffect, useState } from "react";
import style from "../../CSS/userSide/shippingAddressForm.module.css";
import { useAddressData } from "../../hooks/useAddressData";
import { cancelOrder, saveShippingAddress } from "../../services/clientServices/OrderService";
import { useRouter } from "next/navigation";
import { useNavigation } from "@/app/Context/NavigationContext";

export default function ShippingAddress() {
  const [isMunicipalitySelected, setIsMunicipalitySelected] = useState(true);
  const router = useRouter();
  const { userData ,loadCurrentUser} = useNavigation();
  
  const [shippingAddress, setShippingAddress] = useState({
    shippingDistrict: "",
    shippingProvince: "",
    shippingMunicipality: "",
    shippingWardNumber: "",
    shippingLandmark: "",
    houseNumber: "",
    addressType: "HOUSE",
  });
  
  const [validationErr, setValidationErr] = useState({});
  
  const [userInfo, setUserInfo] = useState({
    fullName: userData?.fullName || "",
    phoneNumber: userData?.phoneNumber || "",
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
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (validationErr[name]) {
      setValidationErr((prev) => ({ ...prev, [name]: "" }));
    }
    
    if (name === "shippingProvince") {
      handleSelectedProvince(value);
    } else if (name === "shippingDistrict") {
      handleSelectedDistrict(value);
    } else if (name === "shippingMunicipality") {
      setIsMunicipalitySelected(false);
      addWards(parseInt(value, 10));
    }
  };

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    
  
    if (validationErr[name]) {
      setValidationErr((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log("Shipping Address submit...");
      const orderId = localStorage.getItem("orderId");
      console.log("OrderId: ",orderId)
      if (!userData || !orderId) {
        console.error("Missing userData or orderId");
        return;
      }

      // Construct the complete OrderDTO
      const orderRequest = {
        orderId: parseInt(orderId, 10),
        userId: userData.userId,
        fullName: userInfo.fullName,
        phoneNumber: userInfo.phoneNumber,
        shippingAddressDTO: {
          ...shippingAddress,
          shippingWardNumber: parseInt(shippingAddress.shippingWardNumber, 10)
        }
      };

      console.log("Sending order request:", orderRequest);
      
      const data = await saveShippingAddress(orderId, userData.userId, orderRequest);
      console.log("Data in handleSubmit: ", data);
      
      localStorage.removeItem("orderId");
      router.push("/order/review");
      
    } catch (err) {
      console.error("Error submitting form:", err);
      
      if (err.response) {
        console.error("Error response:", err.response.data);
        
        if (err.response.status === 400) {
         
          const errors = err.response.data;
          
          const transformedErrors = {};
          Object.keys(errors).forEach(key => {
            const newKey = key.replace('shippingAddressDTO.', '');
            transformedErrors[newKey] = errors[key];
          });
          
          setValidationErr(transformedErrors);
        }
      }
    }
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

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    if (userData) {
      setUserInfo({
        fullName: userData.fullName || "",
        phoneNumber: userData.phoneNumber || "",
      });
    }
  }, [userData]);

  useEffect(() => {
    if (selectedAddress.provinceId !== null) {
      fetchDistrict(selectedAddress.provinceId);
    }
    if (selectedAddress.districtId !== null) {
      fetchMunicipality(selectedAddress.districtId);
    }
  }, [selectedAddress.provinceId, selectedAddress.districtId]);

  useEffect(()=>{
    const fetchCurrentUser = async()=>{
      await loadCurrentUser();
    }
    console.log("Loading current user...")
    fetchCurrentUser();
 
  },[])
  console.log("UserData: ",userData)
  return (
    <div className={style.FormContainer}>
      <div className={style.title}>
        <h3>Shipping Address</h3>
        <span>Select a province for district and municipality</span>
      </div>
      <div className={style.FormSection}>
        <form noValidate onSubmit={handleDataSubmit}>
          <div className={style.Form}>
            <div className={style.inputSection}>
              <label htmlFor="fullName">Full Name *</label>
              <div className={style.inputGroup}>
                <input
                  id="fullName"
                  name="fullName"
                  value={userInfo.fullName}
                  onChange={handleUserDataChange}
                  placeholder="Enter full name"
                  required
                />
              </div>
              {validationErr.fullName && (
                <span className={style.error}>{validationErr.fullName}</span>
              )}
            </div>

            <div className={style.inputSection}>
              <label htmlFor="phoneNumber">Phone Number *</label>
              <div className={style.inputGroup}>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleUserDataChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              {validationErr.phoneNumber && (
                <span className={style.error}>{validationErr.phoneNumber}</span>
              )}
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
              {validationErr.houseNumber && (
                <span className={style.error}>{validationErr.houseNumber}</span>
              )}
            </div>

            <div className={style.inputSection}>
              <label htmlFor="shippingLandmark">Land Mark</label>
              <div className={style.inputGroup}>
                <input
                  id="shippingLandmark"
                  name="shippingLandmark"
                  value={shippingAddress.shippingLandmark}
                  onChange={onShippingAddressChange}
                  type="text"
                  placeholder="Enter a landmark"
                />
              </div>
              {validationErr.shippingLandmark && (
                <span className={style.error}>{validationErr.shippingLandmark}</span>
              )}
            </div>

            <div className={style.inputSection}>
              <label htmlFor="shippingProvince">Province *</label>
              <div className={style.inputGroup}>
                <select
                  id="shippingProvince"
                  name="shippingProvince"
                  value={shippingAddress.shippingProvince}
                  onChange={onShippingAddressChange}
                  className={style.selectGroup}
                  required
                >
                  <option value="">Select a province</option>
                  {province?.map((prov, index) => (
                    <option key={index} value={prov.provinceId}>
                      {prov.englishName}
                    </option>
                  ))}
                </select>
              </div>
              {validationErr.shippingProvince && (
                <span className={style.error}>{validationErr.shippingProvince}</span>
              )}
            </div>

            <div className={style.inputSection}>
              <label htmlFor="shippingDistrict">District *</label>
              <div className={style.inputGroup}>
                <select
                  id="shippingDistrict"
                  name="shippingDistrict"
                  value={shippingAddress.shippingDistrict}
                  onChange={onShippingAddressChange}
                  className={style.selectGroup}
                  disabled={selectedAddress.provinceId === null}
                  required
                >
                  <option value="">Select a district</option>
                  {district?.map((dist, index) => (
                    <option key={index} value={dist.districtId}>
                      {dist.englishName}
                    </option>
                  ))}
                </select>
              </div>
              {validationErr.shippingDistrict && (
                <span className={style.error}>{validationErr.shippingDistrict}</span>
              )}
            </div>

            <div className={style.inputSection}>
              <label htmlFor="shippingMunicipality">Municipality *</label>
              <div className={style.inputGroup}>
                <select
                  id="shippingMunicipality"
                  name="shippingMunicipality"
                  value={shippingAddress.shippingMunicipality}
                  onChange={onShippingAddressChange}
                  className={style.selectGroup}
                  disabled={selectedAddress.districtId === null}
                  required
                >
                  <option value="">Select a municipality</option>
                  {municipality?.map((muni, index) => (
                    <option key={index} value={muni.municipalityId}>
                      {muni.englishName}
                    </option>
                  ))}
                </select>
              </div>
              {validationErr.shippingMunicipality && (
                <span className={style.error}>{validationErr.shippingMunicipality}</span>
              )}
            </div>

            <div className={style.inputSection}>
              <label htmlFor="shippingWardNumber">Ward Number *</label>
              <div className={style.inputGroup}>
                <select
                  id="shippingWardNumber"
                  name="shippingWardNumber"
                  value={shippingAddress.shippingWardNumber}
                  onChange={onShippingAddressChange}
                  className={style.selectGroup}
                  disabled={isMunicipalitySelected}
                  required
                >
                  <option value="">Select ward number</option>
                  {wards?.map((ward, index) => (
                    <option key={index} value={ward}>
                      {ward}
                    </option>
                  ))}
                </select>
              </div>
              {validationErr.shippingWardNumber && (
                <span className={style.error}>{validationErr.shippingWardNumber}</span>
              )}
            </div>

            <div className={style.inputSection}>
              <label htmlFor="addressType">Address Type *</label>
              <div className={style.inputGroup}>
                <select
                  id="addressType"
                  name="addressType"
                  value={shippingAddress.addressType}
                  onChange={onShippingAddressChange}
                  className={style.selectGroup}
                  required
                >
                  <option value="HOUSE">House</option>
                  <option value="APARTMENT">Apartment</option>
                  <option value="OFFICE">Office</option>
                </select>
              </div>
              {validationErr.addressType && (
                <span className={style.error}>{validationErr.addressType}</span>
              )}
            </div>
          </div>

          <div className={style.actionGroup}>
            <button
              onClick={handleCancelClick}
              className={style.cancelButton}
              type="button"
            >
              Cancel
            </button>
            <button
              className={style.submitButton}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}