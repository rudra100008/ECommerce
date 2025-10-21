import { useEffect, useState } from 'react';
import style from '../../CSS/adminNavbar/AddProductForm/productForm.module.css';
import { fetchProductsWithCategoryId } from '../../services/ProductServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchAllCategories } from '../../services/CategoryService';
import ProductData from '../ProductData';
export default function ProductTable() {
    const [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [categorys, setCategorys] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProduct, setSelectedProduct] = useState({})
    const [pageInfo, setPageInfo] = useState({
        lastPage: false,
        pageNumber: 0,
        pageSize: 7,
        totalElement: 0,
        totalPage: 0
    })
    const [showProductDetails, setShowProductDetails] = useState(false);
    const [productsDetail, setProductsDetail] = useState([]);


    const fetchProducts = async (pageNumber, pageSize) => {
        try {
            const categoryId = localStorage.getItem("categoryId");
            const response = await fetchProductsWithCategoryId(pageNumber, pageSize, categoryId);
            const { product } = response.data;
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
            setSelectedCategory(categoryId)
        } catch (error) {
            console.log("Error in productTable: ", error.response?.data)
        }

    }

    const fetchCategory = async () => {
        try {
            const response = await fetchAllCategories(0, 10000);
            console.log("Resposne fetchCategory()", response.data.data)
            const { data } = response.data;
            setCategorys(data)

        } catch (error) {
            console.log("Error fetching categories: ", error.response?.data);
        }
    }
    useEffect(() => {
        fetchProducts(0, 5);
        fetchCategory();
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

    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        localStorage.setItem("categoryId", categoryId);
        setSelectedCategory(categoryId);
        fetchProducts(0, 5);
    }
    const getSerialNumber = (index) => {
        return currentPage * pageInfo.pageSize + index + 1;
    }

    const handleDoubleClicks = (product) => {
        setSelectedProduct(product);
        setShowProductDetails(true);
    }
    useEffect(() => {
        if (selectedProduct && selectedProduct.productId && productsDetail && productsDetail.length > 0) {
            setProductsDetail((prev) => {
                const index = prev.findIndex(item => item.productId === selectedProduct.productId)
                if (index !== -1) {
                    const updated = [...prev];
                    updated[index] = selectedProduct;
                    return updated
                }
            })
        }
    }, [selectedProduct])
    const displayCurrentPage = currentPage + 1;
    return (
        <div>
            {
                showProductDetails &&
                <ProductData
                    setShowProductDetails={setShowProductDetails}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                />
            }
            <div className={style.categoryFilter}>
                <select
                    id='categorySelect'
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className={style.categorySelect}
                >
                    <option value="">Choose a  category</option>
                    {categorys &&
                        categorys.map((category, index) => (
                            <option key={category.categoryId || index} value={category.categoryId}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className={style.productTable}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Category</th>
                            <th>Stock </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productsDetail.map((product, index) => (
                                <tr key={index} onDoubleClick={() => handleDoubleClicks(product)}>
                                    <td>{getSerialNumber(index)}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.description}</td>
                                    <td>₹{product.price}</td>
                                    <td>₹{product.discount || 0}</td>
                                    <td>{product.categoryId}</td>
                                    <td>{product.stockQuantity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
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