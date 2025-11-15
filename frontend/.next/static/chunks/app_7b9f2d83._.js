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
  "goBackButton": "products-module__msaFTa__goBackButton",
  "nextButton": "products-module__msaFTa__nextButton",
  "previousButton": "products-module__msaFTa__previousButton",
  "price": "products-module__msaFTa__price",
  "priceView": "products-module__msaFTa__priceView",
  "product": "products-module__msaFTa__product",
  "productContainer": "products-module__msaFTa__productContainer",
  "productDetails": "products-module__msaFTa__productDetails",
  "productGrid": "products-module__msaFTa__productGrid",
  "productGroup": "products-module__msaFTa__productGroup",
  "productImage": "products-module__msaFTa__productImage",
  "productImageDiv": "products-module__msaFTa__productImageDiv",
  "productImageGroup": "products-module__msaFTa__productImageGroup",
  "productName": "products-module__msaFTa__productName",
  "singleProductContainer": "products-module__msaFTa__singleProductContainer",
});
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
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [imageIndex, setImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const fetchProductById = async ()=>{
        try {
            const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$ProductService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findProductById"])(productId);
            console.log("Product: ", product);
            setProduct(product);
        } catch (error) {
            var _error_response;
            console.log((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetails.useEffect": ()=>{
            fetchProductById();
        }
    }["ProductDetails.useEffect"], []);
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
        if (imageIndex < product.imageUrls.length - 1) {
            setImageIndex((prev)=>prev + 1);
        }
    };
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
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    " Back to Shop"
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/[productId]/page.js",
                lineNumber: 51,
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
                                        lineNumber: 63,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 62,
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
                                            lineNumber: 69,
                                            columnNumber: 49
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "No product Image "
                                            }, void 0, false, {
                                                fileName: "[project]/app/shop/[productId]/page.js",
                                                lineNumber: 76,
                                                columnNumber: 53
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/shop/[productId]/page.js",
                                            lineNumber: 75,
                                            columnNumber: 49
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 66,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 65,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: handleNextImage,
                                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextButton, " ").concat(imageIndex === product.imageUrls.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeNextButton : ''),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAngleRight"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/shop/[productId]/page.js",
                                        lineNumber: 83,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 82,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/shop/[productId]/page.js",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productName,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: product.productName
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: product.description
                                }, void 0, false, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Total Price: ",
                                        product.price - product.discount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/shop/[productId]/page.js",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/shop/[productId]/page.js",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/shop/[productId]/page.js",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/[productId]/page.js",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/shop/[productId]/page.js",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_s(ProductDetails, "94GP6zshI+5J9Y00Phus4VpMzVo=", false, function() {
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

//# sourceMappingURL=app_7b9f2d83._.js.map