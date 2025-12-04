(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/CSS/adminNavbar/navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "adminProfile": "navbar-module__eAp2dq__adminProfile",
  "adminProfileContainer": "navbar-module__eAp2dq__adminProfileContainer",
  "adminProfileSection": "navbar-module__eAp2dq__adminProfileSection",
  "container": "navbar-module__eAp2dq__container",
  "groupItems": "navbar-module__eAp2dq__groupItems",
  "iconButton": "navbar-module__eAp2dq__iconButton",
  "icons": "navbar-module__eAp2dq__icons",
  "menuItem": "navbar-module__eAp2dq__menuItem",
  "navbar": "navbar-module__eAp2dq__navbar",
  "navlist": "navbar-module__eAp2dq__navlist",
  "navlistItem": "navbar-module__eAp2dq__navlistItem",
  "noProfile": "navbar-module__eAp2dq__noProfile",
  "profileMenu": "navbar-module__eAp2dq__profileMenu",
  "search": "navbar-module__eAp2dq__search",
  "searchIcon": "navbar-module__eAp2dq__searchIcon",
  "searchInput": "navbar-module__eAp2dq__searchInput",
  "slideDown": "navbar-module__eAp2dq__slideDown",
  "staggeredBar": "navbar-module__eAp2dq__staggeredBar",
});
}),
"[project]/app/AdminComponent/AdminNavbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/navbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/LoginServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
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
;
;
function AdminNavbar(param) {
    let { showSideBar, isSideBarOpen } = param;
    var _adminData_username_charAt, _adminData_username;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { adminData, loadCurrentAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    const { success } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const profileClickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [showProfileMenu, setShowProfileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getUrl = (url)=>{
        if (!url) return null;
        if (url.startsWith("/api/")) {
            return "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080").concat(url);
        }
        return url;
    };
    const handleProfileClick = ()=>{
        setShowProfileMenu((prev)=>!prev);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminNavbar.useEffect": ()=>{
            const handleClickOutside = {
                "AdminNavbar.useEffect.handleClickOutside": (event)=>{
                    if (profileClickRef.current && !profileClickRef.current.contains(event.target)) {
                        setShowProfileMenu(false);
                    }
                }
            }["AdminNavbar.useEffect.handleClickOutside"];
            if (showProfileMenu) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "AdminNavbar.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["AdminNavbar.useEffect"];
        }
    }["AdminNavbar.useEffect"], [
        showProfileMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminNavbar.useEffect": ()=>{
            loadCurrentAdmin();
        }
    }["AdminNavbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container, " ").concat(!isSideBarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarClosed : ''),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].staggeredBar,
                    onClick: showSideBar,
                    "aria-label": "Toggle sidebar",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faBarsStaggered"],
                        size: "lg"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                        lineNumber: 55,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlist,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlistItem,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].search,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faMagnifyingGlass"]
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput,
                                    type: "text",
                                    placeholder: "Search here"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                            lineNumber: 59,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].groupItems,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlistItem,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconButton,
                                "aria-label": "Notifications",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icons,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faBell"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificationBadge
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlistItem,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: profileClickRef,
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: handleProfileClick,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminProfileContainer,
                                        children: adminData.profileImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminProfileSection,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: getUrl(adminData.profileImageUrl),
                                                alt: adminData.username || "No Image",
                                                width: 45,
                                                height: 45,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminProfile
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                lineNumber: 84,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                            lineNumber: 83,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noProfile,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: (adminData === null || adminData === void 0 ? void 0 : (_adminData_username = adminData.username) === null || _adminData_username === void 0 ? void 0 : (_adminData_username_charAt = _adminData_username.charAt(0)) === null || _adminData_username_charAt === void 0 ? void 0 : _adminData_username_charAt.toUpperCase()) || "A"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                lineNumber: 94,
                                                columnNumber: 44
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                            lineNumber: 93,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this),
                                    showProfileMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileMenu,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/admin/profile",
                                                    children: "View Profile"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                    lineNumber: 103,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                lineNumber: 102,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/admin/setting",
                                                    children: "Setting"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                    lineNumber: 106,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                lineNumber: 105,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuItem,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])(router, success),
                                                    children: "Logout"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                    lineNumber: 109,
                                                    columnNumber: 42
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                                lineNumber: 108,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                        lineNumber: 101,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminComponent/AdminNavbar.js",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminComponent/AdminNavbar.js",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminComponent/AdminNavbar.js",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(AdminNavbar, "f0Tletzulai0eDL+v04Ym2j4jvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = AdminNavbar;
var _c;
__turbopack_context__.k.register(_c, "AdminNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/adminNavbar/sideNavbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "sideNavbar-module__vbVPNW__active",
  "activeSubItem": "sideNavbar-module__vbVPNW__activeSubItem",
  "cartIcon": "sideNavbar-module__vbVPNW__cartIcon",
  "closed": "sideNavbar-module__vbVPNW__closed",
  "container": "sideNavbar-module__vbVPNW__container",
  "faIcon": "sideNavbar-module__vbVPNW__faIcon",
  "logoIcon": "sideNavbar-module__vbVPNW__logoIcon",
  "navItemContainer": "sideNavbar-module__vbVPNW__navItemContainer",
  "navbar": "sideNavbar-module__vbVPNW__navbar",
  "navlist": "sideNavbar-module__vbVPNW__navlist",
  "navlistitem": "sideNavbar-module__vbVPNW__navlistitem",
  "slideDown": "sideNavbar-module__vbVPNW__slideDown",
  "subItems": "sideNavbar-module__vbVPNW__subItems",
  "title": "sideNavbar-module__vbVPNW__title",
  "titleSection": "sideNavbar-module__vbVPNW__titleSection",
});
}),
"[project]/app/AdminComponent/AdminSideNavbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminSideNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/sideNavbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-regular-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function AdminSideNavbar(param) {
    let { isSideBarOpen, setIsSideBarOpen, setItemClicked, itemClicked } = param;
    _s();
    const [angleDown, setAngleDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleProductClick = ()=>{
        setIsSideBarOpen(true);
        setAngleDown((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container, " ").concat(!isSideBarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closed : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoSection,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faShoppingBag"],
                            size: "lg",
                            color: "#ffffff"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "ShopEase"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlist,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>setItemClicked("dashboard"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlistitem, "  ").concat(itemClicked === "dashboard" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faDashboard"],
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>setItemClicked("profile"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlistitem, "  ").concat(itemClicked === "profile" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faUserCircle"],
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: handleProductClick,
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlistitem, "  ").concat(angleDown ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeSubItem : ""),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCube"],
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Product"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    isSideBarOpen && (angleDown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAngleUp"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAngleDown"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        angleDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subItems),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "".concat(itemClicked === "product" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                                    onClick: ()=>setItemClicked("product"),
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin/addProduct",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add product"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            onClick: ()=>setItemClicked("sale"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navlistitem, "  ").concat(itemClicked === "sale" ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItemContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$sideNavbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faBarChart"],
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Sales"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AdminSideNavbar.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(AdminSideNavbar, "N4DyQ1gqNn7RwyD+Q4iqG8+rdVA=");
_c = AdminSideNavbar;
var _c;
__turbopack_context__.k.register(_c, "AdminSideNavbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/adminNavbar/adminPage.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "adminContent": "adminPage-module__CiVa3W__adminContent",
  "adminLayout": "adminPage-module__CiVa3W__adminLayout",
  "mainContent": "adminPage-module__CiVa3W__mainContent",
  "pageContent": "adminPage-module__CiVa3W__pageContent",
  "sidebarClosed": "adminPage-module__CiVa3W__sidebarClosed",
});
}),
"[project]/app/AdminComponent/Dashboard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Dashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Dashboard"
    }, void 0, false, {
        fileName: "[project]/app/AdminComponent/Dashboard.js",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/adminNavbar/product.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "productButton": "product-module__mKE9aG__productButton",
  "productTable": "product-module__mKE9aG__productTable",
});
}),
"[project]/app/CSS/adminNavbar/AddProductForm/productForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/app/services/adminServices/ProductServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
;
const fetchProductsWithCategoryId = async function() {
    let pageNumber = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, pageSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10, categoryId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/admin/products/category/".concat(categoryId), {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        });
        console.log("fetchProductsWithCategoryId() in productServices: ", response);
        return response;
    } catch (error1) {
        var _error_response;
        console.log("Error in fetchProductsWithCategoryId(): ", (_error_response = error1.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw error1;
    }
};
const fetchProductImageUrls = async (productId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/product/imageUrl/".concat(productId));
        console.log("Response of fetchProductImageUrls():", response);
        return response;
    } catch (error1) {
        var _error_response;
        console.log("Error in fetchProductImageUrls():", (_error_response = error1.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw error1;
    }
};
const updateProduct = async function() {
    let product = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/api/product/updateProduct", product);
        console.log("Response in updateProduct in productService: ", response);
        return response;
    } catch (error1) {
        var _error_response;
        console.log("Error in updateProduct() in productService", (_error_response = error1.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw error1;
    }
};
const addProduct = async (formData)=>{
    try {
        console.log("FormData: ", formData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/admin/addProduct", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("Response in addProduct() from ProductService:", response);
        return response;
    } catch (error1) {
        var _error_response;
        console.log("Error in addProduct() from ProductService: ", (_error_response = error1.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw error1;
    }
};
const fetchAllProducts = async function() {
    let pageNumber = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, pageSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, sortBy = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "createdAt", sortDir = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "asce";
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/product/fetchAllProducts?pageNumber=".concat(pageNumber, "&pageSize=").concat(pageSize, "&sortBy=").concat(sortBy, "&sortDir=").concat(sortDir));
        console.log("Response in fetchAllProducts() from ProductService:", response.data);
        return response.data;
    } catch (err) {
        var _error_response;
        console.log("Error in ProductService: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        throw err;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
"[project]/app/CSS/adminNavbar/productData.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backButton": "productData-module__cBquvG__backButton",
  "closeButton": "productData-module__cBquvG__closeButton",
  "container": "productData-module__cBquvG__container",
  "editButton": "productData-module__cBquvG__editButton",
  "header": "productData-module__cBquvG__header",
  "imageButton": "productData-module__cBquvG__imageButton",
  "imageContainer": "productData-module__cBquvG__imageContainer",
  "imageGrid": "productData-module__cBquvG__imageGrid",
  "imageGridItem": "productData-module__cBquvG__imageGridItem",
  "label": "productData-module__cBquvG__label",
  "product": "productData-module__cBquvG__product",
  "productGroup": "productData-module__cBquvG__productGroup",
});
}),
"[project]/app/Component/GetProductImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GetProductImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function GetProductImage(param) {
    let { imageUrl } = param;
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [image, setImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const GetProductImage = async ()=>{
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(imageUrl, {
                responseType: 'blob'
            });
            console.log("Response in GetProductImage: ", response);
            const createImageUrl = URL.createObjectURL(response.data);
            setImage(createImageUrl);
        } catch (error) {
            var _error_response;
            console.log("Error in GetProductImage: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GetProductImage.useEffect": ()=>{
            GetProductImage();
        }
    }["GetProductImage.useEffect"], [
        imageUrl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                width: 400,
                height: 100,
                alt: "ProductImage"
            }, void 0, false, {
                fileName: "[project]/app/Component/GetProductImage.js",
                lineNumber: 33,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/Component/GetProductImage.js",
            lineNumber: 32,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Component/GetProductImage.js",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(GetProductImage, "mQxWBwc/ZTCQfrez6plReh6//LA=");
_c = GetProductImage;
var _c;
__turbopack_context__.k.register(_c, "GetProductImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/adminNavbar/AddProductForm/editForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ButtonGroup": "editForm-module__Xn4MIG__ButtonGroup",
  "InputGroup": "editForm-module__Xn4MIG__InputGroup",
  "backButton": "editForm-module__Xn4MIG__backButton",
  "editButton": "editForm-module__Xn4MIG__editButton",
  "editForm": "editForm-module__Xn4MIG__editForm",
  "header": "editForm-module__Xn4MIG__header",
  "inputIcon": "editForm-module__Xn4MIG__inputIcon",
  "inputWrapper": "editForm-module__Xn4MIG__inputWrapper",
});
}),
"[project]/app/AdminComponent/AddProductForm/EditProduct.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/AddProductForm/editForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductServices.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function EditProduct(param) {
    let { selectedProduct, setSelectedProduct, setShowEditForm } = param;
    _s();
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        productName: '',
        description: '',
        price: '',
        discount: '',
        sku: '',
        stockQuantity: ''
    });
    const [localProduct, setlocalProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selectedProduct);
    const handleValueChange = (e)=>{
        setlocalProduct((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleEditButton = async ()=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProduct"])(localProduct);
            setSelectedProduct(response.data.product);
        } catch (error) {
            var _error_response;
            console.log("Error in handleEditButton()", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        }
    };
    const handleBackButton = ()=>{
        setShowEditForm(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editForm,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Edit a Product"
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "productName",
                                children: "Product Name"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "productName",
                                    id: "productName",
                                    value: localProduct.productName || '',
                                    onChange: (e)=>handleValueChange(e),
                                    placeholder: "Enter product Name"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                    lineNumber: 42,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.productName
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "description",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "description",
                                    id: "description",
                                    value: localProduct.description || '',
                                    onChange: (e)=>handleValueChange(e),
                                    placeholder: "Enter description"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.description
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "price",
                                children: "Price"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faRupee"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "price",
                                        id: "price",
                                        value: localProduct.price || '',
                                        onChange: (e)=>handleValueChange(e),
                                        placeholder: "Enter a price"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.price
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "discount",
                                children: "Discount"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faRupee"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        name: "discount",
                                        id: "discount",
                                        value: localProduct.discount || '',
                                        onChange: (e)=>handleValueChange(e),
                                        placeholder: "Enter discount"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.discount
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 95,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].InputGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "",
                                children: "Stock Quantity"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    name: "stockQuantity",
                                    id: "stockQuantity",
                                    value: localProduct.stockQuantity,
                                    onChange: (e)=>handleValueChange(e),
                                    placeholder: "Enter stock quantity"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].validationError,
                                children: validationError.stockQuantity
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 109,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                        lineNumber: 97,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ButtonGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                                onClick: handleBackButton,
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$editForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                                onClick: handleEditButton,
                                children: "Edit Product"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/EditProduct.js",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(EditProduct, "us0dhkn//WkQxC6zACxKqiY2kRs=");
_c = EditProduct;
var _c;
__turbopack_context__.k.register(_c, "EditProduct");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminComponent/ProductData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/productData.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$GetProductImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/GetProductImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$EditProduct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/AddProductForm/EditProduct.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function ProductData(param) {
    let { selectedProduct, setShowProductDetails, setSelectedProduct } = param;
    _s();
    const [imageUrls, setImageUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isProductImage, setIsProductImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditForm, setShowEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchImageUrls = async ()=>{
        console.log("ProductId: ", selectedProduct);
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductImageUrls"])(selectedProduct.productId);
        const { images } = response.data;
        setImageUrls(images);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductData.useEffect": ()=>{
            fetchImageUrls();
        }
    }["ProductData.useEffect"], [
        selectedProduct.productId
    ]);
    const handleProductEdit = async ()=>{
        setShowEditForm(true);
    };
    if (isProductImage && !showEditForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Product Images"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/ProductData.js",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/ProductData.js",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageGrid,
                    children: imageUrls.map((imageUrl, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageGridItem,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$GetProductImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    imageUrl: imageUrl
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 38,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/ProductData.js",
                                lineNumber: 37,
                                columnNumber: 33
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 36,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/ProductData.js",
                    lineNumber: 33,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIsProductImage(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowLeft"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/ProductData.js",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this),
                            "Back"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/ProductData.js",
                        lineNumber: 45,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/ProductData.js",
                    lineNumber: 44,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminComponent/ProductData.js",
            lineNumber: 29,
            columnNumber: 13
        }, this);
    } else if (!isProductImage && !showEditForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                    onClick: ()=>setShowProductDetails(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faX"]
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/ProductData.js",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/ProductData.js",
                    lineNumber: 55,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Product Information"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/ProductData.js",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminComponent/ProductData.js",
                    lineNumber: 58,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].product,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: selectedProduct.productName
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 69,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: selectedProduct.description.length > 200 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            selectedProduct.description.slice(0, 200),
                                            "...."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminComponent/ProductData.js",
                                        lineNumber: 74,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: selectedProduct.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/ProductData.js",
                                        lineNumber: 76,
                                        columnNumber: 32
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Price"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "₹",
                                        selectedProduct.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Discount"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "₹",
                                        selectedProduct.discount || 0
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                    children: "Stock"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: selectedProduct.stockQuantity
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/ProductData.js",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].editButton,
                            onClick: handleProductEdit,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                children: "Edit product"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/ProductData.js",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageButton,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsProductImage(true),
                                children: "See product Images"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/ProductData.js",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/ProductData.js",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminComponent/ProductData.js",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminComponent/ProductData.js",
            lineNumber: 54,
            columnNumber: 13
        }, this);
    } else if (showEditForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$productData$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$EditProduct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selectedProduct: selectedProduct,
                setSelectedProduct: setSelectedProduct,
                setShowEditForm: setShowEditForm
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/ProductData.js",
                lineNumber: 115,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminComponent/ProductData.js",
            lineNumber: 114,
            columnNumber: 13
        }, this);
    }
}
_s(ProductData, "Ksul0LGXzWOtCkz5zvNROSpN2Zs=");
_c = ProductData;
var _c;
__turbopack_context__.k.register(_c, "ProductData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminComponent/AddProductForm/ProductTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/AddProductForm/productForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/ProductServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$CategoryService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/CategoryService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$ProductData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/ProductData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faLayerGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/faLayerGroup.js [app-client] (ecmascript)");
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
function ProductTable() {
    _s();
    const [pageNumbers, setPageNumbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [categorys, setCategorys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("0"); // Initialize as string "0"
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showImageModel, setShowImageModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedProductImage, setSelectedProductImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imageIndex, setImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pageInfo, setPageInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        lastPage: false,
        pageNumber: 0,
        pageSize: 7,
        totalElement: 0,
        totalPage: 0
    });
    const [showProductDetails, setShowProductDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productsDetail, setProductsDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchProductsByCategoryId = async (pageNumber, pageSize, categoryId)=>{
        try {
            // Validate and parse categoryId
            const parsedCategoryId = parseInt(categoryId);
            if (isNaN(parsedCategoryId) || parsedCategoryId <= 0) {
                console.error("Invalid category ID:", categoryId);
                return;
            }
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductsWithCategoryId"])(pageNumber, pageSize, parsedCategoryId // Use parsed integer
            );
            if (response && response.data) {
                const { product: product1 } = response.data;
                setProductsDetail(product1.data);
                setPageInfo({
                    lastPage: product1.lastPage,
                    pageNumber: product1.pageNumber,
                    pageSize: product1.pageSize,
                    totalElement: product1.totalElement,
                    totalPage: product1.totalPage
                });
                setCurrentPage(product1.pageNumber);
                if (product1.totalPage > 0) {
                    let numbers = [];
                    for(let i = 1; i <= product1.totalPage; i++){
                        numbers.push(i);
                    }
                    setPageNumbers(numbers);
                }
            }
        } catch (error) {
            var _error_response;
            console.log("Error in productTable: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        }
    };
    const fetchProducts = async (pageNumber, pageSize, sortBy, sortDir)=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$ProductServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllProducts"])(pageNumber, pageSize, sortBy, sortDir);
            if (response && response.data) {
                const data = response.data;
                setProductsDetail(data);
                setPageInfo({
                    lastPage: response.lastPage,
                    pageNumber: response.pageNumber,
                    pageSize: response.pageSize,
                    totalElement: response.totalElement,
                    totalPage: response.totalPage
                });
                setCurrentPage(product.pageNumber);
                if (product.totalPage > 0) {
                    let numbers = [];
                    for(let i = 1; i <= product.totalPage; i++){
                        numbers.push(i);
                    }
                    setPageNumbers(numbers);
                }
            }
        } catch (err) {
            var _err_response;
            console.log("Error: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        }
    };
    const fetchCategory = async ()=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$CategoryService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllCategories"])(0, 10000);
            const { data } = response.data;
            setCategorys(data);
        } catch (error) {
            var _error_response;
            console.log("Error fetching categories: ", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductTable.useEffect": ()=>{
            const storedCategoryId = localStorage.getItem("categoryId");
            if (storedCategoryId && storedCategoryId !== "0") {
                const parsedCategoryId = parseInt(storedCategoryId);
                if (!isNaN(parsedCategoryId) && parsedCategoryId > 0) {
                    setSelectedCategory(storedCategoryId);
                    fetchProductsByCategoryId(0, 5, storedCategoryId);
                } else {
                    setSelectedCategory("0");
                    fetchProducts(0, 5, "createdAt", "asc");
                    localStorage.setItem("categoryId", "0");
                }
            } else {
                setSelectedCategory("0");
                fetchProducts(0, 5, "createdAt", "asc");
                localStorage.setItem("categoryId", "0");
            }
            fetchCategory();
        }
    }["ProductTable.useEffect"], []);
    const handlePreviousPage = ()=>{
        if (currentPage <= 0) return;
        const prevPage = pageInfo.pageNumber - 1;
        if (selectedCategory === "0") {
            fetchProducts(prevPage, 5, "createdAt", "asc");
        } else {
            fetchProductsByCategoryId(prevPage, 5, selectedCategory);
        }
        setCurrentPage(prevPage);
    };
    const handleNextPage = ()=>{
        if (pageInfo.lastPage) return;
        const nextPage = pageInfo.pageNumber + 1;
        if (selectedCategory === "0") {
            fetchProducts(nextPage, 5, "createdAt", "asc");
        } else {
            fetchProductsByCategoryId(nextPage, 5, selectedCategory);
        }
        setCurrentPage(nextPage);
    };
    const handlePageChange = (displayPageNumber)=>{
        const serverPageNumber = displayPageNumber - 1;
        if (serverPageNumber >= 0 && serverPageNumber < pageInfo.totalPage) {
            if (selectedCategory === "0") {
                fetchProducts(serverPageNumber, 5, "createdAt", "asc");
            } else {
                fetchProductsByCategoryId(serverPageNumber, 5, selectedCategory);
            }
            setCurrentPage(serverPageNumber);
        }
    };
    const handleCategoryChange = (e)=>{
        const categoryId = e.target.value;
        localStorage.setItem("categoryId", categoryId);
        setSelectedCategory(categoryId);
        if (categoryId === "0") {
            fetchProducts(0, 5, "createdAt", "asc");
        } else {
            const parsedCategoryId = parseInt(categoryId);
            if (!isNaN(parsedCategoryId) && parsedCategoryId > 0) {
                fetchProductsByCategoryId(0, 5, parsedCategoryId);
            } else {
                console.error("Invalid category ID selected:", categoryId);
                setSelectedCategory("0");
                fetchProducts(0, 5, "createdAt", "asc");
            }
        }
    };
    const getSerialNumber = (index)=>{
        return currentPage * pageInfo.pageSize + index + 1;
    };
    const handleDoubleClicks = (product1)=>{
        setSelectedProduct(product1);
        setShowProductDetails(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductTable.useEffect": ()=>{
            if (selectedProduct && selectedProduct.productId && productsDetail && productsDetail.length > 0) {
                setProductsDetail({
                    "ProductTable.useEffect": (prev)=>{
                        const index = prev.findIndex({
                            "ProductTable.useEffect.index": (item)=>item.productId === selectedProduct.productId
                        }["ProductTable.useEffect.index"]);
                        if (index !== -1) {
                            const updated = [
                                ...prev
                            ];
                            updated[index] = selectedProduct;
                            return updated;
                        }
                        return prev;
                    }
                }["ProductTable.useEffect"]);
            }
        }
    }["ProductTable.useEffect"], [
        selectedProduct
    ]);
    const handleShowImage = (product1)=>{
        setSelectedProductImage(product1.imageUrls || []);
        setShowImageModel(true);
    };
    const handleLeftButton = ()=>{
        if (imageIndex > 0) {
            setImageIndex((prev)=>prev - 1);
        }
    };
    const handleRightButton = ()=>{
        if (selectedProductImage.length - 1 > imageIndex) {
            setImageIndex((prev)=>prev + 1);
        }
    };
    const displayCurrentPage = currentPage + 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            showProductDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$ProductData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setShowProductDetails: setShowProductDetails,
                selectedProduct: selectedProduct,
                setSelectedProduct: setSelectedProduct
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                lineNumber: 247,
                columnNumber: 9
            }, this),
            showImageModel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageModel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setShowImageModel(false),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faX"]
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelImages,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleLeftButton,
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftButton, " ").concat(imageIndex === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeLeftButton : ""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAngleLeft"]
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            selectedProductImage.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelImageContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "http://localhost:8080".concat(selectedProductImage[imageIndex]),
                                    alt: "Product Image ".concat(imageIndex + 1),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                    lineNumber: 273,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleRightButton,
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightButton, " ").concat(imageIndex === selectedProductImage.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeRightButton : ""),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAngleRight"]
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                lineNumber: 255,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryFilter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "categorySelect",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterLabel,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faLayerGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faLayerGroup"]
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                "Category"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectWrapper,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "categorySelect",
                                    value: selectedCategory,
                                    onChange: handleCategoryChange,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categorySelect,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "0",
                                            children: "All Categories"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        categorys.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: category.categoryId.toString(),
                                                children: category.name
                                            }, category.categoryId, false, {
                                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faLayerGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faLayerGroup"],
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectIcon
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productTable,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "ID"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                        lineNumber: 323,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Product Name"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                        lineNumber: 326,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Discount"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Images"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: productsDetail.map((product1, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    onDoubleClick: ()=>handleDoubleClicks(product1),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: getSerialNumber(index)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: product1.productName
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: product1.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: [
                                                "₹",
                                                product1.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: [
                                                "₹",
                                                product1.discount || 0
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: product1.stockQuantity
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleShowImage(product1),
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageButton,
                                                type: "button",
                                                children: "See Images"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                                lineNumber: 342,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, product1.productId, true, {
                                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                    lineNumber: 320,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageNumberList,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageNumberItem, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav),
                            onClick: handlePreviousPage,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowLeft"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        pageNumbers.map((pageNumber, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handlePageChange(pageNumber),
                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageNumberItem, " ").concat(pageNumber === displayCurrentPage ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""),
                                children: pageNumber
                            }, index, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: handleNextPage,
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageNumberItem, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$AddProductForm$2f$productForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowRight"]
                            }, void 0, false, {
                                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
                lineNumber: 356,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminComponent/AddProductForm/ProductTable.js",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s(ProductTable, "2adK1sdj9J4E+v1CooLpq2dR7RA=");
_c = ProductTable;
var _c;
__turbopack_context__.k.register(_c, "ProductTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminComponent/Product.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Product
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$product$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/product.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$ProductTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/AddProductForm/ProductTable.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Product() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$product$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$product$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productTable,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AddProductForm$2f$ProductTable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/AdminComponent/Product.js",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminComponent/Product.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminComponent/Product.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_s(Product, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Product;
var _c;
__turbopack_context__.k.register(_c, "Product");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/adminNavbar/profile.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/app/AdminComponent/Profile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/profile.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/UserServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Profile() {
    _s();
    const { success, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const fetchAdmin = async ()=>{
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"])();
        } catch (err) {
            var _err_response;
            console.log("Error", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Profile.useEffect": ()=>{
            fetchAdmin();
        }
    }["Profile.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container
    }, void 0, false, {
        fileName: "[project]/app/AdminComponent/Profile.js",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(Profile, "ujNNec26mm2wv7ri6Efi2hGX198=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = Profile;
var _c;
__turbopack_context__.k.register(_c, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AdminNavbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/AdminNavbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AdminSideNavbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/AdminSideNavbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$adminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/adminNavbar/adminPage.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/Dashboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$Product$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/Product.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$Profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminComponent/Profile.js [app-client] (ecmascript)");
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
function AdminPage() {
    _s();
    const [isSideBarOpen, setIsSideBarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [itemClicked, setItemClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const toggleSideBar = ()=>{
        setIsSideBarOpen((prev)=>!prev);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            if (itemClicked) {
                localStorage.setItem("adminSelectedTab", itemClicked);
            }
        }
    }["AdminPage.useEffect"], [
        itemClicked
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            const selectedTab = localStorage.getItem("adminSelectedTab");
            if (selectedTab) {
                setItemClicked(selectedTab);
            } else {
                setItemClicked("dashboard");
            }
        }
    }["AdminPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$adminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminLayout,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AdminSideNavbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isSideBarOpen: isSideBarOpen,
                setIsSideBarOpen: setIsSideBarOpen,
                setItemClicked: setItemClicked,
                itemClicked: itemClicked
            }, void 0, false, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$adminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminContent, " ").concat(!isSideBarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$adminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarClosed : ''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$AdminNavbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        showSideBar: toggleSideBar,
                        isSideBarOpen: isSideBarOpen
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$adminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$adminNavbar$2f$adminPage$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageContent,
                            children: [
                                itemClicked === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 46,
                                    columnNumber: 45
                                }, this),
                                itemClicked === "product" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$Product$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 47,
                                    columnNumber: 43
                                }, this),
                                itemClicked === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminComponent$2f$Profile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/app/admin/page.js",
                                    lineNumber: 48,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.js",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "AJD+2yZiC5wBGHGsIMhuiXXT0VE=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_54b194c8._.js.map