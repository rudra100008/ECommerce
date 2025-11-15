(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Context/NotificationContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotification",
    ()=>useNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const NotificationProvider = (param)=>{
    let { children } = param;
    _s();
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const success = (message)=>{
        setNotification({
            type: "success",
            message: message
        });
    };
    const error = (message)=>{
        setNotification({
            type: "error",
            message: message
        });
    };
    const clear = (message)=>{
        setNotification(null);
    };
    const value = {
        success,
        error,
        clear,
        setNotification,
        notification
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/Context/NotificationContext.js",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotificationProvider, "16RKZ+1+G8vhzPkfy1jq6l+T9PI=");
_c = NotificationProvider;
const useNotification = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
};
_s1(useNotification, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/baseURl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const baseURL = "http://localhost:8080";
const __TURBOPACK__default__export__ = baseURL;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setNotifyFunction",
    ()=>setNotifyFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$baseURl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/baseURl.js [app-client] (ecmascript)");
;
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$baseURl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    withCredentials: true
});
let notify;
const setNotifyFunction = (fn)=>{
    notify = fn;
};
api.interceptors.request.use((config)=>{
    return config;
}, (error)=>{
    return Promise.reject(error);
});
api.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    if (error.response && error.response.status === 401) {
        var _error_response_data;
        const message = (_error_response_data = error.response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message;
        if (notify) notify(message);
        setTimeout(()=>window.location.href = "/login", 3000);
    } else if (error.response && error.response.status === 403) {
        var _error_response_data1, _error_response_data2;
        const message = (_error_response_data1 = error.response.data) === null || _error_response_data1 === void 0 ? void 0 : _error_response_data1.message;
        const redirectUrl = (_error_response_data2 = error.response.data) === null || _error_response_data2 === void 0 ? void 0 : _error_response_data2.redirectUrl;
        if (notify) notify(message);
        setTimeout(()=>window.location.href = redirectUrl, 3000);
    } else if (error.code === 'ERR_NETWORK') {
        const message = "Server is down or unreachable";
        if (notify) notify(message);
        setTimeout(()=>window.location.href.repeat, 3000);
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Component/AppInitializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AppInitializer() {
    _s();
    const { error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppInitializer.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNotifyFunction"])(error);
        }
    }["AppInitializer.useEffect"], [
        error
    ]);
    return null;
}
_s(AppInitializer, "b5WA5veiDMWV6LNeIu0As4b2H64=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = AppInitializer;
var _c;
__turbopack_context__.k.register(_c, "AppInitializer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/notification.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "notification-module__cvCgAq__container",
  "slideIn": "notification-module__cvCgAq__slideIn",
});
}),
"[project]/app/NotificationBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificationBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/notification.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function NotificationBar() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { notification, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationBar.useEffect": ()=>{
            setIsClient(true);
        }
    }["NotificationBar.useEffect"], []);
    if (!isClient || !notification) return null;
    if (notification === null || notification === void 0 ? void 0 : notification.message) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$notification$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: (notification === null || notification === void 0 ? void 0 : notification.message) || ''
                }, void 0, false, {
                    fileName: "[project]/app/NotificationBar.js",
                    lineNumber: 16,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: clear,
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/app/NotificationBar.js",
                    lineNumber: 17,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/NotificationBar.js",
            lineNumber: 15,
            columnNumber: 9
        }, this);
    }
}
_s(NotificationBar, "xAEY2kLaub/8alfKqWQUSpWfgrE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = NotificationBar;
var _c;
__turbopack_context__.k.register(_c, "NotificationBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
                            lineNumber: 19,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 18,
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
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "productSearch",
                                placeholder: "Looking for something?",
                                type: "input",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 23,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 21,
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
                                    lineNumber: 32,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbarItem,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].orderIcon,
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$regular$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faClipboard"]
                                }, void 0, false, {
                                    fileName: "[project]/app/Component/Navbar.js",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 37,
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
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartMoney,
                                        children: "Rs 0.00 "
                                    }, void 0, false, {
                                        fileName: "[project]/app/Component/Navbar.js",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 43,
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
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/Component/Navbar.js",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Component/Navbar.js",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 17,
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
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleItemClick("shop"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'shop' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Shop"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleItemClick("cartItems"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'cartItems' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Cart Items"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleItemClick("contact"),
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subnavItem, " ").concat(activeNavItem === 'contact' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''),
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/app/Component/Navbar.js",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Component/Navbar.js",
                    lineNumber: 67,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Component/Navbar.js",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Component/Navbar.js",
        lineNumber: 16,
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
]);

//# sourceMappingURL=app_eed3b435._.js.map