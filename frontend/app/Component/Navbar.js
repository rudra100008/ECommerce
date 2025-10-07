import { logout } from "../services/LoginServices";
import style from '../CSS/navbar.module.css';
import { useRouter } from "next/navigation";
export default function Navbar(){
    const router = useRouter();
    return(
        <div className={style.NavbarContainer}>
            <div className={style.title}>
                <p>E-CommerceApp</p>
            </div>
            <div className={style.searchBar}>
                <input type="input" />
            </div>
            <div className={style.navbarComponent}>
                Home
            </div>
            <div className={style.navbarComponent}>

            </div>
            
            <div className={style.logoutGroup}>
                <button type="button" className={style.logoutButton} onClick={()=>logout({router})}>Logout</button>
            </div>
        </div>
    )
}