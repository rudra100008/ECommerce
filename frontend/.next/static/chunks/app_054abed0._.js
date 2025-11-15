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
    // if (error.response && error.response.status === 401) {
    //     const message = error.response.data?.message;
    //     if (notify) notify(message);
    //     setTimeout(() =>
    //         window.location.href = "/login", 3000);
    // }
    //  if(error.response && error.response.status === 403){
    //     const message  = error.response.data?.message;
    //     const redirectUrl = error.response.data?.redirectUrl;
    //     if(notify) notify(message);
    //     setTimeout(()=>
    //     window.location.href = redirectUrl , 3000);
    // }else 
    if (error.code === 'ERR_NETWORK') {
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
"[project]/app/services/UserServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCurrentUser",
    ()=>fetchCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
'use client';
;
;
const fetchCurrentUser = async (success, error)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/user/me');
        console.log("CurrentUser: ", response.data);
        const data = response.data;
        return data;
    } catch (err) {
        var _err_response;
        console.log("CurrenUser: ", err);
        const { message } = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data;
        if (err.response.data && err.response.status === 401) {
            error(message);
            setTimeout(()=>{
                window.location.href = "/login";
            }, 3000);
        } else if (err.response.data && err.response.status === 403) {
            error(message);
            setTimeout(()=>{
                window.location.href = "/login";
            }, 3000);
        }
        throw err;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Context/NavigationContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationProvider",
    ()=>NavigationProvider,
    "useNavigation",
    ()=>useNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/UserServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NavigationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function NavigationProvider(param) {
    let { children } = param;
    _s();
    const [userLoading, setUserLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { success, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        email: '',
        profileImageUrl: '',
        roles: []
    });
    const loadCurrentUser = async ()=>{
        setUserLoading(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"])(success, error);
            setUserData(data);
        } catch (error) {
            console.error('Error loading user:', error);
        } finally{
            setUserLoading(false);
        }
        ;
    };
    const value = {
        userData,
        setUserData,
        loadCurrentUser,
        userLoading,
        setUserLoading
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/Context/NavigationContext.js",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(NavigationProvider, "4icKyXTwaZVRV4RUDvDkuvjRdaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = NavigationProvider;
const useNavigation = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NavigationContext);
    if (!context) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('useNavigation must be used within NavigationProvider');
    }
    return context;
};
_s1(useNavigation, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NavigationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_054abed0._.js.map