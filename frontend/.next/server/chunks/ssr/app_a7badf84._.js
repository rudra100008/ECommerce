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
    ()=>createProduct
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
                'Content-Type': 'multipart/form-data' // Explicitly set content type
            }
        });
        console.log("Res of addProductImage(): ", res);
        return res;
    } catch (error) {
        console.log("Error in addProductImage(): ", error.response?.data);
        throw error;
    }
};
}),
"[project]/app/services/CategoryService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllCategories",
    ()=>fetchAllCategories
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
'use client';
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
        name: ''
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
            const cleanCategoryData = {
                name: formData.category.name
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addCategory"])({
                category: cleanCategoryData,
                setValidationError
            });
            updateFormData({
                category: {
                    ...formData.category,
                    ...result.data
                }
            });
            setState('product');
        } catch (error) {
            console.error("Failed to create category:", error.response?.data);
        }
    };
    const handleCancel = ()=>{
        router.push("/admin");
        updateFormData({
            category: {
                categoryId: '',
                name: ''
            },
            product: {
                productName: '',
                description: '',
                price: '',
                discount: '',
                sku: '',
                stockQuantity: ''
            },
            images: []
        });
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
        const currentCategoryName = typeof formData.category === 'string' ? '' : formData.category.name || '';
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
                    categoryId: '',
                    name: ''
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("Updated formData.category:", formData.category);
    }, [
        formData.category
    ]);
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
                    lineNumber: 139,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 138,
                columnNumber: 13
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
                        lineNumber: 142,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTag"],
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagIcon
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                lineNumber: 144,
                                columnNumber: 21
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
                                lineNumber: 145,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                        children: validationError.name
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 141,
                columnNumber: 13
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
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            "Cancel"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 161,
                        columnNumber: 17
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
                                lineNumber: 174,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 160,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].category,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: " You can choose category from here"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryList,
                        children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].categoryItem} ${formData.category.name === category.name ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selected : ''}`,
                                onClick: ()=>handleCategoryItemClick(category),
                                children: category.name
                            }, index, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                lineNumber: 182,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 180,
                        columnNumber: 17
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
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this),
                                pageNumbers && pageNumbers.map((pageNumber, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumberItem} ${pageNumber === displayCurrentPage ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                        onClick: ()=>handlePageChange(pageNumber),
                                        children: pageNumber
                                    }, index, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                        lineNumber: 199,
                                        columnNumber: 29
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pageNumberItem} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$categoryForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav}`,
                                    onClick: handleNextPage,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowRight"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                        lineNumber: 211,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                                    lineNumber: 207,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                        lineNumber: 190,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
                lineNumber: 178,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/CategoryForm.js",
        lineNumber: 137,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/CSS/adminNavbar/AddProductForm/productForm.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ButtonGroup": "productForm-module__Lz_Pra__ButtonGroup",
  "InputGroup": "productForm-module__Lz_Pra__InputGroup",
  "active": "productForm-module__Lz_Pra__active",
  "backButton": "productForm-module__Lz_Pra__backButton",
  "categoryFilter": "productForm-module__Lz_Pra__categoryFilter",
  "categorySelect": "productForm-module__Lz_Pra__categorySelect",
  "disabled": "productForm-module__Lz_Pra__disabled",
  "header": "productForm-module__Lz_Pra__header",
  "inputWrapper": "productForm-module__Lz_Pra__inputWrapper",
  "nav": "productForm-module__Lz_Pra__nav",
  "nextButton": "productForm-module__Lz_Pra__nextButton",
  "page": "productForm-module__Lz_Pra__page",
  "pageNumberItem": "productForm-module__Lz_Pra__pageNumberItem",
  "pageNumberList": "productForm-module__Lz_Pra__pageNumberList",
  "productForm": "productForm-module__Lz_Pra__productForm",
  "productTable": "productForm-module__Lz_Pra__productTable",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductCategoryServices.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function ProductForm({ setState, formData, updateFormData }) {
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        productName: '',
        description: '',
        price: '',
        discount: '',
        sku: '',
        stockQuantity: ''
    });
    const handleBack = ()=>{
        setState('category');
    };
    const handleNext = async (e)=>{
        e.preventDefault();
        try {
            const cleanProductData = {
                productName: formData.product.productName,
                description: formData.product.description,
                price: formData.product.price,
                discount: formData.product.discount,
                sku: formData.product.sku,
                stockQuantity: formData.product.stockQuantity
            };
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProduct"])({
                product: cleanProductData,
                category: formData.category,
                setValidationError
            });
            console.log("handleNext() ProductForm(): ", res.data);
            updateFormData({
                product: {
                    ...formData.product,
                    ...res.data
                }
            });
            setState('productImage');
        } catch (error) {
            console.log("Product creation  failed: ", error.response?.data);
        }
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
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                lineNumber: 48,
                columnNumber: 13
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
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "productName",
                                    id: "productName",
                                    value: formData.product.productName,
                                    onChange: (e)=>updateFormData({
                                            product: {
                                                ...formData.product,
                                                productName: e.target.value
                                            }
                                        }),
                                    placeholder: "Enter product Name"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.productName
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "description",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "description",
                                    id: "description",
                                    value: formData.product.description,
                                    onChange: (e)=>updateFormData({
                                            product: {
                                                ...formData.product,
                                                description: e.target.value
                                            }
                                        }),
                                    placeholder: "Enter description"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.description
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "price",
                                children: "Price"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    name: "price",
                                    id: "price",
                                    value: formData.product.price,
                                    onChange: (e)=>updateFormData({
                                            product: {
                                                ...formData.product,
                                                price: e.target.value
                                            }
                                        }),
                                    placeholder: "Enter a price"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.price
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "discount",
                                children: "Discount"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    name: "discount",
                                    id: "discount",
                                    value: formData.product.discount,
                                    onChange: (e)=>updateFormData({
                                            product: {
                                                ...formData.product,
                                                discount: e.target.value
                                            }
                                        }),
                                    placeholder: "Enter discount"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.discount
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sku",
                                children: "SKU"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "sku",
                                    id: "sku",
                                    value: formData.product.sku,
                                    onChange: (e)=>updateFormData({
                                            product: {
                                                ...formData.product,
                                                sku: e.target.value
                                            }
                                        }),
                                    placeholder: "Enter sku"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.sku
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "",
                                children: "Stock Quantity"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    name: "stockQuantity",
                                    id: "stockQuantity",
                                    value: formData.product.stockQuantity,
                                    onChange: (e)=>updateFormData({
                                            product: {
                                                ...formData.product,
                                                stockQuantity: e.target.value
                                            }
                                        }),
                                    placeholder: "Enter stock quantity"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.stockQuantity
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                lineNumber: 51,
                columnNumber: 13
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
                                lineNumber: 144,
                                columnNumber: 21
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 139,
                        columnNumber: 17
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
                                lineNumber: 153,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
                lineNumber: 138,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/ProductForm.js",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/CSS/adminNavbar/AddProductForm/productImage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "adminContent": "productImage-module__lIneAW__adminContent",
  "adminLayout": "productImage-module__lIneAW__adminLayout",
  "mainContent": "productImage-module__lIneAW__mainContent",
  "pageContent": "productImage-module__lIneAW__pageContent",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductCategoryServices.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
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
    console.log("FormData.Images ", formData);
    console.log("previewUrls ", previewUrls);
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
            const formDataToSend = new FormData();
            formData.images.forEach((image, index)=>{
                formDataToSend.append("images", image);
            });
            console.log("FormData being sent:", formDataToSend);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductCategoryServices$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addProductImage"])({
                product: formData.product,
                images: formDataToSend
            });
            console.log("Response of handleSubmit() in productImage: ", res.data);
            setTimeout(()=>router.push("/admin"), 2000);
        } catch (error) {
            console.log("Error in handleSubmit() in productImage", error.response?.data);
        }
    };
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
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Select multiple images"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 66,
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
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            "Upload Image"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 72,
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
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            previewUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imagePreviews,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Selected Images"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 88,
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
                                        lineNumber: 92,
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
                                            lineNumber: 102,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageName,
                                        children: formData.images[index]?.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                        lineNumber: 104,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                                lineNumber: 91,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 89,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 87,
                columnNumber: 17
            }, this),
            previewUrls.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noImages,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No images selected yet"
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                    lineNumber: 115,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 114,
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
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productImage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nextButton,
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
                lineNumber: 118,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/ProductImage.js",
        lineNumber: 65,
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
            price: '',
            discount: '',
            sku: '',
            stockQuantity: ''
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

//# sourceMappingURL=app_a7badf84._.js.map