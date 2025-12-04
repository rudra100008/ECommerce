module.exports = [
"[project]/app/CSS/adminNavbar/AddProductForm/categoryForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ButtonGroup": "categoryForm-module__Th2wEq__ButtonGroup",
  "active": "categoryForm-module__Th2wEq__active",
  "backButton": "categoryForm-module__Th2wEq__backButton",
  "category": "categoryForm-module__Th2wEq__category",
  "categoryForm": "categoryForm-module__Th2wEq__categoryForm",
  "categoryItem": "categoryForm-module__Th2wEq__categoryItem",
  "categoryList": "categoryForm-module__Th2wEq__categoryList",
  "disabled": "categoryForm-module__Th2wEq__disabled",
  "inputGroup": "categoryForm-module__Th2wEq__inputGroup",
  "inputWrapper": "categoryForm-module__Th2wEq__inputWrapper",
  "label": "categoryForm-module__Th2wEq__label",
  "nav": "categoryForm-module__Th2wEq__nav",
  "nextButton": "categoryForm-module__Th2wEq__nextButton",
  "page": "categoryForm-module__Th2wEq__page",
  "pageNumberItem": "categoryForm-module__Th2wEq__pageNumberItem",
  "pageNumberList": "categoryForm-module__Th2wEq__pageNumberList",
  "selected": "categoryForm-module__Th2wEq__selected",
  "tagIcon": "categoryForm-module__Th2wEq__tagIcon",
  "textInput": "categoryForm-module__Th2wEq__textInput",
  "title": "categoryForm-module__Th2wEq__title",
  "validationError": "categoryForm-module__Th2wEq__validationError",
});
}),
"[project]/app/services/adminServices/ProductCategoryServices.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCategory",
    ()=>addCategory,
    "addProductImage",
    ()=>addProductImage,
    "createProduct",
    ()=>createProduct,
    "validateCategory",
    ()=>validateCategory,
    "validateProduct",
    ()=>validateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-ssr] (ecmascript)");
;
const addCategory = async ({ category, setValidationError })=>{
    try {
        // console.log('Category: ', category)
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/admin/category', category);
        // console.log("Add Category Res: ", res);
        return res;
    } catch (error) {
        if (error.response.status === 400) {
            setValidationError({
                name: error.response.data?.name || "Validation Failed."
            });
        } else if (error.response && error.response.status === 401) {} else {
            console.log("AddCategory(): ", error.response.data);
        }
        throw error;
    }
};
const createProduct = async ({ product, category, setValidationError })=>{
    try {
        product.categoryId = category.categoryId;
        console.log('Product in CreateProduct(): ', product);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/admin/addProduct', product);
        console.log(" Res of CreateProduct(): ", res.data);
        return res;
    } catch (error) {
        const validationEr = error.response.data;
        if (error.response && error.response.status === 400) {
            setValidationError((prevData)=>({
                    ...prevData,
                    ...validationEr
                }));
        }
        console.log("Error in CreateProduct(): ", error.response?.data);
        throw error;
    }
};
const addProductImage = async ({ product, images })=>{
    try {
        console.log("Sending FormData with productId:", product.productId);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/api/admin/addProductImage/${product.productId}`, images, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("Res of addProductImage(): ", res);
        return res;
    } catch (error) {
        console.log("Error in addProductImage(): ", error.response?.data);
        throw error;
    }
};
const validateCategory = async (categoryRequest)=>{
    try {
        console.log("CategoryRequest: ", categoryRequest);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/category/validate-category', categoryRequest, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("Reponse of validateCategory: ", response.data);
    } catch (err) {
        console.log("Error in validateCategory(): ", err.response.data);
        throw err;
    }
};
const validateProduct = async (productDTO)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/api/product/validate-product', productDTO, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("Reponse of validateProduct: ", response.data);
    } catch (err) {
        console.log("Error in validateProduct: ", err.response.data);
        throw err;
    }
};
}),
"[project]/app/services/CategoryService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllCategories",
    ()=>fetchAllCategories,
    "fetchCategoryById",
    ()=>fetchCategoryById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-ssr] (ecmascript)");
;
const fetchAllCategories = async (pageNumber = 0, pageSize = 5)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/category/fetchAll`, {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        console.log("fetchAllCategories() in CategoryServices:", res);
        return res;
    } catch (error) {
        console.log("fetchAllCategories() in CategoryServices: ", error.response?.data);
        throw error;
    }
};
const fetchCategoryById = async (categoryId)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/category/${categoryId}`);
        return res.data;
    } catch (error) {
        console.log("Error in CategoryServices: ", error.response?.data);
    }
};
}),
"[project]/app/services/adminServices/ProductServices.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addProduct",
    ()=>addProduct,
    "fetchAllProducts",
    ()=>fetchAllProducts,
    "fetchProductImageUrls",
    ()=>fetchProductImageUrls,
    "fetchProductsWithCategoryId",
    ()=>fetchProductsWithCategoryId,
    "updateProduct",
    ()=>updateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-ssr] (ecmascript)");
;
const fetchProductsWithCategoryId = async (pageNumber = 0, pageSize = 10, categoryId = null)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/admin/products/category/${categoryId}`, {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        console.log("fetchProductsWithCategoryId() in productServices: ", response);
        return response;
    } catch (error1) {
        console.log("Error in fetchProductsWithCategoryId(): ", error1.response?.data);
        throw error1;
    }
};
const fetchProductImageUrls = async (productId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/product/imageUrl/${productId}`);
        console.log("Response of fetchProductImageUrls():", response);
        return response;
    } catch (error1) {
        console.log("Error in fetchProductImageUrls():", error1.response?.data);
        throw error1;
    }
};
const updateProduct = async (product = {})=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put("/api/product/updateProduct", product);
        console.log("Response in updateProduct in productService: ", response);
        return response;
    } catch (error1) {
        console.log("Error in updateProduct() in productService", error1.response?.data);
        throw error1;
    }
};
const addProduct = async (formData)=>{
    try {
        console.log("FormData: ", formData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/admin/addProduct", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("Response in addProduct() from ProductService:", response);
        return response;
    } catch (error1) {
        console.log("Error in addProduct() from ProductService: ", error1.response?.data);
        throw error1;
    }
};
const fetchAllProducts = async (pageNumber = 0, pageSize = 5, sortBy = "createdAt", sortDir = "asce")=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/product/fetchAllProducts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`);
        console.log("Response in fetchAllProducts() from ProductService:", response.data);
        return response.data;
    } catch (err) {
        console.log("Error in ProductService: ", error.response?.data);
        throw err;
    }
};
}),
"[project]/app/AdminComponent/AddProductForm/CategoryForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/AddProductForm/categoryForm.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductCategoryServices.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$CategoryService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/CategoryService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductServices.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function CategoryForm({ setState, formData, updateFormData }) {
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: ""
    });
    const [pageNumbers, setPageNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pageInfo, setPageInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        lastPage: false,
        pageNumber: 0,
        pageSize: 5,
        totalElement: 0,
        totalPage: 0
    });
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleNext = async (e)=>{
        e.preventDefault();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateCategory"])(formData.category);
            setState("product");
        } catch (error) {
            console.log("Failed to create category:", error.response);
            setValidationError({
                name: error.response.data.name
            });
        }
    };
    const handleCancel = ()=>{
        updateFormData({
            category: {
                categoryId: "",
                name: ""
            },
            product: {
                productName: "",
                description: "",
                price: "",
                discount: "",
                sku: "",
                stockQuantity: ""
            },
            images: []
        });
        router.push("/admin");
    };
    const fetchCategories = async (pageNumber, pageSize)=>{
        console.log("PagNumber: ", pageNumber);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$CategoryService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAllCategories"])(pageNumber, pageSize);
        console.log("CategoryForm: ", res.data);
        const { data } = res.data;
        console.log("Data in fetchCategories(): ", data);
        setCategories(data);
        setPageInfo({
            lastPage: res.data.lastPage,
            pageNumber: res.data.pageNumber,
            pageSize: res.data.pageSize,
            totalElement: res.data.totalElement,
            totalPage: res.data.totalPage
        });
        setCurrentPage(res.data.pageNumber);
        if (res.data.totalPage > 0) {
            const numbers = [];
            for(let i = 1; i <= res.data.totalPage; i++){
                numbers.push(i);
            }
            setPageNumbers(numbers);
        }
    };
    const handleCategoryItemClick = (category)=>{
        console.log("Selected category:", category);
        const currentCategoryName = typeof formData.category === "string" ? "" : formData.category.name || "";
        if (currentCategoryName !== category?.name) {
            updateFormData({
                category: {
                    categoryId: category.categoryId,
                    name: category.name
                }
            });
        } else {
            updateFormData({
                category: {
                    categoryId: "",
                    name: ""
                }
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchCategories(0, 5);
    }, []);
    const handleNextPage = ()=>{
        if (pageInfo.lastPage) return;
        const newPage = pageInfo.pageNumber + 1;
        fetchCategories(newPage, pageInfo.pageSize);
    };
    const handlePreviousPage = ()=>{
        if (currentPage <= 0) return;
        const prevPage = pageInfo.pageNumber - 1;
        fetchCategories(prevPage, pageInfo.pageSize);
    };
    // in here pageNumer is different in server pageNumber starts from 0 and here it display from 1 so pageNumber must be decreased by 1
    const handlePageChange = (displayPageNumber)=>{
        const serverPageNumber = displayPageNumber - 1;
        console.log("DisplaypageNumber: ", displayPageNumber, "ServerPageNumber: ", serverPageNumber);
        if (serverPageNumber >= 0 && serverPageNumber < pageInfo.totalPage) {
            setCurrentPage(serverPageNumber);
            fetchCategories(serverPageNumber, pageInfo.pageSize);
        }
    };
    const displayCurrentPage = currentPage + 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryForm,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Category"
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                        htmlFor: "categoryName",
                        children: "Category"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTag"],
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagIcon
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textInput,
                                type: "text",
                                name: "categoryName",
                                id: "categoryName",
                                value: formData.category.name,
                                onChange: (e)=>updateFormData({
                                        category: {
                                            ...formData.category,
                                            name: e.target.value
                                        }
                                    }),
                                placeholder: "Enter category of product"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                        children: validationError.name
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ButtonGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCancel,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            "Cancel"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextButton,
                        onClick: handleNext,
                        children: [
                            "Next",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowRight"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].category,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: " You can choose category from here"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryList,
                        children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryItem} ${formData.category.name === category.name ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected : ""}`,
                                onClick: ()=>handleCategoryItemClick(category),
                                children: category.name
                            }, index, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumberList,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumberItem} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav}`,
                                    onClick: handlePreviousPage,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                pageNumbers && pageNumbers.map((pageNumber, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumberItem} ${pageNumber === displayCurrentPage ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                                        onClick: ()=>handlePageChange(pageNumber),
                                        children: pageNumber
                                    }, index, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumberItem} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav}`,
                                    onClick: handleNextPage,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowRight"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/CSS/adminNavbar/AddProductForm/productForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ButtonGroup": "productForm-module__Lz_Pra__ButtonGroup",
  "InputGroup": "productForm-module__Lz_Pra__InputGroup",
  "active": "productForm-module__Lz_Pra__active",
  "activeLeftButton": "productForm-module__Lz_Pra__activeLeftButton",
  "activeRightButton": "productForm-module__Lz_Pra__activeRightButton",
  "backButton": "productForm-module__Lz_Pra__backButton",
  "categoryFilter": "productForm-module__Lz_Pra__categoryFilter",
  "categorySelect": "productForm-module__Lz_Pra__categorySelect",
  "closeButton": "productForm-module__Lz_Pra__closeButton",
  "disabled": "productForm-module__Lz_Pra__disabled",
  "fadeIn": "productForm-module__Lz_Pra__fadeIn",
  "fadeInError": "productForm-module__Lz_Pra__fadeInError",
  "filterGroup": "productForm-module__Lz_Pra__filterGroup",
  "filterLabel": "productForm-module__Lz_Pra__filterLabel",
  "header": "productForm-module__Lz_Pra__header",
  "imageButton": "productForm-module__Lz_Pra__imageButton",
  "imageModel": "productForm-module__Lz_Pra__imageModel",
  "inputError": "productForm-module__Lz_Pra__inputError",
  "inputWrapper": "productForm-module__Lz_Pra__inputWrapper",
  "leftButton": "productForm-module__Lz_Pra__leftButton",
  "modelImageContainer": "productForm-module__Lz_Pra__modelImageContainer",
  "modelImages": "productForm-module__Lz_Pra__modelImages",
  "nav": "productForm-module__Lz_Pra__nav",
  "nextButton": "productForm-module__Lz_Pra__nextButton",
  "page": "productForm-module__Lz_Pra__page",
  "pageNumberItem": "productForm-module__Lz_Pra__pageNumberItem",
  "pageNumberList": "productForm-module__Lz_Pra__pageNumberList",
  "productForm": "productForm-module__Lz_Pra__productForm",
  "productImage": "productForm-module__Lz_Pra__productImage",
  "productTable": "productForm-module__Lz_Pra__productTable",
  "rightButton": "productForm-module__Lz_Pra__rightButton",
  "selectIcon": "productForm-module__Lz_Pra__selectIcon",
  "selectWrapper": "productForm-module__Lz_Pra__selectWrapper",
  "shakeError": "productForm-module__Lz_Pra__shakeError",
  "slideDown": "productForm-module__Lz_Pra__slideDown",
  "slideUp": "productForm-module__Lz_Pra__slideUp",
  "validationError": "productForm-module__Lz_Pra__validationError",
  "validationErrorIcon": "productForm-module__Lz_Pra__validationErrorIcon",
});
}),
"[project]/app/AdminComponent/AddProductForm/ProductForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/AddProductForm/productForm.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductCategoryServices.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function ProductForm({ setState, formData, updateFormData }) {
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        productName: "",
        description: "",
        price: "",
        discount: "",
        sku: "",
        stockQuantity: ""
    });
    const handleBack = ()=>{
        setState("category");
    };
    const handleNext = async (e)=>{
        e.preventDefault();
        try {
            formData.product.categoryId = formData.category.categoryId;
            console.log("formData", formData);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateProduct"])(formData.product);
            setState("productImage");
        } catch (error) {
            console.log("Product creation  failed: ", error.response?.data);
            const { productName, description, price, discount, stockQuantity } = error.response?.data;
            setValidationError({
                productName: productName,
                description: description,
                price: price,
                discount: discount,
                sku: "",
                stockQuantity: stockQuantity
            });
        }
    };
    const handleInputChange = (fielName, value)=>{
        if (validationError[fielName]) {
            setValidationError((prev)=>({
                    ...prev,
                    [fielName]: ''
                }));
        }
        updateFormData({
            product: {
                ...formData.product,
                [fielName]: value
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("ProductForm received formData:", formData);
        console.log("Category type:", typeof formData.category);
        console.log("Category value:", formData.category);
    }, [
        formData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productForm,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Add a Product"
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "productName",
                                children: "Product Name"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "productName",
                                        id: "productName",
                                        value: formData.product.productName,
                                        onChange: (e)=>handleInputChange("productName", e.target.value),
                                        placeholder: "Enter product Name",
                                        className: `${validationError.productName ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    validationError.productName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationErrorIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTriangleExclamation"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            validationError.productName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.productName
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "description",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "description",
                                        id: "description",
                                        value: formData.product.description,
                                        onChange: (e)=>handleInputChange("description", e.target.value),
                                        placeholder: "Enter description",
                                        className: `${validationError.description ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    validationError.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationErrorIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTriangleExclamation"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            validationError.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.description
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "price",
                                children: "Price"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "price",
                                        id: "price",
                                        value: formData.product.price,
                                        onChange: (e)=>handleInputChange("price", e.target.value),
                                        placeholder: "Enter a price",
                                        className: `${validationError.price ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    validationError.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationErrorIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTriangleExclamation"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                            lineNumber: 133,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            validationError.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.price
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "discount",
                                children: "Discount"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "discount",
                                        id: "discount",
                                        value: formData.product.discount,
                                        onChange: (e)=>handleInputChange("discount", e.target.value),
                                        placeholder: "Enter discount",
                                        className: `${validationError.discount ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    validationError.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationErrorIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTriangleExclamation"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this),
                            validationError.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.discount
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sku",
                                children: "SKU"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "sku",
                                        id: "sku",
                                        value: formData.product.sku,
                                        onChange: (e)=>handleInputChange("sku", e.target.value),
                                        placeholder: "Enter sku",
                                        className: `${validationError.sku ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    validationError.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationErrorIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTriangleExclamation"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            validationError.sku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.sku
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "",
                                children: "Stock Quantity"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "stockQuantity",
                                        id: "stockQuantity",
                                        value: formData.product.stockQuantity,
                                        onChange: (e)=>handleInputChange("stockQuantity", e.target.value),
                                        placeholder: "Enter stock quantity",
                                        className: `${validationError.stockQuantity ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    validationError.stockQuantity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationErrorIcon,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTriangleExclamation"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            validationError.stockQuantity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.stockQuantity
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ButtonGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                        onClick: handleBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextButton,
                        onClick: handleNext,
                        children: [
                            "Next",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowRight"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/CSS/adminNavbar/AddProductForm/productImage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ButtonGroup": "productImage-module__lIneAW__ButtonGroup",
  "backButton": "productImage-module__lIneAW__backButton",
  "customFileLabel": "productImage-module__lIneAW__customFileLabel",
  "customLabel": "productImage-module__lIneAW__customLabel",
  "header": "productImage-module__lIneAW__header",
  "hiddenFileInput": "productImage-module__lIneAW__hiddenFileInput",
  "imageName": "productImage-module__lIneAW__imageName",
  "imagePreviews": "productImage-module__lIneAW__imagePreviews",
  "inputGroup": "productImage-module__lIneAW__inputGroup",
  "nextButton": "productImage-module__lIneAW__nextButton",
  "noImages": "productImage-module__lIneAW__noImages",
  "previewGrid": "productImage-module__lIneAW__previewGrid",
  "previewImage": "productImage-module__lIneAW__previewImage",
  "previewItem": "productImage-module__lIneAW__previewItem",
  "productImage": "productImage-module__lIneAW__productImage",
  "removeButton": "productImage-module__lIneAW__removeButton",
});
}),
"[project]/app/AdminComponent/AddProductForm/ProductImage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/AddProductForm/productImage.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductServices.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function ProductImage({ setState, formData, updateFormData }) {
    const [previewUrls, setPreviewUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        //  if(formData.images){
        //     const newPreviewUrls = formData.images.map(file => URL.createObjectURL(file));
        //     setPreviewUrls(prev => [...prev,...newPreviewUrls]);
        // }
        setState('product');
    };
    const handleImageChange = (e)=>{
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        updateFormData({
            images: [
                ...formData.images,
                ...files
            ]
        });
        const newPreviewUrls = files.map((file)=>URL.createObjectURL(file));
        setPreviewUrls((prev)=>[
                ...prev,
                ...newPreviewUrls
            ]);
        e.target.value = "";
    };
    const removeImage = (index)=>{
        const newImages = formData.images.filter((_, i)=>i !== index);
        console.log("New Images", newImages);
        updateFormData({
            images: newImages
        });
        URL.revokeObjectURL(previewUrls[index]);
        const newPreviewUrls = previewUrls.filter((_, i)=>i !== index);
        setPreviewUrls(newPreviewUrls);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (formData.images.length === 0) {
            alert("Select at least 1 image");
            return;
        }
        try {
            console.log("FormData", formData);
            const formDataToSend = new FormData();
            const categoryBlob = new Blob([
                JSON.stringify(formData.category)
            ], {
                type: 'application/json'
            });
            const productBlob = new Blob([
                JSON.stringify(formData.product)
            ], {
                type: 'application/json'
            });
            formDataToSend.append("product", productBlob);
            formDataToSend.append("category", categoryBlob);
            formData.images.forEach((img)=>formDataToSend.append("image", img));
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addProduct"])(formDataToSend);
            setTimeout(()=>router.push("/admin"), 2000);
        } catch (error) {
            console.log("Error in handleSubmit() in productImage", error.response?.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (formData.images.length > 0 && previewUrls.length === 0) {
            const newPreviewUrls = formData.images.map((image)=>URL.createObjectURL(image));
            setPreviewUrls(newPreviewUrls);
        }
        return ()=>{
            previewUrls.forEach((url)=>URL.revokeObjectURL(url));
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("Images", formData.images);
    }, [
        formData.images
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productImage,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Add a Product Image"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select multiple images"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "productImage",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customLabel,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faUpload"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            "Upload Image"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        multiple: true,
                        id: "productImage",
                        accept: "image/*",
                        onChange: handleImageChange,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hiddenFileInput
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            previewUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imagePreviews,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Selected Images"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 106,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].previewGrid,
                        children: previewUrls.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].previewItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: url,
                                        alt: `Preview ${index + 1}`,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].previewImage
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                        lineNumber: 110,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>removeImage(index),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].removeButton,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faX"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                            lineNumber: 120,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageName,
                                        children: formData.images[index]?.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                        lineNumber: 122,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                lineNumber: 109,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 107,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 105,
                columnNumber: 17
            }, this),
            previewUrls.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noImages,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No images selected yet"
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                    lineNumber: 133,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 132,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ButtonGroup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                        onClick: handleBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextButton,
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 136,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/admin/addProduct/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$CategoryForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/AddProductForm/CategoryForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$ProductForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/AddProductForm/ProductForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$ProductImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/AddProductForm/ProductImage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductCategoryServices.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function AddProductPage() {
    const [currentState, setCurrentState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('category');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        category: {
            categoryId: '',
            name: ''
        },
        product: {
            productName: '',
            description: '',
            price: 0,
            discount: 0,
            sku: '',
            stockQuantity: 0
        },
        images: []
    });
    const updateFormData = (newData)=>{
        setFormData((prevData)=>({
                ...prevData,
                ...newData
            }));
    };
    if (currentState === 'category') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$CategoryForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                setState: setCurrentState,
                formData: formData,
                updateFormData: updateFormData
            }, void 0, false, {
                fileName: "[project]/app/admin/addProduct/page.js",
                lineNumber: 32,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/addProduct/page.js",
            lineNumber: 31,
            columnNumber: 13
        }, this);
    } else if (currentState === 'product') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$ProductForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                setState: setCurrentState,
                formData: formData,
                updateFormData: updateFormData
            }, void 0, false, {
                fileName: "[project]/app/admin/addProduct/page.js",
                lineNumber: 42,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/addProduct/page.js",
            lineNumber: 41,
            columnNumber: 13
        }, this);
    } else if (currentState === 'productImage') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$ProductImage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                setState: setCurrentState,
                formData: formData,
                updateFormData: updateFormData
            }, void 0, false, {
                fileName: "[project]/app/admin/addProduct/page.js",
                lineNumber: 52,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/addProduct/page.js",
            lineNumber: 51,
            columnNumber: 13
        }, this);
    }
}
}),
];

//# sourceMappingURL=app_0510c8e9._.js.map