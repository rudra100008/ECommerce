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
"[project]/app/CSS/userSide/navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "NavbarContainer": "navbar-module__iz9kNq__NavbarContainer",
  "active": "navbar-module__iz9kNq__active",
  "cartIcon": "navbar-module__iz9kNq__cartIcon",
  "favoriteIcon": "navbar-module__iz9kNq__favoriteIcon",
  "logoutButton": "navbar-module__iz9kNq__logoutButton",
  "navbarItem": "navbar-module__iz9kNq__navbarItem",
  "navbarItems": "navbar-module__iz9kNq__navbarItems",
  "orderIcon": "navbar-module__iz9kNq__orderIcon",
  "searchGroup": "navbar-module__iz9kNq__searchGroup",
  "searchIcon": "navbar-module__iz9kNq__searchIcon",
  "searchInput": "navbar-module__iz9kNq__searchInput",
  "subNavbar": "navbar-module__iz9kNq__subNavbar",
  "subnavItem": "navbar-module__iz9kNq__subnavItem",
  "subnavItems": "navbar-module__iz9kNq__subnavItems",
  "title": "navbar-module__iz9kNq__title",
  "userBox": "navbar-module__iz9kNq__userBox",
  "userImage": "navbar-module__iz9kNq__userImage",
  "userImageSection": "navbar-module__iz9kNq__userImageSection",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/userSide/navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faMagnifyingGlass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/faMagnifyingGlass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-regular-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
;
function Navbar() {
    _s();
    const [showUserBox, setShowUserBox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { userData, loadCurrentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    const pathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const getActiveItem = ()=>{
        if (pathName === "/") return "home";
        if (pathName === "/shop") return "shop";
        if (pathName === "/cartItems") return "cartItems";
        if (pathName === "/contact") return "contact";
    };
    const handleUserBox = ()=>{
        setShowUserBox((prev)=>!prev);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            loadCurrentUser();
        }
    }["Navbar.useEffect"], []);
    const activeNavItem = getActiveItem();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavbarContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "ShopEase"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faMagnifyingGlass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faMagnifyingGlass"]
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "productSearch",
                                placeholder: "Looking for something?",
                                type: "input",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItems,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].favoriteIcon,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faHeart"]
                                }, void 0, false, {
                                    fileName: "[project]/app/Component/Navbar.js",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orderIcon,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faClipboard"]
                                }, void 0, false, {
                                    fileName: "[project]/app/Component/Navbar.js",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCartShopping"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartMoney,
                                        children: "Rs 0.00 "
                                    }, void 0, false, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleUserBox,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userImageSection,
                                children: [
                                    userData.profileImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: userData.profileImageUrl,
                                        alt: userData.username || "user",
                                        width: 45,
                                        height: 45,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userImage
                                    }, void 0, false, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this),
                                    showUserBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Edit Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Component/Navbar.js",
                                                lineNumber: 83,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"],
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/app/Component/Navbar.js",
                                                lineNumber: 84,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subNavbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItems,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'home' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/shop",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'shop' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/cartItems",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'cartItems' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Cart Items"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'contact' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 111,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Component/Navbar.js",
                    lineNumber: 92,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Component/Navbar.js",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(Navbar, "t08v1LII9ohHXHd66+Zlq6ZMwk8=", false, function() {
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
"[project]/app/CSS/mainContent.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "pageContainer": "mainContent-module__iKJb5W__pageContainer",
  "pageWrapper": "mainContent-module__iKJb5W__pageWrapper",
});
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/Navbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$mainContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/mainContent.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$mainContent$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: "main page"
            }, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Home, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
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

//# sourceMappingURL=app_df8286d6._.js.map