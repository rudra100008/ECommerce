
import { useRouter } from 'next/navigation'
import style from '../CSS/adminNavbar/product.module.css'
import ProductTable from './AddProductForm/ProductTable';
export default function Product() {
    const router = useRouter();
    return (
        <div className={style.container}>
            <div className={style.productTable}>
                <ProductTable />
            </div>
        </div>
    )
}