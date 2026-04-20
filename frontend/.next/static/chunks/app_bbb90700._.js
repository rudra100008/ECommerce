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
"[project]/app/component/axiosInterceptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if (error.response && error.response.status === 403) {
        var _error_response;
        const { message, redirectUrl } = (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data;
        if (notify) notify(message);
        setTimeout(()=>window.location.href = redirectUrl, 3000);
    } else if (error.code === 'ERR_NETWORK') {
        if (notify) notify("Server is down or unreachable");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/component/AppInitializer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/axiosInterceptor.js [app-client] (ecmascript)");
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setNotifyFunction"])(error);
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
"[project]/app/services/LoginServices.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/UserServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCurrentUser",
    ()=>fetchCurrentUser,
    "revertToGooglePic",
    ()=>revertToGooglePic,
    "updateUserImageAndFullName",
    ()=>updateUserImageAndFullName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/axiosInterceptor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/LoginServices.js [app-client] (ecmascript)");
"use client";
;
;
;
const fetchCurrentUser = async (success, error, router)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/user/me");
        // console.log("CurrentUser: ", response.data);
        const data = response.data;
        return data;
    } catch (err) {
        var _err_response;
        if (!err.response) {
            console.error("Network error or server not reachable:", err.message);
            error("Unable to connect to server. Please check your connection.");
            throw err;
        }
        const { message, redirectUrl } = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data;
        if (err.response.status === 401) {
            var _err_reponse;
            console.log("Error in UserService: ", (_err_reponse = err.reponse) === null || _err_reponse === void 0 ? void 0 : _err_reponse.data);
            error(message);
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])(router, success);
            }, 3000);
        } else if (err.response.status === 403) {
            var _err_reponse1;
            console.log("Error in UserService: ", (_err_reponse1 = err.reponse) === null || _err_reponse1 === void 0 ? void 0 : _err_reponse1.data);
            error(message);
            setTimeout(()=>{
                window.location.href = redirectUrl;
            }, 3000);
        } else {
            error("Unexcepted error occured.");
        }
        throw err;
    }
};
const updateUserImageAndFullName = async (userId, formDataToSend, error)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/user/".concat(userId, "/userImageAndFullName"), formDataToSend, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log("Response in UserService: ", response);
        return response;
    } catch (err) {
        var _err_response;
        console.log("error in UserService: ", err.response.data);
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
const revertToGooglePic = async (userId, success, error)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/user/".concat(userId, "/revert_to_googleImage"));
        console.log("Reponse of revert_to_googleImage: ", response.data);
        success(response.data.message);
        return response.data;
    } catch (err) {
        console.log("err in UserService: ", err.response.body);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/adminServices/AdminServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchCurrentAdmin",
    ()=>fetchCurrentAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/axiosInterceptor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/LoginServices.js [app-client] (ecmascript)");
;
;
const fetchCurrentAdmin = async (error)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/admin/me');
        console.log("Response in AdminServices: ", response.data);
        return response.data;
    } catch (err) {
        var _err_response;
        console.log("error: ", err.response.data);
        const { message, redirectUrl } = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data;
        if (err.response.data && err.response.status === 401) {
            error(message);
            setTimeout(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$LoginServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"])();
            }, 3000);
        } else if (err.response.data && err.response.status === 403) {
            error(message);
            setTimeout(()=>{
                window.location.href = redirectUrl;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$AdminServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/adminServices/AdminServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const NavigationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
// Define public routes that don't need authentication
const PUBLIC_ROUTES = [
    '/login',
    '/signup',
    '/register',
    '/forgot-password'
];
function NavigationProvider(param) {
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [userLoading, setUserLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { success, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: '',
        email: '',
        profileImageUrl: '',
        roles: [],
        userId: null,
        cartId: null
    });
    const loadCurrentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationProvider.useCallback[loadCurrentUser]": async ()=>{
            setUserLoading(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"])(success, error, router);
                if (data) {
                    setUserData(data);
                    if (data.userId) {
                        localStorage.setItem("userId", data.userId);
                    }
                }
            } catch (err) {
                console.error('Error loading user:', err);
                setUserData({
                    username: '',
                    email: '',
                    profileImageUrl: '',
                    roles: [],
                    userId: null,
                    cartId: null
                });
            } finally{
                setUserLoading(false);
            }
        }
    }["NavigationProvider.useCallback[loadCurrentUser]"], [
        success,
        error,
        router
    ]);
    const loadCurrentAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationProvider.useCallback[loadCurrentAdmin]": async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$adminServices$2f$AdminServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentAdmin"])(error);
                setAdminData(data);
            } catch (err) {
                var _err_response;
                console.log("Error loading admin:", (err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data) || err);
                setAdminData(null);
            }
        }
    }["NavigationProvider.useCallback[loadCurrentAdmin]"], [
        error
    ]);
    // Check if current route is public
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationProvider.useEffect": ()=>{
            // Skip loading user on public routes
            if (isPublicRoute) {
                setUserLoading(false);
                return;
            }
            loadCurrentUser();
        }
    }["NavigationProvider.useEffect"], [
        loadCurrentUser,
        isPublicRoute
    ]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationProvider.useCallback[logout]": async ()=>{
            try {
                await api.get("/api/auth/logout");
                success('Logged out successfully.');
                setUserData({
                    username: '',
                    email: '',
                    profileImageUrl: '',
                    roles: [],
                    userId: null,
                    cartId: null
                });
                localStorage.removeItem('userId');
                router.push('/login');
            } catch (err) {
                error("Logout Failed.");
            }
        }
    }["NavigationProvider.useCallback[logout]"], [
        success,
        error,
        router
    ]);
    // Load admin data if user has admin role
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationProvider.useEffect": ()=>{
            var _userData_roles;
            if ((userData === null || userData === void 0 ? void 0 : (_userData_roles = userData.roles) === null || _userData_roles === void 0 ? void 0 : _userData_roles.includes('ROLE_ADMIN')) && !isPublicRoute) {
                loadCurrentAdmin();
            }
        }
    }["NavigationProvider.useEffect"], [
        userData === null || userData === void 0 ? void 0 : userData.roles,
        loadCurrentAdmin,
        isPublicRoute
    ]);
    const value = {
        userData,
        setUserData,
        loadCurrentUser,
        userLoading,
        setUserLoading,
        adminData,
        setAdminData,
        loadCurrentAdmin,
        isPublicRoute,
        logout
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/Context/NavigationContext.js",
        lineNumber: 110,
        columnNumber: 9
    }, this);
}
_s(NavigationProvider, "rwfqsQDsCFVRqR2C2lC/LU2yCuo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = NavigationProvider;
const useNavigation = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within NavigationProvider');
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
    if (error.response && error.response.status === 403) {
        var _error_response;
        const { message, redirectUrl } = (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data;
        if (notify) notify(message);
        setTimeout(()=>window.location.href = redirectUrl, 3000);
    } else if (error.code === 'ERR_NETWORK') {
        if (notify) notify("Server is down or unreachable");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/clientServices/ProductService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchRandomProduct",
    ()=>fetchRandomProduct,
    "findProductById",
    ()=>findProductById,
    "findProductsByIds",
    ()=>findProductsByIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
;
const fetchRandomProduct = async (param)=>{
    let { pageNumber = 0, pageSize = 9 } = param;
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/product/fetchProducts", {
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
const findProductsByIds = async function() {
    let productIds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (!productIds || productIds.length === 0) {
        return [];
    }
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/product/fetchAllProductsByIds", productIds);
        return response.data;
    } catch (err) {
        console.log("Error in ProductService:", err.response.data);
        throw err;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/clientServices/CartService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "calculateSubTotal",
    ()=>calculateSubTotal,
    "deleteCartItemFromCart",
    ()=>deleteCartItemFromCart,
    "fetchProductInCart",
    ()=>fetchProductInCart,
    "updateQuantityOfItem",
    ()=>updateQuantityOfItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
;
const addToCart = async (cartId, cartItem)=>{
    try {
        const requestData = {
            cartId: cartId,
            cartItemDTO: cartItem
        };
        console.log("RequestData: ", requestData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/cart/addToCart", requestData);
        console.log("Response in CartService: ", response);
        return response.data;
    } catch (err) {
        var _err_response;
        console.log("Error in CartService: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        throw err;
    }
};
const fetchProductInCart = async (cartId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/cart/fetchProductInCart", {
            params: {
                cartId: cartId
            }
        });
        return response.data;
    } catch (err) {
        var _err_response;
        console.log("Error in CartService: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        throw err;
    }
};
const updateQuantityOfItem = async (cartItemId, quantity)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/cart/".concat(cartItemId, "/update-quantity/").concat(quantity));
        console.log("Response of updateQuantity: ", response);
        return response.data;
    } catch (err) {
        var _err_response;
        console.log("Error in CartService: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        throw err;
    }
};
const deleteCartItemFromCart = async (cartItemId)=>{
    try {
        const resposne = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/api/cart/".concat(cartItemId, "/delete-item"));
        console.log("Response of CartService", resposne);
    } catch (err) {
        var _err_response;
        console.log("Error in CartService: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        throw err;
    }
};
const calculateSubTotal = async (cartItems)=>{
    try {
        if (!cartItems) return;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/cart/getSubTotal", cartItems);
        console.log("Response in CartService: ", response.data);
        return response.data;
    } catch (err) {
        console.log("Error in CartService: ", err.response.data);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Context/CartContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart,
    "useCartActions",
    ()=>useCartActions,
    "useCartState",
    ()=>useCartState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$ProductService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/ProductService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$CartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/CartService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const intitalState = {
    items: [],
    checkedItems: [],
    cart: null,
    loading: false,
    error: null
};
const CART_ACTIONS = {
    SET_LOADING: "SET_LOADING",
    SET_CART: "SET_CART",
    SET_ERROR: "SET_ERROR",
    UPDATE_ITEM_QUANTITY: "UPDATE_ITEM_QUANTITY",
    REMOVE_ITEM: "REMOVE_ITEM",
    TOGGLE_CHECKED: "TOGGLE_CHECKED",
    CLEAR_CHECKED: "CLEAR_CHECKED",
    RESET: "RESET"
};
function cartReducer(state, action) {
    switch(action.type){
        case CART_ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.payload,
                error: null
            };
        case CART_ACTIONS.SET_CART:
            return {
                ...state,
                cart: action.payload.cart,
                items: action.payload.items,
                loading: false
            };
        case CART_ACTIONS.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case CART_ACTIONS.UPDATE_ITEM_QUANTITY:
            return {
                ...state,
                items: state.items.map((item)=>item.cartItemId === action.payload.cartItemId ? {
                        ...item,
                        quantity: action.payload.quantity
                    } : item),
                checkedItems: state.checkedItems.map((item)=>item.cartItemId === action.payload.cartItemId ? {
                        ...item,
                        quantity: action.payload.quantity
                    } : item)
            };
        case CART_ACTIONS.REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((i)=>i.cartItemId !== action.payload),
                checkedItems: state.checkedItems.filter((i)=>i.cartItemId !== action.payload)
            };
        case CART_ACTIONS.TOGGLE_CHECKED:
            {
                const exists = state.checkedItems.some((i)=>i.cartItemId === action.payload.cartItemId);
                return {
                    ...state,
                    checkedItems: exists ? state.checkedItems.filter((i)=>i.cartItemId !== action.payload.cartItemId) : [
                        ...state.checkedItems,
                        action.payload
                    ]
                };
            }
        case CART_ACTIONS.CLEAR_CHECKED:
            {
                return {
                    ...state,
                    checkedItems: []
                };
            }
        case CART_ACTIONS.RESET:
            return intitalState;
        default:
            return state;
    }
}
const CartStateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const CartActionsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CartProvider(param) {
    let { children } = param;
    _s();
    const { userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    const { success, error: showError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, intitalState);
    const fetchCartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[fetchCartItems]": async ()=>{
            const cartId = userData === null || userData === void 0 ? void 0 : userData.cartId;
            if (!cartId) {
                dispatch({
                    type: CART_ACTIONS.RESET
                });
                return;
            }
            dispatch({
                type: CART_ACTIONS.SET_LOADING,
                payload: true
            });
            try {
                var _cartData_cartItem;
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$CartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductInCart"])(cartId);
                const cartData = response === null || response === void 0 ? void 0 : response.Cart;
                if (!(cartData === null || cartData === void 0 ? void 0 : (_cartData_cartItem = cartData.cartItem) === null || _cartData_cartItem === void 0 ? void 0 : _cartData_cartItem.length)) {
                    dispatch({
                        type: CART_ACTIONS.SET_CART,
                        payload: {
                            items: [],
                            cart: cartData
                        }
                    });
                    return;
                }
                const productIds = cartData.cartItem.map({
                    "CartProvider.useCallback[fetchCartItems].productIds": (item)=>item.productId
                }["CartProvider.useCallback[fetchCartItems].productIds"]);
                const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$ProductService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findProductsByIds"])(productIds);
                const productMap = new Map(products.map({
                    "CartProvider.useCallback[fetchCartItems]": (p)=>[
                            p.productId,
                            p
                        ]
                }["CartProvider.useCallback[fetchCartItems]"]));
                const enrichedItems = cartData.cartItem.map({
                    "CartProvider.useCallback[fetchCartItems].enrichedItems": (cartItem)=>{
                        var _productMap_get;
                        return {
                            ...cartItem,
                            product: (_productMap_get = productMap.get(cartItem.productId)) !== null && _productMap_get !== void 0 ? _productMap_get : null
                        };
                    }
                }["CartProvider.useCallback[fetchCartItems].enrichedItems"]);
                dispatch({
                    type: CART_ACTIONS.SET_CART,
                    payload: {
                        items: enrichedItems,
                        cart: cartData
                    }
                });
            } catch (err) {
                var _err_response_data, _err_response;
                var _err_response_data_message;
                const message = (_err_response_data_message = err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) !== null && _err_response_data_message !== void 0 ? _err_response_data_message : "Failed to load cart items";
                dispatch({
                    type: CART_ACTIONS.SET_ERROR,
                    payload: message
                });
                showError(message);
            }
        }
    }["CartProvider.useCallback[fetchCartItems]"], [
        userData === null || userData === void 0 ? void 0 : userData.cartId,
        showError
    ]);
    const addItemToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addItemToCart]": async (product)=>{
            if (!(userData === null || userData === void 0 ? void 0 : userData.cartId)) throw new Error("Cart not available");
            const cartItem = {
                quantity: 1,
                productId: product.productId,
                cartId: userData.cartId
            };
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$CartService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])(userData.cartId, cartItem);
                success(data.message);
                await fetchCartItems();
            } catch (err) {
                var _err_response_data, _err_response;
                var _err_response_data_message;
                const message = (_err_response_data_message = err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) !== null && _err_response_data_message !== void 0 ? _err_response_data_message : "Failed to add item";
                showError(message);
                throw err;
            }
        }
    }["CartProvider.useCallback[addItemToCart]"], [
        userData === null || userData === void 0 ? void 0 : userData.cartId,
        fetchCartItems,
        success,
        showError
    ]);
    const removeItemFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[removeItemFromCart]": async (cartItemId)=>{
            dispatch({
                type: CART_ACTIONS.REMOVE_ITEM,
                payload: cartItemId
            });
            try {
                await deleteCartItemFromCart(cartItemId);
            } catch (err) {
                await fetchCartItems();
                showError("Failed to remove item. Please try again.");
                throw err;
            }
        }
    }["CartProvider.useCallback[removeItemFromCart]"], [
        fetchCartItems,
        showError
    ]);
    const updateItemQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[updateItemQuantity]": async (cartItemId, quantity)=>{
            const safeQuantity = Math.max(1, quantity);
            // Save previous for rollback
            const previous = state.items.find({
                "CartProvider.useCallback[updateItemQuantity].previous": (i)=>i.cartItemId === cartItemId
            }["CartProvider.useCallback[updateItemQuantity].previous"]);
            // Optimistic update
            dispatch({
                type: CART_ACTIONS.UPDATE_ITEM_QUANTITY,
                payload: {
                    cartItemId,
                    quantity: safeQuantity
                }
            });
            try {
                await updateQuantityOfItem(cartItemId, safeQuantity);
            } catch (err) {
                var _err_response_data, _err_response;
                // Rollback to previous quantity
                if (previous) {
                    dispatch({
                        type: CART_ACTIONS.UPDATE_ITEM_QUANTITY,
                        payload: {
                            cartItemId,
                            quantity: previous.quantity
                        }
                    });
                }
                var _err_response_data_message;
                const message = (_err_response_data_message = err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) !== null && _err_response_data_message !== void 0 ? _err_response_data_message : "Failed to update quantity";
                showError(message);
                throw err;
            }
        }
    }["CartProvider.useCallback[updateItemQuantity]"], [
        state.items,
        showError
    ]);
    const toggleCheckedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[toggleCheckedItem]": (cartItem)=>{
            dispatch({
                type: CART_ACTIONS.TOGGLE_CHECKED,
                payload: cartItem
            });
        }
    }["CartProvider.useCallback[toggleCheckedItem]"], []);
    const clearCheckedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCheckedItems]": ()=>{
            dispatch({
                type: CART_ACTIONS.CLEAR_CHECKED
            });
        }
    }["CartProvider.useCallback[clearCheckedItems]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            fetchCartItems();
        }
    }["CartProvider.useEffect"], [
        fetchCartItems
    ]);
    // don't re-render on action changes
    const stateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[stateValue]": ()=>({
                cartItems: state.items,
                checkedCartItems: state.checkedItems,
                cart: state.cart,
                loading: state.loading,
                error: state.error,
                cartItemCount: state.items.length,
                checkedCount: state.checkedItems.length
            })
    }["CartProvider.useMemo[stateValue]"], [
        state
    ]);
    // never changes reference
    const actionsValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[actionsValue]": ()=>({
                fetchCartItems,
                addItemToCart,
                removeItemFromCart,
                updateItemQuantity,
                toggleCheckedItem,
                clearCheckedItems
            })
    }["CartProvider.useMemo[actionsValue]"], [
        fetchCartItems,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        toggleCheckedItem,
        clearCheckedItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartStateContext.Provider, {
        value: stateValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartActionsContext.Provider, {
            value: actionsValue,
            children: children
        }, void 0, false, {
            fileName: "[project]/app/Context/CartContext.js",
            lineNumber: 264,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Context/CartContext.js",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "rKdgp85WdpTLVnO874S0+sMFNaI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = CartProvider;
function useCartState() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartStateContext);
    if (!ctx) throw new Error("useCartState must be used within <CartProvider>");
    return ctx;
}
_s1(useCartState, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useCartActions() {
    _s2();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartActionsContext);
    if (!ctx) throw new Error("useCartActions must be used within <CartProvider>");
    return ctx;
}
_s2(useCartActions, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useCart() {
    _s3();
    return {
        ...useCartState(),
        ...useCartActions()
    };
}
_s3(useCart, "rAKa6L4lEwrAcHDAQ0rA2qznNKs=", false, function() {
    return [
        useCartState,
        useCartActions
    ];
});
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/CSS/userSide/shippingAddressForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Form": "shippingAddressForm-module__5kppgW__Form",
  "FormContainer": "shippingAddressForm-module__5kppgW__FormContainer",
  "FormSection": "shippingAddressForm-module__5kppgW__FormSection",
  "actionGroup": "shippingAddressForm-module__5kppgW__actionGroup",
  "cancelButton": "shippingAddressForm-module__5kppgW__cancelButton",
  "error": "shippingAddressForm-module__5kppgW__error",
  "inputGroup": "shippingAddressForm-module__5kppgW__inputGroup",
  "inputSection": "shippingAddressForm-module__5kppgW__inputSection",
  "selectGroup": "shippingAddressForm-module__5kppgW__selectGroup",
  "submitButton": "shippingAddressForm-module__5kppgW__submitButton",
  "title": "shippingAddressForm-module__5kppgW__title",
});
}),
"[project]/app/services/clientServices/AddressService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAddress",
    ()=>addAddress,
    "fetchAllAddressesOfUser",
    ()=>fetchAllAddressesOfUser,
    "getDistricts",
    ()=>getDistricts,
    "getMunicipalities",
    ()=>getMunicipalities,
    "getProvinces",
    ()=>getProvinces,
    "removeAddressById",
    ()=>removeAddressById,
    "updateAddress",
    ()=>updateAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/axiosInterceptor.js [app-client] (ecmascript)");
;
const fetchAllAddressesOfUser = async (userId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/user/".concat(userId));
        console.log("Response of fetchAllAddressesOfUser: ", response);
        return response.data;
    } catch (err) {
        console.log("error in AddressService: ", err.response.data);
        throw err;
    }
};
const addAddress = async function() {
    let addressDTO = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/address/addAddress", addressDTO);
        console.log("Response of addAddress: ", response);
        return response.data;
    } catch (err) {
        console.log("error in AddressService: ", err.response.data);
        throw err;
    }
};
const removeAddressById = async function() {
    let userId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, addressId = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/api/address/".concat(addressId, "/user/").concat(userId));
        console.log("Response: ", response.data.message);
        return response.data;
    } catch (err) {
        console.log("error in AddressService: ", err.response.data);
        throw err;
    }
};
const updateAddress = async function() {
    let address = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/api/address/updateAddress', address);
        console.log("Response in AddressService:", response.data);
        return response.data;
    } catch (err) {
        console.log("Error in AddressService:", err.response.data);
    }
};
const getProvinces = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/province");
        console.log("Response in addressService: ", response);
        return response.data;
    } catch (err) {
        console.log("Error in AddressService: ", err.response.data);
        throw err;
    }
};
const getDistricts = async function() {
    let provinceId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/district/".concat(provinceId));
        console.log("Response in AddressService: ", response.data);
        return response.data;
    } catch (err) {
        console.log("Error in AddressService: ", err.response.data);
        return err;
    }
};
const getMunicipalities = async function() {
    let districtId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/municipality/".concat(districtId));
        console.log("Response in AddressService: ", response.data);
        return response.data;
    } catch (err) {
        console.log("Error in AddressService: ", err.response.data);
        return err;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useAddressData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddressData",
    ()=>useAddressData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/AddressService.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useAddressData = ()=>{
    _s();
    const [province, setProvince] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [district, setDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [municipality, setMunicipality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wards, setWards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAddress, setSelectedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        provinceId: null,
        districtId: null
    });
    const fetchProvince = async ()=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProvinces"])();
            setProvince(data);
        } catch (err) {
            console.log("Error in fetchProvince: ", err.response.data);
        }
    };
    const fetchDistrict = async (provinceId)=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistricts"])(provinceId);
            setDistrict(data);
        } catch (err) {
            console.log("Error in fetchDistrict:", err.response.data);
        }
    };
    const fetchMunicipality = async (districtId)=>{
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMunicipalities"])(districtId);
            setMunicipality(data);
        } catch (err) {
            console.log("Error in fetchMunicipality: ", err.response.data);
        }
    };
    const handleSelectedProvince = (id)=>{
        setSelectedAddress((prev)=>({
                ...prev,
                provinceId: id
            }));
    };
    const handleSelectedDistrict = (id)=>{
        setSelectedAddress((prev)=>({
                ...prev,
                districtId: id
            }));
    };
    const addWards = function() {
        let id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
        if (id === null) return;
        const municipalityWards = municipality.find((mun)=>mun.municipalityId === id);
        if (municipalityWards) {
            const wardsArray = [];
            for(let i = 1; i <= municipalityWards.wards; i++){
                wardsArray.push(i);
            }
            setWards(wardsArray);
        }
    };
    return {
        province,
        district,
        municipality,
        selectedAddress,
        wards,
        fetchProvince,
        fetchDistrict,
        fetchMunicipality,
        handleSelectedProvince,
        handleSelectedDistrict,
        addWards
    };
};
_s(useAddressData, "k3dFnq0YWtxAUtG4C7lruYo+scA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/hooks/useAuth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/UserServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const useAuth = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { success, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const [redirectUrl, setRedirectUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchUser = async ()=>{
        try {
            const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$UserServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCurrentUser"])(success, error);
            setUser(user);
        } catch (err) {
            if (err.response) {
                var _err_response;
                const { message, redirectUrl } = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data;
                setUser({});
                if (err.response.status === 403) {
                    setRedirectUrl(redirectUrl);
                }
            }
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            fetchUser();
        }
    }["useAuth.useEffect"], []);
    const hasRole = (role)=>{
        var _user_roles;
        return user === null || user === void 0 ? void 0 : (_user_roles = user.roles) === null || _user_roles === void 0 ? void 0 : _user_roles.includes(role);
    };
    return {
        user,
        setUser,
        loading,
        hasRole,
        redirectUrl,
        refresh: fetchUser
    };
};
_s(useAuth, "ogyMAev4BlnQwHFN+ha+tdnAgPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/component/LoadingSpinner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingSpinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: "LoadingSpinner..."
    }, void 0, false);
}
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/component/RouteGuard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteGuard",
    ()=>RouteGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/LoadingSpinner.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const RouteGuard = (param)=>{
    let { children, requiredRole } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { userData, userLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteGuard.useEffect": ()=>{
            var _userData_roles;
            if (userLoading) return;
            if (!(userData === null || userData === void 0 ? void 0 : userData.userId)) {
                router.push("/login");
                return;
            }
            if (requiredRole && !((_userData_roles = userData.roles) === null || _userData_roles === void 0 ? void 0 : _userData_roles.includes(requiredRole))) {
                var _userData_roles1;
                router.push((userData === null || userData === void 0 ? void 0 : (_userData_roles1 = userData.roles) === null || _userData_roles1 === void 0 ? void 0 : _userData_roles1.include("ROLE_ADMIN")) ? "/admin" : "/");
            }
        }
    }["RouteGuard.useEffect"], [
        userData,
        userLoading,
        requiredRole
    ]);
    if (userLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/component/RouteGuard.js",
        lineNumber: 27,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(RouteGuard, "5+xDp/9Hp7X8MoewWr4MVeLBOGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"]
    ];
});
_c = RouteGuard;
var _c;
__turbopack_context__.k.register(_c, "RouteGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/order/shippingAddress/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShippingAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/userSide/shippingAddressForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAddressData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useAddressData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/OrderService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$RouteGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/RouteGuard.js [app-client] (ecmascript)");
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
function ShippingAddress() {
    _s();
    const [isMunicipalitySelected, setIsMunicipalitySelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { userData, loadCurrentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    const [shippingAddress, setShippingAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        shippingDistrict: "",
        shippingProvince: "",
        shippingMunicipality: "",
        shippingWardNumber: "",
        shippingLandmark: "",
        houseNumber: "",
        addressType: "HOUSE"
    });
    const [validationErr, setValidationErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [userInfo, setUserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: (userData === null || userData === void 0 ? void 0 : userData.fullName) || "",
        phoneNumber: (userData === null || userData === void 0 ? void 0 : userData.phoneNumber) || ""
    });
    const { province, district, municipality, wards, fetchProvince, selectedAddress, fetchDistrict, fetchMunicipality, addWards, handleSelectedProvince, handleSelectedDistrict } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAddressData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddressData"])();
    const onShippingAddressChange = (e)=>{
        const { name, value } = e.target;
        setShippingAddress((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear error for this field
        if (validationErr[name]) {
            setValidationErr((prev)=>({
                    ...prev,
                    [name]: ""
                }));
        }
        if (name === "shippingProvince") {
            handleSelectedProvince(value);
        } else if (name === "shippingDistrict") {
            handleSelectedDistrict(value);
        } else if (name === "shippingMunicipality") {
            setIsMunicipalitySelected(false);
            addWards(parseInt(value, 10));
        }
    };
    const handleUserDataChange = (e)=>{
        const { name, value } = e.target;
        setUserInfo((prev)=>({
                ...prev,
                [name]: value
            }));
        if (validationErr[name]) {
            setValidationErr((prev)=>({
                    ...prev,
                    [name]: ""
                }));
        }
    };
    const handleDataSubmit = async (e)=>{
        e.preventDefault();
        try {
            console.log("Shipping Address submit...");
            const orderId = localStorage.getItem("orderId");
            console.log("OrderId: ", orderId);
            if (!userData || !orderId) {
                console.error("Missing userData or orderId");
                return;
            }
            const orderRequest = {
                orderId: parseInt(orderId, 10),
                userId: userData.userId,
                fullName: userInfo.fullName,
                phoneNumber: userInfo.phoneNumber,
                shippingAddressDTO: {
                    ...shippingAddress,
                    shippingWardNumber: parseInt(shippingAddress.shippingWardNumber, 10)
                }
            };
            console.log("Sending order request:", orderRequest);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveShippingAddress"])(orderId, userData.userId, orderRequest);
            console.log("Data in handleSubmit: ", data);
            router.push("/order/review");
        } catch (err) {
            console.error("Error submitting form:", err);
            if (err.response) {
                console.error("Error response:", err.response.data);
                if (err.response.status === 400) {
                    const errors = err.response.data;
                    const transformedErrors = {};
                    Object.keys(errors).forEach((key)=>{
                        const newKey = key.replace('shippingAddressDTO.', '');
                        transformedErrors[newKey] = errors[key];
                    });
                    setValidationErr(transformedErrors);
                }
            }
        }
    };
    const handleCancelClick = ()=>{
        const orderId = localStorage.getItem("orderId");
        if (orderId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelOrder"])(orderId).then(()=>{
                localStorage.removeItem("orderId");
                router.push("/cart");
            }).catch((error)=>{
                console.error("Failed to cancel order:", error);
                router.push("/cart");
            });
        } else {
            router.push("/cart");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShippingAddress.useEffect": ()=>{
            fetchProvince();
        }
    }["ShippingAddress.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShippingAddress.useEffect": ()=>{
            if (userData) {
                setUserInfo({
                    fullName: userData.fullName || "",
                    phoneNumber: userData.phoneNumber || ""
                });
            }
        }
    }["ShippingAddress.useEffect"], [
        userData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShippingAddress.useEffect": ()=>{
            if (selectedAddress.provinceId !== null) {
                fetchDistrict(selectedAddress.provinceId);
            }
            if (selectedAddress.districtId !== null) {
                fetchMunicipality(selectedAddress.districtId);
            }
        }
    }["ShippingAddress.useEffect"], [
        selectedAddress.provinceId,
        selectedAddress.districtId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShippingAddress.useEffect": ()=>{
            const fetchCurrentUser = {
                "ShippingAddress.useEffect.fetchCurrentUser": async ()=>{
                    await loadCurrentUser();
                }
            }["ShippingAddress.useEffect.fetchCurrentUser"];
            console.log("Loading current user...");
            fetchCurrentUser();
        }
    }["ShippingAddress.useEffect"], []);
    console.log("UserData: ", userData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$RouteGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteGuard"], {
        requiredRole: 'ROLE_CUSTOMER',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].FormContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Shipping Address"
                        }, void 0, false, {
                            fileName: "[project]/app/order/shippingAddress/page.js",
                            lineNumber: 180,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Select a province for district and municipality"
                        }, void 0, false, {
                            fileName: "[project]/app/order/shippingAddress/page.js",
                            lineNumber: 181,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/order/shippingAddress/page.js",
                    lineNumber: 179,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].FormSection,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        noValidate: true,
                        onSubmit: handleDataSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Form,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "fullName",
                                                children: "Full Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "fullName",
                                                    name: "fullName",
                                                    value: userInfo.fullName,
                                                    onChange: handleUserDataChange,
                                                    placeholder: "Enter full name",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "phoneNumber",
                                                children: "Phone Number *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "phoneNumber",
                                                    name: "phoneNumber",
                                                    value: userInfo.phoneNumber,
                                                    onChange: handleUserDataChange,
                                                    placeholder: "Enter phone number",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 206,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.phoneNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.phoneNumber
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "houseNumber",
                                                children: "House Number"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "houseNumber",
                                                    name: "houseNumber",
                                                    value: shippingAddress.houseNumber,
                                                    onChange: onShippingAddressChange,
                                                    placeholder: "Enter house number"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 223,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 222,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.houseNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.houseNumber
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "shippingLandmark",
                                                children: "Land Mark"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "shippingLandmark",
                                                    name: "shippingLandmark",
                                                    value: shippingAddress.shippingLandmark,
                                                    onChange: onShippingAddressChange,
                                                    type: "text",
                                                    placeholder: "Enter a landmark"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.shippingLandmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.shippingLandmark
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 249,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "shippingProvince",
                                                children: "Province *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "shippingProvince",
                                                    name: "shippingProvince",
                                                    value: shippingAddress.shippingProvince,
                                                    onChange: onShippingAddressChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGroup,
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a province"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 264,
                                                            columnNumber: 19
                                                        }, this),
                                                        province === null || province === void 0 ? void 0 : province.map((prov, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: prov.provinceId,
                                                                children: prov.englishName
                                                            }, index, false, {
                                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                                lineNumber: 266,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 256,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 255,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.shippingProvince && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.shippingProvince
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "shippingDistrict",
                                                children: "District *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "shippingDistrict",
                                                    name: "shippingDistrict",
                                                    value: shippingAddress.shippingDistrict,
                                                    onChange: onShippingAddressChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGroup,
                                                    disabled: selectedAddress.provinceId === null,
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a district"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 289,
                                                            columnNumber: 19
                                                        }, this),
                                                        district === null || district === void 0 ? void 0 : district.map((dist, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: dist.districtId,
                                                                children: dist.englishName
                                                            }, index, false, {
                                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                                lineNumber: 291,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.shippingDistrict && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.shippingDistrict
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 277,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "shippingMunicipality",
                                                children: "Municipality *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "shippingMunicipality",
                                                    name: "shippingMunicipality",
                                                    value: shippingAddress.shippingMunicipality,
                                                    onChange: onShippingAddressChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGroup,
                                                    disabled: selectedAddress.districtId === null,
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select a municipality"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, this),
                                                        municipality === null || municipality === void 0 ? void 0 : municipality.map((muni, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: muni.municipalityId,
                                                                children: muni.englishName
                                                            }, index, false, {
                                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                                lineNumber: 316,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.shippingMunicipality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.shippingMunicipality
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "shippingWardNumber",
                                                children: "Ward Number *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "shippingWardNumber",
                                                    name: "shippingWardNumber",
                                                    value: shippingAddress.shippingWardNumber,
                                                    onChange: onShippingAddressChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGroup,
                                                    disabled: isMunicipalitySelected,
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select ward number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 339,
                                                            columnNumber: 19
                                                        }, this),
                                                        wards === null || wards === void 0 ? void 0 : wards.map((ward, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: ward,
                                                                children: ward
                                                            }, index, false, {
                                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                                lineNumber: 341,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.shippingWardNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.shippingWardNumber
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "addressType",
                                                children: "Address Type *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "addressType",
                                                    name: "addressType",
                                                    value: shippingAddress.addressType,
                                                    onChange: onShippingAddressChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGroup,
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "HOUSE",
                                                            children: "House"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 363,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "APARTMENT",
                                                            children: "Apartment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 364,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "OFFICE",
                                                            children: "Office"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 365,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 354,
                                                columnNumber: 15
                                            }, this),
                                            validationErr.addressType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: validationErr.addressType
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/shippingAddress/page.js",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCancelClick,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                        type: "button",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                        type: "submit",
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/shippingAddress/page.js",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/order/shippingAddress/page.js",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/order/shippingAddress/page.js",
                    lineNumber: 183,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/order/shippingAddress/page.js",
            lineNumber: 178,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/order/shippingAddress/page.js",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(ShippingAddress, "/6xt2wmFq1DvDhpTdsUOSa4/Y8E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAddressData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddressData"]
    ];
});
_c = ShippingAddress;
var _c;
__turbopack_context__.k.register(_c, "ShippingAddress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/clientServices/OrderService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelOrder",
    ()=>cancelOrder,
    "createOrder",
    ()=>createOrder,
    "getOrderDetails",
    ()=>getOrderDetails,
    "saveShippingAddress",
    ()=>saveShippingAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/axiosInterceptor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$order$2f$shippingAddress$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/order/shippingAddress/page.js [app-client] (ecmascript)");
;
;
const createOrder = async (orderRequest)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/order", orderRequest);
        console.log("Response in OrderService: ", response);
        return response.data;
    } catch (err) {
        var _err_response;
        console.log("Error in OrderService: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        throw err;
    }
};
const getOrderDetails = async (orderId, userId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/order/".concat(orderId, "/user/").concat(userId));
        console.log("Response in OrderService:", response);
        return response.data;
    } catch (err) {
        console.log("Error in OrderService: ", err.response.data);
        throw err;
    }
};
const cancelOrder = async (orderId)=>{
    try {
        console.log("Cancelling a order");
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/api/order/".concat(orderId));
        console.log("Response in OrderService: ", response.data);
    } catch (err) {
        var _err_response;
        console.log("Error in OrderService: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        throw err;
    }
};
const saveShippingAddress = async (orderId, userId, order)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/order/".concat(orderId, "/shippingAddress/user/").concat(userId), order);
        console.log("Response in OrderService: ", response);
        return response.data;
    } catch (err) {
        var _err_response;
        console.log("Error in OrderService: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        throw err;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/component/OrderFlowGuard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFlowGuard",
    ()=>OrderFlowGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/OrderService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function OrderFlowGuard(param) {
    let { children } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])(); // current path name
    const previousPathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    const hasCancelledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderFlowGuard.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const orderId = localStorage.getItem('orderId');
            const wasInOrderFlow = previousPathName.current.startsWith("/order");
            const isLeavingOrderFlow = wasInOrderFlow && !pathname.startsWith("/order");
            if (isLeavingOrderFlow && orderId && !hasCancelledRef.current) {
                hasCancelledRef.current = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelOrder"])(orderId).then({
                    "OrderFlowGuard.useEffect": (response)=>{
                        localStorage.removeItem('orderId');
                        console.log("Order cancelled due to navigation");
                    }
                }["OrderFlowGuard.useEffect"]).catch({
                    "OrderFlowGuard.useEffect": (err)=>{
                        console.error("Failed to cancel order: ", err);
                        localStorage.removeItem('orderId');
                    }
                }["OrderFlowGuard.useEffect"]);
            }
            if (pathname.startsWith("/order")) {
                hasCancelledRef.current = false;
            }
            previousPathName.current = pathname;
        }
    }["OrderFlowGuard.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(OrderFlowGuard, "CsCQfE59tn/iEKl8uWSvRtWQ330=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = OrderFlowGuard;
var _c;
__turbopack_context__.k.register(_c, "OrderFlowGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/clientServices/OrderItemService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllOrderItems",
    ()=>fetchAllOrderItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/component/axiosInterceptor.js [app-client] (ecmascript)");
;
const fetchAllOrderItems = async function() {
    let orderItemIds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/orderItem/fetchAllOrderItems", orderItemIds);
        console.log("Response of OrderItemService: ", response);
        return response.data;
    } catch (err) {
        console.log("Error in OrderItemService: ", err.response.data);
        throw err;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/Context/OrderContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderProvider",
    ()=>OrderProvider,
    "useOrderContext",
    ()=>useOrderContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/OrderService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderItemService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/OrderItemService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const OrderContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const OrderProvider = (param)=>{
    let { children } = param;
    _s();
    const [orderData, setOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [shippingAddress, setShippingAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const { userData, loadCurrentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    const [orderItems, setOrderItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchOrderDetails = async ()=>{
        const orderId = localStorage.getItem("orderId");
        const userId = localStorage.getItem("userId");
        try {
            if (!orderId || !userId) {
                console.log("OrderId or userId is missing.");
                return;
            }
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrderDetails"])(orderId, userId);
            setOrderData(data);
        } catch (err) {
            var _err_response;
            console.error("Error in OrderContext: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        }
    };
    const fetchOrderItems = async function() {
        let itemIds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (!itemIds) return;
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderItemService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllOrderItems"])(itemIds);
            setOrderItems(data);
            console.log("Data of orderItems : ", data);
        } catch (err) {
            var _err_response;
            console.log("Error in fetchOrderItems: ", (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrderProvider.useEffect": ()=>{
            var _orderData_orderItemIds;
            if (orderData.shippingAddressDTO) {
                setShippingAddress(orderData.shippingAddressDTO);
            }
            if (orderData.orderItemIds && ((_orderData_orderItemIds = orderData.orderItemIds) === null || _orderData_orderItemIds === void 0 ? void 0 : _orderData_orderItemIds.length) > 0) {
                fetchOrderItems(orderData.orderItemIds);
            }
        }
    }["OrderProvider.useEffect"], [
        orderData
    ]);
    const value = {
        orderData,
        shippingAddress,
        orderItems,
        setOrderItems,
        setShippingAddress,
        setOrderData,
        fetchOrderDetails,
        fetchAllOrderItems: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$OrderItemService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllOrderItems"]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/Context/OrderContext.js",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrderProvider, "ZodqkKUhAWUjUMZs1/aHxiMxELs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"]
    ];
});
_c = OrderProvider;
const useOrderContext = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OrderContext);
    if (!context) {
        throw new Error("useOrderContext must be used within OrderProvider");
    }
    return context;
};
_s1(useOrderContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "OrderProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_bbb90700._.js.map