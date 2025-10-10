import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../CSS/adminNavbar/sideNavbar.module.css'
import { faCube, faDashboard } from '@fortawesome/free-solid-svg-icons'
import { faBarChart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
export default function AdminSideNavbar({isSideBarOpen,setItemClicked}){
    return(
         <div className={`${style.container} ${isSideBarOpen ? style.closed : ''}`}>
            <nav className={style.navbar}>
               
                <ul className={style.navlist}>
                    <li onClick={()=> setItemClicked('dashboard')} className={style.navlistitem}>
                        <div className={style.navItemContainer}>
                            <FontAwesomeIcon className={style.faIcon} icon={faDashboard} size='xl' />
                            <span>Dashboard</span>
                        </div>
                    </li>
                     <li  onClick={()=> setItemClicked('profile')}className={style.navlistitem}>
                        <div className={style.navItemContainer}>
                            <FontAwesomeIcon className={style.faIcon}  icon={faUser} size='xl' />
                            <span>Profile</span>
                        </div>
                    </li>
                     <li onClick={()=> setItemClicked('product')} className={style.navlistitem}>
                        <div className={style.navItemContainer} >
                            <FontAwesomeIcon className={style.faIcon}  icon={faCube} size='xl'/>
                            <span>Product</span>
                        </div>
                    </li>
                    <li onClick={()=> setItemClicked('dashboard')} className={style.navlistitem}>
                        <div className={style.navItemContainer} >
                            <FontAwesomeIcon className={style.faIcon}  icon={faBarChart} size='xl'/>
                            <span>Sales</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}