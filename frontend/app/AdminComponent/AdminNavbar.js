import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../CSS/adminNavbar/navbar.module.css'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export default function AdminNavbar({showSideBar}) {
    return (
        <div className={style.container}>
            <nav className={style.navbar}>
                <div className={style.staggeredBar}  onClick={showSideBar}>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </div>
                <div className={style.navlist}>
                    <div className={style.title}>
                        <h3>
                            ECommerce
                        </h3>
                    </div>
                    <div className={style.navlistItem}>
                        <div className={style.search}>
                            <input type='text' placeholder='Search here' />
                        </div>
                    </div>
                    <div className={style.navlistItem}>
                        <a href='#'>
                            <span>notification</span>
                        </a>
                    </div>
                    <div className={style.navlistItem}>
                        <a href='#'>
                            <span>Profile</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}