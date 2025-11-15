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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
function Navbar() {
    _s();
    const { userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    const pathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const getActiveItem = ()=>{
        if (pathName === "/") return "home";
        if (pathName === "/shop") return "shop";
        if (pathName === "/cartItems") return "cartItems";
        if (pathName === "/contact") return "contact";
    };
    const activeNavItem = getActiveItem();
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
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 28,
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
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "productSearch",
                                placeholder: "Looking for something?",
                                type: "input",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 31,
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
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orderIcon,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faClipboard"]
                                }, void 0, false, {
                                    fileName: "[project]/app/Component/Navbar.js",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 47,
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
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartMoney,
                                        children: "Rs 0.00 "
                                    }, void 0, false, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 58,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 53,
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
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subNavbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItems,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'home' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'shop' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/cartItems",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'cartItems' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Cart Items"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'contact' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Component/Navbar.js",
                    lineNumber: 77,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Component/Navbar.js",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_s(Navbar, "/rbN+WUmx/h9Nnnfp1UHit7YE5E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
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
]);

//# sourceMappingURL=app_07a8ad38._.js.map