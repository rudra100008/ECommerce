import { useEffect, useState } from "react";
import style from "../../CSS/adminNavbar/AddProductForm/productForm.module.css";
import {
  fetchAllProducts,
  fetchProductsWithCategoryId,
} from "../../services/adminServices/ProductServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { fetchAllCategories } from "../../services/CategoryService";
import ProductData from "../ProductData";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";

export default function ProductTable() {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [categorys, setCategorys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("0"); // Initialize as string "0"
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showImageModel, setShowImageModel] = useState(false);
  const [selectedProductImage, setSelectedProductImage] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [pageInfo, setPageInfo] = useState({
    lastPage: false,
    pageNumber: 0,
    pageSize: 7,
    totalElement: 0,
    totalPage: 0,
  });
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productsDetail, setProductsDetail] = useState([]);

  const fetchProductsByCategoryId = async (
    pageNumber,
    pageSize,
    categoryId
  ) => {
    try {
      const parsedCategoryId = parseInt(categoryId);

      if (isNaN(parsedCategoryId) || parsedCategoryId <= 0) {
        console.error("Invalid category ID:", categoryId);
        return;
      }

      const response = await fetchProductsWithCategoryId(
        pageNumber,
        pageSize,
        parsedCategoryId 
      );

      if (response && response.data) {
        const { product } = response.data;
        setProductsDetail(product.data);
        setPageInfo({
          lastPage: product.lastPage,
          pageNumber: product.pageNumber,
          pageSize: product.pageSize,
          totalElement: product.totalElement,
          totalPage: product.totalPage,
        });
        setCurrentPage(product.pageNumber);

        if (product.totalPage > 0) {
          let numbers = [];
          for (let i = 1; i <= product.totalPage; i++) {
            numbers.push(i);
          }
          setPageNumbers(numbers);
        }
      }
    } catch (error) {
      console.log("Error in productTable: ", error.response?.data);
    }
  };

  const fetchProducts = async (pageNumber, pageSize, sortBy, sortDir) => {
    try {
      const response = await fetchAllProducts(
        pageNumber,
        pageSize,
        sortBy,
        sortDir
      );
      if (response && response.data) {
        const data = response.data;
        setProductsDetail(data);
        setPageInfo({
          lastPage: response.lastPage,
          pageNumber: response.pageNumber,
          pageSize: response.pageSize,
          totalElement: response.totalElement,
          totalPage: response.totalPage,
        });
        setCurrentPage(product.pageNumber);

        if (product.totalPage > 0) {
          let numbers = [];
          for (let i = 1; i <= product.totalPage; i++) {
            numbers.push(i);
          }
          setPageNumbers(numbers);
        }
      }
    } catch (err) {
      console.log("Error: ", err.response?.data);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await fetchAllCategories(0, 10000);
      const { data } = response.data;
      setCategorys(data);
    } catch (error) {
      console.log("Error fetching categories: ", error.response?.data);
    }
  };

  useEffect(() => {
    const storedCategoryId = localStorage.getItem("categoryId");

    if (storedCategoryId && storedCategoryId !== "0") {
      const parsedCategoryId = parseInt(storedCategoryId);
      if (!isNaN(parsedCategoryId) && parsedCategoryId > 0) {
        setSelectedCategory(storedCategoryId);
        fetchProductsByCategoryId(0, 5, storedCategoryId);
      } else {
        setSelectedCategory("0");
        fetchProducts(0, 5, "createdAt", "asc");
        localStorage.setItem("categoryId", "0");
      }
    } else {
      setSelectedCategory("0");
      fetchProducts(0, 5, "createdAt", "asc");
      localStorage.setItem("categoryId", "0");
    }

    fetchCategory();
  }, []);

  const handlePreviousPage = () => {
    if (currentPage <= 0) return;
    const prevPage = pageInfo.pageNumber - 1;

    if (selectedCategory === "0") {
      fetchProducts(prevPage, 5, "createdAt", "asc");
    } else {
      fetchProductsByCategoryId(prevPage, 5, selectedCategory);
    }
    setCurrentPage(prevPage);
  };

  const handleNextPage = () => {
    if (pageInfo.lastPage) return;
    const nextPage = pageInfo.pageNumber + 1;

    if (selectedCategory === "0") {
      fetchProducts(nextPage, 5, "createdAt", "asc");
    } else {
      fetchProductsByCategoryId(nextPage, 5, selectedCategory);
    }
    setCurrentPage(nextPage);
  };

  const handlePageChange = (displayPageNumber) => {
    const serverPageNumber = displayPageNumber - 1;
    if (serverPageNumber >= 0 && serverPageNumber < pageInfo.totalPage) {
      if (selectedCategory === "0") {
        fetchProducts(serverPageNumber, 5, "createdAt", "asc");
      } else {
        fetchProductsByCategoryId(serverPageNumber, 5, selectedCategory);
      }
      setCurrentPage(serverPageNumber);
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    localStorage.setItem("categoryId", categoryId);
    setSelectedCategory(categoryId);

    if (categoryId === "0") {
      fetchProducts(0, 5, "createdAt", "asc");
    } else {
      const parsedCategoryId = parseInt(categoryId);
      if (!isNaN(parsedCategoryId) && parsedCategoryId > 0) {
        fetchProductsByCategoryId(0, 5, parsedCategoryId);
      } else {
        console.error("Invalid category ID selected:", categoryId);
        setSelectedCategory("0");
        fetchProducts(0, 5, "createdAt", "asc");
      }
    }
  };

  const getSerialNumber = (index) => {
    return currentPage * pageInfo.pageSize + index + 1;
  };

  const handleDoubleClicks = (product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  useEffect(() => {
    if (
      selectedProduct &&
      selectedProduct.productId &&
      productsDetail &&
      productsDetail.length > 0
    ) {
      setProductsDetail((prev) => {
        const index = prev.findIndex(
          (item) => item.productId === selectedProduct.productId
        );
        if (index !== -1) {
          const updated = [...prev];
          updated[index] = selectedProduct;
          return updated;
        }
        return prev;
      });
    }
  }, [selectedProduct]);

  const handleShowImage = (product) => {
    setSelectedProductImage(product.imageUrls || []);
    setShowImageModel(true);
  };

  const handleLeftButton = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  const handleRightButton = () => {
    if (selectedProductImage.length - 1 > imageIndex) {
      setImageIndex((prev) => prev + 1);
    }
  };

  const displayCurrentPage = currentPage + 1;

  return (
    <div>
      {showProductDetails && (
        <ProductData
          setShowProductDetails={setShowProductDetails}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}

      {showImageModel && (
        <div className={style.imageModel}>
          <div
            onClick={() => setShowImageModel(false)}
            className={style.closeButton}
          >
            <FontAwesomeIcon icon={faX} />
          </div>
          <div className={style.modelImages}>
            <div
              onClick={handleLeftButton}
              className={`${style.leftButton} ${
                imageIndex === 0 ? style.activeLeftButton : ""
              }`}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            {selectedProductImage.length > 0 && (
              <div className={style.modelImageContainer}>
                <img
                  src={`http://localhost:8080${selectedProductImage[imageIndex]}`}
                  alt={`Product Image ${imageIndex + 1}`}
                  className={style.productImage}
                />
              </div>
            )}
            <div
              onClick={handleRightButton}
              className={`${style.rightButton} ${
                imageIndex === selectedProductImage.length - 1
                  ? style.activeRightButton
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      )}

      <div className={style.categoryFilter}>
        <div className={style.filterGroup}>
          <label htmlFor="categorySelect" className={style.filterLabel}>
            <FontAwesomeIcon icon={faLayerGroup} />
            Category
          </label>
          <div className={style.selectWrapper}>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className={style.categorySelect}
            >
              <option value="0">All Categories</option>
              {categorys.map((category) => (
                <option
                  key={category.categoryId}
                  value={category.categoryId.toString()}
                >
                  {category.name}
                </option>
              ))}
            </select>
            <FontAwesomeIcon icon={faLayerGroup} className={style.selectIcon} />
          </div>
        </div>
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
              <th>Stock</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            {productsDetail.map((product, index) => (
              <tr
                key={product.productId}
                onDoubleClick={() => handleDoubleClicks(product)}
              >
                <td>{getSerialNumber(index)}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>₹{product.price}</td>
                <td>₹{product.discount || 0}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button
                    onClick={() => handleShowImage(product)}
                    className={style.imageButton}
                    type="button"
                  >
                    See Images
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={style.page}>
        <div className={style.pageNumberList}>
          <div
            className={`${style.pageNumberItem} ${style.nav} ${currentPage === 0 ? style.disabled :''} `}
              onClick={currentPage === 0 ? undefined : handlePreviousPage}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          {pageNumbers.map((pageNumber, index) => (
            <div
              key={index}
              onClick={() => handlePageChange(pageNumber)}
              className={`${style.pageNumberItem} ${
                pageNumber === displayCurrentPage ? style.active : ""
              }`}
            >
              {pageNumber}
            </div>
          ))}
          <div
            onClick={pageInfo.lastPage ? undefined : handleNextPage}
            className={`${style.pageNumberItem} ${style.nav} ${pageInfo.lastPage ?style.disabled:'' }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
