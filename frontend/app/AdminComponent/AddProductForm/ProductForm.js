import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../CSS/adminNavbar/AddProductForm/productForm.module.css";
import {
  faArrowLeft,
  faArrowRight,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { validateProduct } from "../../services/adminServices/ProductCategoryServices";
export default function ProductForm({ setState, formData, updateFormData }) {
  const [validationError, setValidationError] = useState({
    productName: "",
    description: "",
    price: "",
    discount: "",
    sku: "",
    stockQuantity: "",
  });
  const handleBack = () => {
    setState("category");
  };
  const handleNext = async (e) => {
    e.preventDefault();
    try {
      formData.product.categoryId = formData.category.categoryId;
      console.log("formData", formData);
      await validateProduct(formData.product);
      setState("productImage");
    } catch (error) {
      console.log("Product creation  failed: ", error.response?.data);
      const { productName, description, price, discount, stockQuantity } =
        error.response?.data;
      setValidationError({
        productName: productName,
        description: description,
        price: price,
        discount: discount,
        sku: "",
        stockQuantity: stockQuantity,
      });
    }
  };

  const handleInputChange = (fielName,value)=>{
    if(validationError[fielName]){
        setValidationError((prev)=>({
            ...prev,
            [fielName]:''
        }))
    }
    updateFormData({
        product:{...formData.product,[fielName]:value}
    })
  }
  useEffect(() => {
    console.log("ProductForm received formData:", formData);
    console.log("Category type:", typeof formData.category);
    console.log("Category value:", formData.category);
  }, [formData]);

  return (
    <div className={style.productForm}>
      <div className={style.header}>
        <h3>Add a Product</h3>
      </div>
      <form>
        <div className={style.InputGroup}>
          <label htmlFor="productName">Product Name</label>
          <div className={style.inputWrapper}>
            <input
              type="text"
              name="productName"
              id="productName"
              value={formData.product.productName}
              onChange={(e) =>handleInputChange("productName",e.target.value)}
              placeholder="Enter product Name"
              className={`${
                validationError.productName ? style.inputError : ""
              }`}
            />
            {validationError.productName && (
              <div className={style.validationErrorIcon}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </div>
            )}
          </div>
          {validationError.productName && (
            <span className={style.validationError}>
              {validationError.productName}
            </span>
          )}
        </div>
        <div className={style.InputGroup}>
          <label htmlFor="description">Description</label>
          <div className={style.inputWrapper}>
            <input
              type="text"
              name="description"
              id="description"
              value={formData.product.description}
              onChange={(e) =>handleInputChange("description",e.target.value) }
              placeholder="Enter description"
              className={`${
                validationError.description ? style.inputError : ""
              }`}
            />
            {validationError.description && (
              <div className={style.validationErrorIcon}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </div>
            )}
          </div>
          {validationError.description && (
            <span className={style.validationError}>
              {validationError.description}
            </span>
          )}
        </div>
        <div className={style.InputGroup}>
          <label htmlFor="price">Price</label>
          <div className={style.inputWrapper}>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.product.price}
              onChange={(e) =>handleInputChange("price",e.target.value) }
              placeholder="Enter a price"
              className={`${validationError.price ? style.inputError : ""}`}
            />
            {validationError.price && (
              <div className={style.validationErrorIcon}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </div>
            )}
          </div>
          {validationError.price && (
            <span className={style.validationError}>
              {validationError.price}
            </span>
          )}
        </div>
        <div className={style.InputGroup}>
          <label htmlFor="discount">Discount</label>
          <div className={style.inputWrapper}>
            <input
              type="number"
              name="discount"
              id="discount"
              value={formData.product.discount}
              onChange={(e) =>handleInputChange("discount",e.target.value)}
              placeholder="Enter discount"
              className={`${validationError.discount ? style.inputError : ""}`}
            />
            {validationError.discount && (
              <div className={style.validationErrorIcon}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </div>
            )}
          </div>
          {validationError.discount && (
            <span className={style.validationError}>
              {validationError.discount}
            </span>
          )}
        </div>
        <div className={style.InputGroup}>
          <label htmlFor="sku">SKU</label>
          <div className={style.inputWrapper}>
            <input
              type="text"
              name="sku"
              id="sku"
              value={formData.product.sku}
              onChange={(e) =>handleInputChange("sku",e.target.value)}
              placeholder="Enter sku"
              className={`${validationError.sku ? style.inputError : ""}`}
            />
            {validationError.sku && (
              <div className={style.validationErrorIcon}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </div>
            )}
          </div>
          {validationError.sku && (
            <span className={style.validationError}>{validationError.sku}</span>
          )}
        </div>
        <div className={style.InputGroup}>
          <label htmlFor="">Stock Quantity</label>
          <div className={style.inputWrapper}>
            <input
              type="number"
              name="stockQuantity"
              id="stockQuantity"
              value={formData.product.stockQuantity}
              onChange={(e) =>handleInputChange("stockQuantity",e.target.value)}
              placeholder="Enter stock quantity"
              className={`${
                validationError.stockQuantity ? style.inputError : ""
              }`}
            />
            {validationError.stockQuantity && (
              <div className={style.validationErrorIcon}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </div>
            )}
          </div>
          {validationError.stockQuantity && (
            <span className={style.validationError}>
              {validationError.stockQuantity}
            </span>
          )}
        </div>
      </form>
      <div className={style.ButtonGroup}>
        <button type="button" className={style.backButton} onClick={handleBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
        <button type="button" className={style.nextButton} onClick={handleNext}>
          Next
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
