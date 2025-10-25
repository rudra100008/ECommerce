import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../CSS/adminNavbar/sideNavbar.module.css'
import { faAngleDown, faAngleUp, faArrowUp, faCube, faDashboard, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'


export default function AdminSideNavbar({ isSideBarOpen, setIsSideBarOpen, setItemClicked, itemClicked }) {
    const [angleDown, setAngleDown] = useState(false);
    const handleProductClick = () => {
        setIsSideBarOpen(true)
        setAngleDown(prev => !prev);
    }
    return (
        <div className={`${style.container} ${!isSideBarOpen ? style.closed : ''}`}>
            <div className={style.title}>
                <h3>
                    ECommerce
                </h3>
            </div>
            <nav className={style.navbar}>

                <ul className={style.navlist}>
                    <li
                        onClick={() => setItemClicked('dashboard')}
                        className={`${style.navlistitem}  ${itemClicked === 'dashboard' ? style.active : ''}`}>
                        <div className={style.navItemContainer}>
                            <FontAwesomeIcon className={style.faIcon} icon={faDashboard} size='xl' />
                            <span>Dashboard</span>
                        </div>
                    </li>
                    <li
                        onClick={() => setItemClicked('profile')}
                        className={`${style.navlistitem}  ${itemClicked === 'profile' ? style.active : ''}`}>
                        <div className={style.navItemContainer}>
                            <FontAwesomeIcon className={style.faIcon} icon={faUserCircle} size='xl' />
                            <span>Profile</span>
                        </div>
                    </li>
                    <li
                        onClick={handleProductClick}
                        className={`${style.navlistitem}  ${angleDown ? style.activeSubItem : ''}`}
                    >
                        <div className={style.navItemContainer} >
                            <FontAwesomeIcon className={style.faIcon} icon={faCube} size='xl' />
                            <span>Product</span>
                            {

                                isSideBarOpen && (
                                    angleDown ?
                                        <FontAwesomeIcon className={style.cartIcon} icon={faAngleUp} /> :
                                        <FontAwesomeIcon className={style.cartIcon} icon={faAngleDown} />
                                )}
                        </div>
                    </li>
                    {angleDown && (
                        <div className={`${style.subItems}`}>
                            <p
                                className={`${itemClicked === 'product' ? style.active : ''}`}
                                onClick={() => setItemClicked('product')}>Products</p>
                            <a href='/admin/addProduct'><span>Add product</span></a>
                        </div>
                    )
                    }
                    <li
                        onClick={() => setItemClicked('sale')}
                        className={`${style.navlistitem}  ${itemClicked === 'sale' ? style.active : ''}`}>
                        <div className={style.navItemContainer} >
                            <FontAwesomeIcon className={style.faIcon} icon={faBarChart} size='xl' />
                            <span>Sales</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}