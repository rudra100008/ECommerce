'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../CSS/adminNavbar/navbar.module.css'
import { faBarsStaggered, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {useNavigation} from '../Context/NavigationContext';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNotification } from '../Context/NotificationContext';

export default function AdminNavbar({showSideBar,isSideBarOpen}) {
    const router = useRouter();
    const {adminData, loadCurrentAdmin,loadCurrentUser,logout} = useNavigation();
    const {success} = useNotification();
    const profileClickRef = useRef();
    const [showProfileMenu,setShowProfileMenu] = useState(false);
    
    const getUrl = (url) =>{
        if(!url) return null;
        if(url.startsWith("/api/")){
            return `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080"}${url}`;
        }
        return url;
    }
    
    const handleProfileClick = () =>{
        setShowProfileMenu(prev => !prev);
    }
    
    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(profileClickRef.current && !profileClickRef.current.contains(event.target)){
                setShowProfileMenu(false)
            }
        }

        if(showProfileMenu){
            document.addEventListener('mousedown',handleClickOutside);
        }
        
        return ()=>{
            document.removeEventListener('mousedown',handleClickOutside)
        }
    },[showProfileMenu])
    
    useEffect(()=>{
        loadCurrentUser();
    },[])
    
    return (
        <div className={`${style.container} ${!isSideBarOpen ? style.sidebarClosed : ''}`}>
            <nav className={style.navbar}>
                <button className={style.staggeredBar}  onClick={showSideBar} aria-label='Toggle sidebar'>
                    <FontAwesomeIcon icon={faBarsStaggered} size='lg' />
                </button>
                <div className={style.navlist}>
                    <div className={style.navlistItem}>
                        <div className={style.search}>
                            <FontAwesomeIcon className={style.searchIcon} icon={faMagnifyingGlass}/>
                            <input 
                            className={style.searchInput}
                            type='text' 
                            placeholder='Search here' />
                        </div>
                    </div>
                </div>
                <div className={style.groupItems}>
                    <div className={style.navlistItem}>
                        <button className={style.iconButton} aria-label="Notifications">
                            <FontAwesomeIcon 
                                className={style.icons} 
                                icon={faBell} 
                            />
                            <span className={style.notificationBadge}></span>
                        </button>
                    </div>
                    <div className={style.navlistItem}>
                        <div ref={profileClickRef} style={{position: 'relative'}}>
                            <div onClick={handleProfileClick} className={style.adminProfileContainer}>
                                {
                                    adminData?.profileImageUrl ? (
                                        <div className={style.adminProfileSection}>
                                            <img
                                            src={getUrl(adminData.profileImageUrl)}
                                            alt={adminData.username || "No Image"}
                                            width={45}
                                            height={45}
                                            className={style.adminProfile}
                                            />
                                        </div>
                                    ):(
                                        <div className={style.noProfile}>
                                           <p>{adminData?.username?.charAt(0)?.toUpperCase() || "A"}</p>
                                        </div>
                                    )
                                }
                            </div>
                            {
                                showProfileMenu && (
                                    <div className={style.profileMenu}>
                                        <div className={style.menuItem}>
                                            <Link href="/admin/profile">View Profile</Link>
                                        </div>
                                        <div className={style.menuItem}>
                                            <Link href="/admin/setting">Setting</Link>
                                        </div>
                                        <div className={style.menuItem}>
                                         <p onClick={() => logout(router, success)}>Logout</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}