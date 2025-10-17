import { useEffect, useState } from 'react';
import style from '../../CSS/adminNavbar/AddProductForm/productForm.module.css';
import { fetchProductsWithCategoryId } from '../../services/ProductServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function ProductTable() {
    const [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageInfo, setPageInfo] = useState({
        lastPage: false,
        pageNumber: 0,
        pageSize: 7,
        totalElement: 0,
        totalPage: 0
    })
    const [productsDetail, setProductsDetail] = useState([]);


    const fetchProducts = async (pageNumber, pageSize) => {
        try {
            const response = await fetchProductsWithCategoryId(pageNumber, pageSize);
            console.log("response in ProductTable", response.data);
            const { product } = response.data;
            console.log("Product", product)
            setProductsDetail(product.data);
            setPageInfo({
                lastPage: product.lastPage,
                pageNumber: product.pageNumber,
                pageSize: product.pageSize,
                totalElement: product.totalElement,
                totalPage: product.totalPage
            });
            setCurrentPage(product.pageNumber)
            if (product.totalPage > 0) {
                let numbers = [];
                for (let i = 1; i <= product.totalPage; i++) {
                    numbers.push(i);
                }
                setPageNumbers(numbers);
            }
        } catch (error) {
            console.log("Error in productTable: ", error.response?.data)
        }

    }
    useEffect(() => {
        fetchProducts(0, 5);
    }, [])

    const handlePreviousPage = () => {
        if (currentPage <= 0) return;
        const prevPage = pageInfo.pageNumber - 1;
        fetchProducts(prevPage, 5);
        setCurrentPage(prevPage);

    }
    const handleNextPage = () => {
        if (pageInfo.lastPage) return
        const nextPage = pageInfo.pageNumber + 1;
        fetchProducts(nextPage, 5);
        setCurrentPage(nextPage);
    }
    const handlePageChange = (displayPageNumber) => {
        const serverPageNumber = displayPageNumber - 1;
        if (serverPageNumber >= 0 && serverPageNumber < pageInfo.totalPage) {
            fetchProducts(serverPageNumber, 5);
            setCurrentPage(serverPageNumber)
        }
    }

    const displayCurrentPage = currentPage + 1;
    return (
        <div className={style.productTable}>
            <table>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Category</th>
                        <th>Stock Quantity</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        productsDetail.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <th>{product.productName}</th>
                                <th>{product.description}</th>
                                <th>{product.price}</th>
                                <th>{product.discount || 0}</th>
                                <th>{product.categoryId}</th>
                                <th>{product.stockQuantity}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className={style.page}>
                <div className={style.pageNumberList}>
                    <div
                        className={`${style.pageNumberItem} ${style.nav}`}
                        onClick={handlePreviousPage}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                    {pageNumbers && pageNumbers.map((pageNumber, index) => (
                        <div
                            key={index}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`${style.pageNumberItem} ${pageNumber === displayCurrentPage ? style.active : ''}`}
                        >
                            {pageNumber}
                        </div>
                    ))}
                    <div
                        onClick={handleNextPage}
                        className={`${style.pageNumberItem} ${style.nav}`}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}