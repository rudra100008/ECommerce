(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/services/LoginServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
;
;
const logout = async (param)=>{
    let { router } = param;
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/auth/logout');
        const { message } = res.data;
        console.log("Logout function:", message);
        setTimeout(()=>{
            router.push("/login");
        }, 3000);
    } catch (error) {
        console.log("Logout Error: ", error);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "NavbarContainer": "navbar-module__0TPdZG__NavbarContainer",
  "active": "navbar-module__0TPdZG__active",
  "cartIcon": "navbar-module__0TPdZG__cartIcon",
  "favoriteIcon": "navbar-module__0TPdZG__favoriteIcon",
  "logoutButton": "navbar-module__0TPdZG__logoutButton",
  "logoutGroup": "navbar-module__0TPdZG__logoutGroup",
  "navbarItem": "navbar-module__0TPdZG__navbarItem",
  "navbarItems": "navbar-module__0TPdZG__navbarItems",
  "orderIcon": "navbar-module__0TPdZG__orderIcon",
  "searchGroup": "navbar-module__0TPdZG__searchGroup",
  "searchIcon": "navbar-module__0TPdZG__searchIcon",
  "searchInput": "navbar-module__0TPdZG__searchInput",
  "subNavbar": "navbar-module__0TPdZG__subNavbar",
  "subnavItem": "navbar-module__0TPdZG__subnavItem",
  "subnavItems": "navbar-module__0TPdZG__subnavItems",
  "title": "navbar-module__0TPdZG__title",
  "userImage": "navbar-module__0TPdZG__userImage",
  "userImageSection": "navbar-module__0TPdZG__userImageSection",
});
}),
"[project]/app/Component/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/LoginServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faMagnifyingGlass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/faMagnifyingGlass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-regular-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function Navbar(param) {
    let { userData, activeNavItem, handleItemClick } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavbarContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "ShopEase"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faMagnifyingGlass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faMagnifyingGlass"]
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "productSearch",
                                placeholder: "Looking for something?",
                                type: "input",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItems,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favoriteIcon,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faHeart"]
                                }, void 0, false, {
                                    fileName: "[project]/app/Component/Navbar.js",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orderIcon,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faClipboard"]
                                }, void 0, false, {
                                    fileName: "[project]/app/Component/Navbar.js",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCartShopping"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartMoney,
                                        children: "Rs 0.00 "
                                    }, void 0, false, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userImageSection,
                                children: userData.profileImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: userData.profileImageUrl,
                                    alt: userData.username || "user",
                                    width: 45,
                                    height: 45,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userImage
                                }, void 0, false, {
                                    fileName: "[project]/app/Component/Navbar.js",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subNavbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItems,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleItemClick("home"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'home' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleItemClick("shop"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'shop' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleItemClick("cartItems"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'cartItems' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Cart Items"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 79,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleItemClick("contact"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'contact' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Component/Navbar.js",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 65,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Component/Navbar.js",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(Navbar, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/UserServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCurrentUser",
    ()=>fetchCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
'use client';
;
const fetchCurrentUser = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/user/me');
        console.log("CurrentUser: ", response.data);
        const data = response.data;
        return {
            ...data
        };
    } catch (error) {
        console.log("CurrenUser: ", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './CSS/mainContent'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/UserServices.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeNavItem, setActiveNavItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        email: '',
        profileImageUrl: '',
        roles: []
    });
    const handleItemClick = (item)=>{
        localStorage.setItem('activeNavItem', item);
        setActiveNavItem(item);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const storedItem = localStorage.getItem('activeNavItem');
            if (storedItem) {
                setActiveNavItem(storedItem);
            }
        }
    }["Home.useEffect"], []);
    const loadCurrentUser = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"])();
            setUserData((prev)=>({
                    ...prev,
                    ...data
                }));
        } catch (error) {
            console.error('Error loading user:', error);
        }
        ;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            loadCurrentUser();
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                userData: userData,
                handleItemClick: handleItemClick,
                activeNavItem: activeNavItem
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: style.mainContent
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Email: ",
                    userData.email
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Username : ",
                    userData.username
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Image Url: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: userData.profileImageUrl
                    }, void 0, false, {
                        fileName: "[project]/app/page.jsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            userData.roles && userData.roles.map((role, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        " Role: ",
                        role.roleName
                    ]
                }, key, true, {
                    fileName: "[project]/app/page.jsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(Home, "gzdQyu8KxS19yU4Vr2HVNDEwmVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1c86ff8a._.js.map