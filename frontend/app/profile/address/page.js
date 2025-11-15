"use client"
import { useEffect, useState } from 'react';
import style from '../../CSS/userSide/profile.module.css';
import { useNavigation } from '../../Context/NavigationContext';
import { addAddress } from '../../services/clientServices/AddressService';
import { useNotification } from '../../Context/NotificationContext';
import { useRouter } from 'next/navigation';
export default function AddressForm() {
    const router = useRouter();
   const { loadCurrentUser, userData, setUserData, userLoading } = useNavigation();
    const { success } = useNotification();
    const [address, setAddress] = useState({
        district: '',
        province: '',
        municipality: '',
        wardNumber: '',
        landMark: '',
        userId: userData.userId
    });

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({
            ...prev,
            [name]: name === 'wardNumber' ? (value ? parseInt(value, 10) : '') : value
        }))
    }

    const submitAddress = async () => {
        try {
            const addressDTO = {
                district: address.district.trim(),
                province: address.province.trim(),
                municipality: address.municipality.trim(),
                wardNumber: parseInt(address.wardNumber, 10),
                landmark: address.landMark.trim(),
                userId: userData.userId
            }
            const response = await addAddress(addressDTO);
            console.log("Response of sendAddress", response);
            success("Address added success.")
            setAddress({
                district: '',
                province: '',
                municipality: '',
                wardNumber: '',
                landMark: '',
                userId: userData.userId
            });

            setTimeout(() => {
                router.push("/profile")

            }, 2000)
        } catch (err) {
            console.log("error in handleAddAddress", err.response.data);
        }
    }
     useEffect(() => {
            loadCurrentUser();
        }, [])
    return (
        <div className={style.addressFormContainer}>
            <div className={style.title}>
                <h3>Address Form</h3>
            </div>
            <div className={style.addressFormGroup}>
                <div className={style.formGroup}>
                    <label htmlFor="district">District</label>
                    <input
                        type="text"
                        name="district"
                        id="district"
                        value={address.district}
                        onChange={handleAddressChange}
                        placeholder="Enter district"
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="province">Province</label>
                    <input
                        type="text"
                        name="province"
                        id="province"
                        value={address.province}
                        onChange={handleAddressChange}
                        placeholder="Enter a province"
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="municipality">Municipality</label>
                    <input
                        type="text"
                        name="municipality"
                        id="municipality"
                        value={address.municipality}
                        onChange={handleAddressChange}
                        placeholder="Enter municipality name"
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="wardNumber">Ward Number</label>
                    <input
                        type="number"
                        name="wardNumber"
                        id="wardNumber"
                        value={address.wardNumber}
                        onChange={handleAddressChange}
                        placeholder="Enter ward number"
                        min="1"
                        max="35" // Typical ward number range in Nepal
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="landMark">LandMark</label>
                    <input
                        type="text"
                        name="landMark"
                        id="landMark"
                        value={address.landMark}
                        onChange={handleAddressChange}
                        placeholder="Enter a landMark"
                    />
                </div>
                <button onClick={submitAddress} className={style.submitButton}>
                    Add Address
                </button>
            </div>
        </div>
    )
}