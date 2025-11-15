'use client'
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '../Context/NavigationContext'
import style from '../CSS/userSide/profile.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faArrowLeft, faPlus, } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { fetchAllAddressesOfUser } from '../services/clientServices/AddressService';
import { useRouter } from 'next/navigation';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
export default function Profile() {
    const { loadCurrentUser, userData, setUserData, userLoading } = useNavigation();
    const router = useRouter();
    const [isEditImageButton, setIsEditImageButton] = useState(false);
    const fileInputRef = useRef();
    const [fullName,setFullName] = useState('');
    const [address, setAddress] = useState({
        addressId: null,
        district: '',
        province: '',
        municipality: '',
        wardNumber: null,
        landMark: '',
        userId: userData.userId
    });

    const handleBackClick = () => {
        router.push("/");
    }

    const handleIconClick = () => {
        fileInputRef.current.click();
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File: ", file);
        }
    }
    const handleImageEditButton = () => {
        setIsEditImageButton(prev => !prev);
    }
    const handleSaveChanges = () =>{

    }
    const handleCancelEdit = ()=>{

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
    useEffect(() => {
        loadCurrentUser();
    }, [])

    useEffect(() => {
        if (userData.userId) {
            fetchAllAddresses();
        }
    }, [userData.userId])
    console.log("User: ", userData);
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
                        <Image
                            src={userData.profileImageUrl}
                            alt={userData.username}
                            width={80}
                            height={80}
                            className={style.userImage}
                        />
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
                        placeholder='Enter full name'
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
                                <div onClick={handleEditButton} className={style.editButton}>
                                    <p>Edit</p>
                                    <FontAwesomeIcon className={style.editIcon} icon={faPen} />
                                </div>
                            </div>
                            <div className={style.addressInfo}>
                                <div className={style.district}>
                                    {
                                        address && (
                                            <div>
                                                <p>District</p>
                                                <span>{address.district}</span>
                                            </div>
                                        )
                                    }

                                </div>
                                <div className={style.province}>
                                    {
                                        address && (
                                            <div>
                                                <p>Province</p>
                                                <span>{address.province}</span>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={style.municipality}>
                                    {
                                        address.municipality && (
                                            <div>
                                                <p>Municipality</p>
                                                <span>{address.municipality}</span>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={style.wardNumber}>
                                    {
                                        address.wardNumber && (
                                            <div>
                                                <p>Ward number</p>
                                                <span>{address.wardNumber}</span>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className={style.landMark}>
                                    {
                                        address.landmark && (
                                            <div>
                                                <p>LandMark</p>
                                                <span>{address.landmark}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}