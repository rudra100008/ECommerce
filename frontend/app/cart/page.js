import CartItemTable from "../Component/CartItemTable";
import Navbar from "../Component/Navbar";
import style from '../CSS/mainContent.module.css'
export default function CartItems(){
    
    return(
        <div className={style.pageWrapper}>
            <Navbar/>
            <div className={style.pageContainer}>
                <CartItemTable />
            </div>
        </div>
    )
}