"use client"
import style from '../CSS/userSide/navbar.module.css';
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faCartShopping, } from "@fortawesome/free-solid-svg-icons";
import { faClipboard, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigation } from "../Context/NavigationContext";
import Link from "next/link";
import { logout } from '../services/LoginServices';
import { useEffect, useRef, useState } from "react";
import { useNotification } from '../Context/NotificationContext';
import Image from 'next/image';

export default function Navbar() {
    const { success,error } = useNotification();
    const userBoxRef = useRef();
    const userImageRef = useRef();
    const [showUserBox, setShowUserBox] = useState(false);
    const { userData, loadCurrentUser, userLoading } = useNavigation();
    const pathName = usePathname();
    const router = useRouter();
    const getActiveItem = () => {
        if (pathName === "/") return "home";
        if (pathName === "/shop") return "shop";
        if (pathName === "/cart") return "cart";
        if (pathName === "/contact") return "contact";
    }
    const handleUserBox = () => {
        setShowUserBox(prev => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(userImageRef.current && userImageRef.current.contains(event.target)){
                return;
            }
            if (userBoxRef.current && !userBoxRef.current.contains(event.target) ) {
                setShowUserBox(false);
            }
        }
        if (showUserBox) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        }

    }, [showUserBox])

    useEffect(() => {
        loadCurrentUser();
    }, [])

    const activeNavItem = getActiveItem();
    return (
        <div className={style.container}>
            <div className={style.NavbarContainer}>
                <div className={style.title}>
                    <p>ShopEase</p>
                </div>
                <div className={style.searchGroup}>
                    <FontAwesomeIcon className={style.searchIcon} icon={faMagnifyingGlass} />
                    <input
                        name="productSearch"
                        placeholder="Looking for something?"
                        type="input"
                        className={style.searchInput}
                    />
                </div>
                <div className={style.navbarItems}>
                    <div className={style.navbarItem}>
                        <FontAwesomeIcon
                            className={style.favoriteIcon}
                            icon={faHeart}
                        />
                    </div>
                    <div className={style.navbarItem}>
                        <FontAwesomeIcon
                            className={style.orderIcon}
                            icon={faClipboard}
                        />
                    </div>
                    <div className={style.navbarItem}>
                        <FontAwesomeIcon
                        onClick={()=> router.push("/cart")}
                            className={style.cartIcon}
                            icon={faCartShopping} />
                        {
                            <span className={style.cartMoney}>Rs 0.00 </span>
                        }
                    </div>

                    <div className={style.userImageSection}>
                        <div ref = {userImageRef} onClick={handleUserBox}>
                            {
                                userData.profileImageUrl ?
                                    (<Image
                                        src={userData.profileImageUrl}
                                        alt={userData.username || "user"}
                                        width={45}
                                        height={45}
                                        className={style.userImage}
                                    />) : (
                                        <div>
                                            <p>No image</p>
                                        </div>
                                    )
                            }
                        </div>
                        {showUserBox && (
                            <div ref={userBoxRef} className={style.userBox}>
                                <p><Link href={'/profile'}>View Profile</Link></p>
                                <p onClick={() => logout({ router, success })}>Logout</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className={style.subNavbar}>
                <div className={style.subnavItems}>
                    <Link
                        href="/"
                        className={`${style.subnavItem} ${activeNavItem === 'home' ? style.active : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/shop"
                        className={`${style.subnavItem} ${activeNavItem === 'shop' ? style.active : ''}`}
                    >
                        Shop
                    </Link>
                    <Link
                        href="/cart"
                        className={`${style.subnavItem} ${activeNavItem === 'cart' ? style.active : ''}`}
                    >
                        Cart
                    </Link>
                    <Link
                        href="/contact"
                        className={`${style.subnavItem} ${activeNavItem === 'contact' ? style.active : ''}`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}