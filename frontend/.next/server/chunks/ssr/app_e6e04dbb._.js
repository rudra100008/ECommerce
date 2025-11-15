module.exports = [
"[project]/app/services/clientServices/ProductService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchRandomProduct",
    ()=>fetchRandomProduct,
    "findProductById",
    ()=>findProductById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-ssr] (ecmascript)");
;
const fetchRandomProduct = async ({ pageNumber = 0, pageSize = 9 })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/api/product/fetchProducts', {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        console.log("Response in ProductService of fetchRandomProductByCategoryId():", res);
        return res;
    } catch (error) {
        console.log("Error in ProductService of fetchRandomProductByCategoryId():", error.response?.data);
        throw error;
    }
};
const findProductById = async (productId)=>{
    console.log("ProductId: ", productId);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/product/${productId}`);
        console.log("Response of ProductService: ", response);
        return response.data;
    } catch (error) {
        console.log("Error in ProductService: ", error.response?.data);
        throw error;
    }
};
}),
"[project]/app/CSS/userSide/products.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionGroup": "products-module__msaFTa__actionGroup",
  "cartButton": "products-module__msaFTa__cartButton",
  "category": "products-module__msaFTa__category",
  "description": "products-module__msaFTa__description",
  "detailLink": "products-module__msaFTa__detailLink",
  "discount": "products-module__msaFTa__discount",
  "discountPrice": "products-module__msaFTa__discountPrice",
  "price": "products-module__msaFTa__price",
  "priceView": "products-module__msaFTa__priceView",
  "product": "products-module__msaFTa__product",
  "productContainer": "products-module__msaFTa__productContainer",
  "productGrid": "products-module__msaFTa__productGrid",
  "productImage": "products-module__msaFTa__productImage",
  "productImageDiv": "products-module__msaFTa__productImageDiv",
  "productName": "products-module__msaFTa__productName",
  "singleProductContainer": "products-module__msaFTa__singleProductContainer",
});
}),
"[project]/app/shop/[productId]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$ProductService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/ProductService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/userSide/products.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function ProductDetails({ params }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const unwrappedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const productId = unwrappedParams.productId;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const fetchProductById = async ()=>{
        try {
            const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$ProductService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findProductById"])(productId);
            console.log("Product: ", product);
            setProduct(product);
        } catch (error) {
            console.log(error.response?.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProductById();
    }, []);
    const goBackToShop = ()=>{
        router.back();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].singleProductContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: goBackToShop,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].goBackArrow,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                }, void 0, false, {
                    fileName: "[project]/app/shop/[productId]/page.js",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/shop/[productId]/page.js",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$products$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].productImage,
                children: product.imageUrls && product.imageUrls.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `http://localhost:8080${image}`,
                            alt: product.productName
                        }, void 0, false, {
                            fileName: "[project]/app/shop/[productId]/page.js",
                            lineNumber: 41,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/shop/[productId]/page.js",
                        lineNumber: 40,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/shop/[productId]/page.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "ProductId: ",
                    productId
                ]
            }, void 0, true, {
                fileName: "[project]/app/shop/[productId]/page.js",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/shop/[productId]/page.js",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=app_e6e04dbb._.js.map