'use client'
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '../Context/NavigationContext'
import style from '../CSS/userSide/profile.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faArrowLeft, faDumpster, faGear, faPlus, faTrash, } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { fetchAllAddressesOfUser, removeAddressById, updateAddress } from '../services/clientServices/AddressService';
import { useRouter } from 'next/navigation';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { revertToGooglePic, updateUserImageAndFullName } from '../services/UserServices';
import { useNotification } from '../Context/NotificationContext';
import { logout } from '../services/LoginServices';
export default function Profile() {
    const { loadCurrentUser, userData, setUserData, userLoading } = useNavigation();
    const router = useRouter();
    const { success, error, clear } = useNotification();
    const [isEditImageButton, setIsEditImageButton] = useState(false);
    const fileInputRef = useRef();
    const [fullName, setFullName] = useState('');
    const [newUserImage, setNewUserImage] = useState(null);
    const [updateUserImage, setUpdateUserImage] = useState(null);
    const [isAddressEdit, setIsAddressEdit] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState(null);
    const [addressData, setAddressData] = useState({
        addressId: null,
        district: '',
        province: '',
        municipality: '',
        wardNumber: '',
        landmark: '',
        userId: userData.userId
    });


    const onAddressChange = (event) => {
        const { name, value } = event.target
        setAddressData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleBackClick = () => {
        router.push("/");
    }

    const handleIconClick = () => {
        fileInputRef.current.click();
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        if (file) {
            console.log("File: ", file);
            setNewUserImage(URL.createObjectURL(file));
            setUpdateUserImage(file);
            event.target.value = "";
        }
    }
    const handleImageEditButton = () => {
        setIsEditImageButton(prev => !prev);

    }
    const handleSaveChanges = async (event) => {
        event.preventDefault();
        try {
            const formDataToSend = new FormData();

            formDataToSend.append("fullName", fullName);
            formDataToSend.append("userImage", updateUserImage);

            await updateUserImageAndFullName(userData.userId, formDataToSend, error);


            await loadCurrentUser();

            setIsEditImageButton(false);
            setNewUserImage(null);
            setUpdateUserImage(null);
            setFullName('');

            setIsEditImageButton(false);
        } catch (errr) {
            console.log("error in Profile page: ", e.response.data);
        }


    }
    const handleCancelEdit = () => {
        setIsEditImageButton(false);
        setNewUserImage(null);
        setFullName('');
    }
    const handleEditButton = () => {

    }
    const fetchAllAddresses = async () => {
        try {
            const addresses = await fetchAllAddressesOfUser(parseInt(userData.userId, 10))
            setUserData(prev => ({
                ...prev,
                addresses: addresses
            }))
        } catch (err) {
            console.log("error in fetchAllAddresses: ", err.response.data);
        }
    }

    const handleAddressDelete = async (address) => {
        try {
            await removeAddressById(userData.userId, address.addressId);
            setUserData(prev => ({
                ...prev,
                addresses: prev.addresses.filter(prevAddress => prevAddress.addressId !== address.addressId)
            }))
        } catch (err) {
            console.log("Error in delete Address: ", err.response.data);
        }
    }

    const handleAddressEdit = async (addressId) => {
        setIsAddressEdit(prev => !prev);
        setEditingAddressId(prev => prev === addressId ? null : addressId);
    }

    const saveAddress = async (addressId) => {
        try {
            const address = {
                addressId: addressId,
                district: addressData.district.trim(),
                province: addressData.province.trim(),
                municipality: addressData.municipality.trim(),
                wardNumber: parseInt(addressData.wardNumber, 10),
                landmark: addressData.landmark.trim(),
                userId: userData.userId
            }

            await updateAddress(address);

            await fetchAllAddresses();
            setEditingAddressId(prev => prev === addressId ? null : addressId);
        } catch (err) {
            console.log("Error in saveAddress: ", err.response?.data)
        }
    }

    const cancelAddress = (addressId) => {
        setEditingAddressId(prev => prev === addressId ? null : addressId);
    }
    useEffect(() => {
        const initializeProfile = async () => {
            await loadCurrentUser();
        }

        initializeProfile();
    }, [])

    useEffect(() => {
        if (userData.userId) {
            fetchAllAddresses();
        }
    }, [userData.userId])

    const isBackendImage = (url) => {
        return url && (url.includes("/api/user") || url.startsWith("/"));
    }


    const getImageUrl = (url) => {
        if (!url) return null;


        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url;
        }


        if (url.startsWith("/api/")) {
            return `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'}${url}`;
        }

        return url;
    }

    const handleRevertToGooglePic = async () => {
        try {
            await revertToGooglePic(userData.userId, success, error)

            await loadCurrentUser();
        } catch (err) {
            console.log("Error in Profile: ", err.response.body)
        }
    }

    // console.log("UserData address", userData.addresses);
    return (
        <div className={style.profileContainer}>
            <div onClick={handleBackClick} className={style.backButton}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Back To Home
            </div>
            <div className={style.title}>
                <h3>
                    My Profile
                </h3>
            </div>
            <div className={style.userImageContainer}>
                {userData.profileImageUrl && (
                    <div className={style.userImageDiv}>
                        {
                            newUserImage ? (
                                <Image
                                    src={newUserImage}
                                    alt={userData.username}
                                    width={80}
                                    height={80}
                                    className={style.userImage}
                                />
                            ) : (
                                isBackendImage(userData.profileImageUrl) ? (
                                    <img
                                        src={getImageUrl(userData.profileImageUrl)}
                                        alt={userData.username || "user"}
                                        width={80}
                                        height={80}
                                        className={style.userImage}
                                    />
                                ) : (
                                    <Image
                                        src={userData.profileImageUrl}
                                        alt={userData.username}
                                        width={80}
                                        height={80}
                                        className={style.userImage}
                                    />
                                )

                            )
                        }

                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                        <FontAwesomeIcon
                            onClick={handleIconClick}
                            className={`${style.uploadIcon} ${isEditImageButton ? style.show : ''}`}
                            icon={faUpload}
                        />
                    </div>
                )}

                <div className={style.fullName}>
                    {!isEditImageButton && (
                        <p className={isEditImageButton ? style.fadeOut : ''}>
                            {userData.fullName || 'No full name'}
                        </p>
                    )}
                    <input
                        type='text'
                        name='fullName'
                        id='fullName'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`${style.fullNameInput} ${isEditImageButton ? style.show : ''}`}
                        placeholder={fullName || 'Enter full name'}
                    />
                </div>

                {!isEditImageButton ? (
                    <div onClick={handleImageEditButton} className={style.editButton}>
                        <p>Edit</p>
                        <FontAwesomeIcon className={style.editIcon} icon={faPen} />
                    </div>
                ) : (
                    <div className={`${style.actionButtons} ${isEditImageButton ? style.show : ''}`}>
                        <button onClick={handleSaveChanges} className={style.saveButton}>
                            <FontAwesomeIcon icon={faCheck} />
                            Save
                        </button>
                        <button onClick={handleCancelEdit} className={style.cancelButton}>
                            <FontAwesomeIcon icon={faTimes} />
                            Cancel
                        </button>
                    </div>
                )}
            </div>
            <div className={style.userProfileContainer}>
                <div className={style.profileTitle}>
                    <p>My Personal Information</p>
                    <div onClick={handleEditButton} className={style.editButton}>
                        <p>Edit</p>
                        <FontAwesomeIcon className={style.editIcon} icon={faPen} />
                    </div>
                </div>
                <div className={style.personalInfoGroup}>
                    <div className={style.userName}>
                        {
                            userData.username && (
                                <div>
                                    <p>Username:</p>
                                    <span>{userData.username}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className={style.email}>
                        {
                            userData.email && (
                                <div>
                                    <p>Email:</p>
                                    <span>{userData.email}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className={style.phoneNumber}>
                        {
                            userData.phoneNumber ? (
                                <div>
                                    <p>Phone Number:</p>
                                    <span>{userData.phoneNumber}</span>
                                </div>
                            ) : (
                                <div>
                                    <p>Phone Number:</p>
                                    <span>N/A</span>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
            <div className={style.addressInfoContainer}>
                <div className={style.addressInfoTitle}>
                    <p>My Address Information</p>
                    <Link href={"/profile/address"} className={style.addAddressButton}>
                        <p>Add Address</p>
                        <FontAwesomeIcon className={style.plusIcon} icon={faPlus} />
                    </Link>
                </div>
                {
                    userData.addresses &&
                    userData.addresses.map((address, index) => (
                        <div key={index} className={style.addressInfoGroup}>
                            <div className={style.addressTitle}>
                                <p>Address {index + 1}</p>
                                {
                                    address.addressId !== editingAddressId ? (
                                        <>
                                            <button onClick={() => handleAddressEdit(address.addressId)} className={style.editButton}>
                                                <p>Edit</p>
                                                <FontAwesomeIcon className={style.editIcon} icon={faPen} />
                                            </button>
                                            <button onClick={() => handleAddressDelete(address)} className={style.deleteButton}>
                                                Delete
                                                <FontAwesomeIcon className={style.deleteIcon} icon={faTrash} />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className={style.saveAddressButton} onClick={() => saveAddress(address.addressId)}>
                                                Save
                                            </button>
                                            <button className={style.cancelAddressButton} onClick={() => cancelAddress(address.addressId)}>
                                                Cancel
                                            </button>
                                        </>
                                    )
                                }

                            </div>
                            <div className={style.addressInfo}>
                                <div className={style.district}>
                                    {
                                        address && (
                                            <div>
                                                <p>District</p>
                                                {
                                                    address.addressId !== editingAddressId && (
                                                        <span className={`${address.addressId === editingAddressId ? style.fadeOut : ''}`}>
                                                            {address.district || "N/A"}
                                                        </span>
                                                    )
                                                }
                                                <input
                                                    type='text'
                                                    name='district'
                                                    id='district'
                                                    value={addressData.district}
                                                    onChange={onAddressChange}
                                                    placeholder={address.district}
                                                    className={` ${style.addressInput} ${address.addressId === editingAddressId ? style.show : ''}`}
                                                />
                                            </div>
                                        )
                                    }

                                </div>
                                <div className={style.province}>
                                    {
                                        address && (
                                            <div>
                                                <p>Province</p>
                                                {
                                                    address.addressId !== editingAddressId && (
                                                        <span className={`${address.addressId === editingAddressId ? style.fadeOut : ''}`}>
                                                            {address.province || "N/A"}
                                                        </span>
                                                    )
                                                }
                                                <input
                                                    type='text'
                                                    name='province'
                                                    id='province'
                                                    value={addressData.province}
                                                    onChange={onAddressChange}
                                                    placeholder={address.province}
                                                    className={` ${style.addressInput} ${address.addressId === editingAddressId ? style.show : ''}`}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={style.municipality}>
                                    {
                                        address.municipality && (
                                            <div>
                                                <p>Municipality</p>
                                                {
                                                    address.addressId !== editingAddressId && (
                                                        <span className={`${address.addressId === editingAddressId ? style.fadeOut : ''}`}>
                                                            {address.municipality || "N/A"}
                                                        </span>
                                                    )
                                                }
                                                <input
                                                    type='text'
                                                    name='municipality'
                                                    id='municipality'
                                                    value={addressData.municipality}
                                                    onChange={onAddressChange}
                                                    placeholder={address.municipality}
                                                    className={` ${style.addressInput} ${address.addressId === editingAddressId ? style.show : ''}`}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={style.wardNumber}>
                                    {
                                        address.wardNumber && (
                                            <div>
                                                <p>Ward Number</p>
                                                {
                                                    address.addressId !== editingAddressId && (
                                                        <span className={`${address.addressId === editingAddressId ? style.fadeOut : ''}`}>
                                                            {address.wardNumber || "N/A"}
                                                        </span>
                                                    )
                                                }
                                                <input
                                                    type='number'
                                                    name='wardNumber'
                                                    id='wardNumber'
                                                    value={addressData.wardNumber}
                                                    onChange={onAddressChange}
                                                    placeholder={address.wardNumber}
                                                    className={` ${style.addressInput} ${address.addressId === editingAddressId ? style.show : ''}`}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={style.landMark}>
                                    {
                                        address.landmark && (
                                            <div>
                                                <p>Land Mark</p>
                                                {
                                                    address.addressId !== editingAddressId && (
                                                        <span className={`${address.addressId === editingAddressId ? style.fadeOut : ''}`}>
                                                            {address.landmark || "N/A"}
                                                        </span>
                                                    )
                                                }
                                                <input
                                                    type='text'
                                                    name='landmark'
                                                    id='landmark'
                                                    value={addressData.landmark}
                                                    onChange={onAddressChange}
                                                    placeholder={address.landmark}
                                                    className={` ${style.addressInput} ${address.addressId === editingAddressId ? style.show : ''}`}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>

            <div className={style.settingSection}>
                <div className={style.title}>
                    <FontAwesomeIcon className={style.settingIcon} icon={faGear} />
                    <p>Setting</p>
                </div>
                <div className={style.settingContainer}>
                    {
                        userData.hasCustomImage && (
                            <div className={style.revertPicButtonSection}>
                                <button className={style.revertPicButton} onClick={handleRevertToGooglePic} type='button'>
                                    Revert to googlePic
                                </button>
                            </div>
                        )
                    }

                    <div className={style.removeImageButtonSection}>
                        <button className={style.removeImageButton}>
                            Delete Profile Pic
                        </button>
                    </div>


                    <div className={style.logoutButtonSection} >
                        <button type='button' className={style.logoutButton} onClick={() => logout(router, success)}>
                            Logout
                        </button>
                    </div>



                </div>
            </div>
        </div>
    )
}