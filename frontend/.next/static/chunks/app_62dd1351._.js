(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/services/clientServices/ProductService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchRandomProduct",
    ()=>fetchRandomProduct,
    "findProductById",
    ()=>findProductById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
;
const fetchRandomProduct = async (param)=>{
    let { pageNumber = 0, pageSize = 9 } = param;
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/product/fetchProducts', {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        console.log("Response in ProductService of fetchRandomProductByCategoryId():", res);
        return res;
    } catch (error) {
        var _error_response;
        console.log("Error in ProductService of fetchRandomProductByCategoryId():", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw error;
    }
};
const findProductById = async (productId)=>{
    console.log("ProductId: ", productId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/product/".concat(productId));
        console.log("Response of ProductService: ", response);
        return response.data;
    } catch (error) {
        var _error_response;
        console.log("Error in ProductService: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/userSide/products.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionGroup": "products-module__msaFTa__actionGroup",
  "activeNextButton": "products-module__msaFTa__activeNextButton",
  "activePreviousButton": "products-module__msaFTa__activePreviousButton",
  "cartButton": "products-module__msaFTa__cartButton",
  "category": "products-module__msaFTa__category",
  "description": "products-module__msaFTa__description",
  "detailLink": "products-module__msaFTa__detailLink",
  "discount": "products-module__msaFTa__discount",
  "discountPrice": "products-module__msaFTa__discountPrice",
  "fadeIn": "products-module__msaFTa__fadeIn",
  "favoriteIcon": "products-module__msaFTa__favoriteIcon",
  "favoriteIconActive": "products-module__msaFTa__favoriteIconActive",
  "goBackButton": "products-module__msaFTa__goBackButton",
  "isInStock": "products-module__msaFTa__isInStock",
  "nextButton": "products-module__msaFTa__nextButton",
  "previousButton": "products-module__msaFTa__previousButton",
  "price": "products-module__msaFTa__price",
  "priceView": "products-module__msaFTa__priceView",
  "product": "products-module__msaFTa__product",
  "productActionGroup": "products-module__msaFTa__productActionGroup",
  "productContainer": "products-module__msaFTa__productContainer",
  "productDetails": "products-module__msaFTa__productDetails",
  "productGrid": "products-module__msaFTa__productGrid",
  "productGroup": "products-module__msaFTa__productGroup",
  "productImage": "products-module__msaFTa__productImage",
  "productImageContainer": "products-module__msaFTa__productImageContainer",
  "productImageDiv": "products-module__msaFTa__productImageDiv",
  "productImageGroup": "products-module__msaFTa__productImageGroup",
  "productName": "products-module__msaFTa__productName",
  "singleProductContainer": "products-module__msaFTa__singleProductContainer",
  "totalPrice": "products-module__msaFTa__totalPrice",
});
}),
"[project]/app/services/CategoryService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllCategories",
    ()=>fetchAllCategories,
    "fetchCategoryById",
    ()=>fetchCategoryById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
;
const fetchAllCategories = async function() {
    let pageNumber = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, pageSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/category/fetchAll", {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        console.log("fetchAllCategories() in CategoryServices:", res);
        return res;
    } catch (error) {
        var _error_response;
        console.log("fetchAllCategories() in CategoryServices: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw error;
    }
};
const fetchCategoryById = async (categoryId)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/category/".concat(categoryId));
        return res.data;
    } catch (error) {
        var _error_response;
        console.log("Error in CategoryServices: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/shop/[productId]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$ProductService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/ProductService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/userSide/products.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$CategoryService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/CategoryService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ProductDetails(param) {
    let { params } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const unwrappedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const productId = unwrappedParams.productId;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Start with null instead of empty object
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageIndex, setImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchProductById = async ()=>{
        try {
            setLoading(true);
            const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$ProductService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findProductById"])(productId);
            console.log("Product: ", product);
            setProduct(product);
        } catch (error) {
            var _error_response;
            console.log((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        } finally{
            setLoading(false);
        }
    };
    const getCategoryById = async ()=>{
        if (!(product === null || product === void 0 ? void 0 : product.categoryId)) return;
        try {
            const category = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$CategoryService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategoryById"])(product.categoryId);
            setCategory(category);
        } catch (error) {
            var _error_response;
            console.log("Error in ProductDetails: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetails.useEffect": ()=>{
            fetchProductById();
        }
    }["ProductDetails.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetails.useEffect": ()=>{
            getCategoryById();
        }
    }["ProductDetails.useEffect"], [
        product
    ]);
    const goBackToShop = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            sessionStorage.setItem("shopNavigated", "true");
        }
        router.back();
    };
    const handlePreviousImage = ()=>{
        if (imageIndex > 0) {
            setImageIndex((prev)=>{
                return prev - 1;
            });
        }
    };
    const handleNextImage = ()=>{
        var _product_imageUrls;
        if (imageIndex < (product === null || product === void 0 ? void 0 : (_product_imageUrls = product.imageUrls) === null || _product_imageUrls === void 0 ? void 0 : _product_imageUrls.length) - 1) {
            setImageIndex((prev)=>prev + 1);
        }
    };
    // Calculate total price safely
    const calculateTotalPrice = ()=>{
        if (!product) return 0;
        const price = product.price || 0;
        const discount = product.discount || 0;
        return price - discount;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].singleProductContainer,
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/shop/[productId]/page.js",
            lineNumber: 82,
            columnNumber: 16
        }, this);
    }
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].singleProductContainer,
            children: "Product not found"
        }, void 0, false, {
            fileName: "[project]/app/shop/[productId]/page.js",
            lineNumber: 86,
            columnNumber: 16
        }, this);
    }
    console.log("product: ", product);
    console.log("imageIndex, ", imageIndex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].singleProductContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: goBackToShop,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].goBackButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowLeft"]
                    }, void 0, false, {
                        fileName: "[project]/app/shop/[productId]/page.js",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    " Back to Shop"
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/[productId]/page.js",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productDetails,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImageGroup,
                        children: product.imageUrls && product.imageUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: handlePreviousImage,
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previousButton, " ").concat(imageIndex === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activePreviousButton : ''),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAngleLeft"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 103,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 102,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImageContainer,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: product.imageUrls && product.imageUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "http://localhost:8080".concat(product.imageUrls[imageIndex]),
                                            alt: product.productName,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage
                                        }, void 0, false, {
                                            fileName: "[project]/app/shop/[productId]/page.js",
                                            lineNumber: 109,
                                            columnNumber: 49
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No product Image "
                                            }, void 0, false, {
                                                fileName: "[project]/app/shop/[productId]/page.js",
                                                lineNumber: 116,
                                                columnNumber: 53
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/shop/[productId]/page.js",
                                            lineNumber: 115,
                                            columnNumber: 49
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 106,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 105,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: handleNextImage,
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextButton, " ").concat(imageIndex === product.imageUrls.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeNextButton : ''),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAngleRight"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 123,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 122,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/shop/[productId]/page.js",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                                children: [
                                    "Category : ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: category.name || 'Loading...'
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 131,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 130,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: product.productName
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 136,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                children: [
                                    "Price: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            " ",
                                            product.price
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 140,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discount,
                                children: [
                                    "Discount Price : ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: product.discount || 0
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 143,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalPrice,
                                children: [
                                    "Total Price: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: calculateTotalPrice()
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 146,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isInStock,
                                children: [
                                    "isInStock : ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: product.isInStock ? 'Yes' : 'No'
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 149,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/shop/[productId]/page.js",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/[productId]/page.js",
                lineNumber: 97,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/shop/[productId]/page.js",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_s(ProductDetails, "W5KuCU95c0mwouXqTYNSQMgjv9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductDetails;
var _c;
__turbopack_context__.k.register(_c, "ProductDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_62dd1351._.js.map