"use client";
import { useState } from "react";
import CategoryForm from "../../AdminComponent/AddProductForm/CategoryForm";
import ProductForm from "../../AdminComponent/AddProductForm/ProductForm";
import ProductImage from "../../AdminComponent/AddProductForm/ProductImage";
import { addCategory } from "../../services/adminServices/ProductCategoryServices";
import { RouteGuard } from "../../Component/RouteGuard";
import { ROLES } from "../../constant/role";

export default function AddProductPage() {
  const [currentState, setCurrentState] = useState("category");
  const [formData, setFormData] = useState({
    category: {
      categoryId: "",
      name: "",
    },
    product: {
      productName: "",
      description: "",
      price: 0,
      discount: 0,
      sku: "",
      stockQuantity: 0,
    },
    images: [],
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };
  if (currentState === "category") {
    return (
      <RouteGuard requiredRole="ROLE_ADMIN">
        <div>
          <CategoryForm
            setState={setCurrentState}
            formData={formData}
            updateFormData={updateFormData}
          />
        </div>
      </RouteGuard>
    );
  } else if (currentState === "product") {
    return (
      <RouteGuard requiredRole="ROLE_ADMIN">
        <div>
          <ProductForm
            setState={setCurrentState}
            formData={formData}
            updateFormData={updateFormData}
          />
        </div>
      </RouteGuard>
    );
  } else if (currentState === "productImage") {
    return (
      <RouteGuard requiredRole={ROLES.ADMIN}>
        <div>
          <ProductImage
            setState={setCurrentState}
            formData={formData}
            updateFormData={updateFormData}
          />
        </div>
      </RouteGuard>
    );
  }
}
