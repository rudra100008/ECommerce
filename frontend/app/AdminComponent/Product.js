
import { useRouter } from 'next/navigation'
import style from '../CSS/adminNavbar/product.module.css'
import ProductTable from './AddProductForm/ProductTable';
export default function Product() {
    const router = useRouter();
    return (
        <div className={style.container}>
            {/* <div className={style.ButtonGroup}>
                <button onClick={() => router.push("/admin/addProduct")} className={style.productButton}>
                    Add Product to Inventory
                </button>
            </div> */}
            <div className={style.productTable}>
                <ProductTable />
            </div>
        </div>
    )
}