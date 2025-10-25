import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../CSS/adminNavbar/navbar.module.css'
import { faBarsStaggered, faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function AdminNavbar({showSideBar}) {
    return (
        <div className={style.container}>
            <nav className={style.navbar}>
                <div className={style.staggeredBar}  onClick={showSideBar}>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </div>
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
                            <a href='#'>
                                <span className={style.icons}>
                                    <FontAwesomeIcon icon={faBell} />
                                </span>
                            </a>
                        </div>
                        <div className={style.navlistItem}>
                            <a href='#'>
                                <span className={style.userProfile} >
                                    User
                                </span>
                            </a>
                        </div>
                    </div>
            </nav>
        </div>
    )
}