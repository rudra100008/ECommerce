import CartItemTable from "../Component/CartItemTable";
import Navbar from "../Component/Navbar";
import { RouteGuard } from "../Component/RouteGuard";
import style from "../CSS/mainContent.module.css";
import OrderSummary from './../Component/OrderSummary';
export default function CartItems() {
  return (
    <RouteGuard requiredRole="ROLE_CUSTOMER">
      <div className={style.pageWrapper}>
        <Navbar />
        <div className={style.pageContainer}>
          <div className={style.firstSection}>
            <CartItemTable />
            <OrderSummary />
          </div>
        </div>
      </div>
    </RouteGuard>
  );
}
