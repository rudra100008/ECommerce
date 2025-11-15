module.exports = [
"[project]/app/CSS/userSide/profile.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButtons": "profile-module__1fuQea__actionButtons",
  "addAddressButton": "profile-module__1fuQea__addAddressButton",
  "addressFormContainer": "profile-module__1fuQea__addressFormContainer",
  "addressFormGroup": "profile-module__1fuQea__addressFormGroup",
  "addressInfo": "profile-module__1fuQea__addressInfo",
  "addressInfoContainer": "profile-module__1fuQea__addressInfoContainer",
  "addressInfoGroup": "profile-module__1fuQea__addressInfoGroup",
  "addressInfoTitle": "profile-module__1fuQea__addressInfoTitle",
  "addressTitle": "profile-module__1fuQea__addressTitle",
  "backButton": "profile-module__1fuQea__backButton",
  "cancelButton": "profile-module__1fuQea__cancelButton",
  "district": "profile-module__1fuQea__district",
  "editButton": "profile-module__1fuQea__editButton",
  "editIcon": "profile-module__1fuQea__editIcon",
  "email": "profile-module__1fuQea__email",
  "fadeOut": "profile-module__1fuQea__fadeOut",
  "formGroup": "profile-module__1fuQea__formGroup",
  "fullName": "profile-module__1fuQea__fullName",
  "fullNameInput": "profile-module__1fuQea__fullNameInput",
  "landMark": "profile-module__1fuQea__landMark",
  "municipality": "profile-module__1fuQea__municipality",
  "personalInfoGroup": "profile-module__1fuQea__personalInfoGroup",
  "phoneNumber": "profile-module__1fuQea__phoneNumber",
  "plusIcon": "profile-module__1fuQea__plusIcon",
  "profileContainer": "profile-module__1fuQea__profileContainer",
  "profileTitle": "profile-module__1fuQea__profileTitle",
  "province": "profile-module__1fuQea__province",
  "saveButton": "profile-module__1fuQea__saveButton",
  "show": "profile-module__1fuQea__show",
  "submitButton": "profile-module__1fuQea__submitButton",
  "title": "profile-module__1fuQea__title",
  "uploadIcon": "profile-module__1fuQea__uploadIcon",
  "userImage": "profile-module__1fuQea__userImage",
  "userImageContainer": "profile-module__1fuQea__userImageContainer",
  "userImageDiv": "profile-module__1fuQea__userImageDiv",
  "userName": "profile-module__1fuQea__userName",
  "userProfileContainer": "profile-module__1fuQea__userProfileContainer",
  "wardNumber": "profile-module__1fuQea__wardNumber",
});
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/services/clientServices/AddressService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addAddress",
    ()=>addAddress,
    "fetchAllAddressesOfUser",
    ()=>fetchAllAddressesOfUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-ssr] (ecmascript)");
;
const fetchAllAddressesOfUser = async (userId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/api/address/user/${userId}`);
        console.log("Response of fetchAllAddressesOfUser: ", response);
        return response.data;
    } catch (err) {
        console.log("error in AddressService: ", err.response.data);
        throw err;
    }
};
const addAddress = async (addressDTO = {})=>{
    try {
        const respsone = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/api/address/addAddress", addressDTO);
        console.log("Response of addAddress: ", respsone);
        return respsone.data;
    } catch (err) {
        console.log("error in AddressService: ", err.response.data);
        throw err;
    }
};
}),
"[project]/app/profile/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/userSide/profile.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faPen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/faPen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/AddressService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faUpload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/faUpload.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/faCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faTimes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/faTimes.js [app-ssr] (ecmascript)");
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
;
;
;
;
;
function Profile() {
    const { loadCurrentUser, userData, setUserData, userLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isEditImageButton, setIsEditImageButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        addressId: null,
        district: '',
        province: '',
        municipality: '',
        wardNumber: null,
        landMark: '',
        userId: userData.userId
    });
    const handleBackClick = ()=>{
        router.push("/");
    };
    const handleIconClick = ()=>{
        fileInputRef.current.click();
    };
    const handleFileChange = (event)=>{
        const file = event.target.files[0];
        if (file) {
            console.log("File: ", file);
        }
    };
    const handleImageEditButton = ()=>{
        setIsEditImageButton((prev)=>!prev);
    };
    const handleSaveChanges = ()=>{};
    const handleCancelEdit = ()=>{};
    const handleEditButton = ()=>{};
    const fetchAllAddresses = async ()=>{
        try {
            const addresses = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAllAddressesOfUser"])(parseInt(userData.userId, 10));
            setUserData((prev)=>({
                    ...prev,
                    addresses: addresses
                }));
        } catch (err) {
            console.log("error in fetchAllAddresses: ", err.response.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCurrentUser();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userData.userId) {
            fetchAllAddresses();
        }
    }, [
        userData.userId
    ]);
    console.log("User: ", userData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleBackClick,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                    }, void 0, false, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    "Back To Home"
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.js",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "My Profile"
                }, void 0, false, {
                    fileName: "[project]/app/profile/page.js",
                    lineNumber: 84,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/profile/page.js",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userImageContainer,
                children: [
                    userData.profileImageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userImageDiv,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: userData.profileImageUrl,
                                alt: userData.username,
                                width: 80,
                                height: 80,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userImage
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                onChange: handleFileChange,
                                accept: "image/*",
                                style: {
                                    display: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                onClick: handleIconClick,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadIcon} ${isEditImageButton ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].show : ''}`,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faUpload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faUpload"]
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 105,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fullName,
                        children: [
                            !isEditImageButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: isEditImageButton ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeOut : '',
                                children: userData.fullName || 'No full name'
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "fullName",
                                id: "fullName",
                                value: fullName,
                                onChange: (e)=>setFullName(e.target.value),
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fullNameInput} ${isEditImageButton ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].show : ''}`,
                                placeholder: "Enter full name"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    !isEditImageButton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleImageEditButton,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editIcon,
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faPen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPen"]
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 133,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actionButtons} ${isEditImageButton ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].show : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSaveChanges,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCheck"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.js",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    "Save"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCancelEdit,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faTimes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTimes"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.js",
                                        lineNumber: 142,
                                        columnNumber: 29
                                    }, this),
                                    "Cancel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 136,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.js",
                lineNumber: 88,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userProfileContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileTitle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "My Personal Information"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 150,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: handleEditButton,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.js",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faPen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPen"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.js",
                                        lineNumber: 153,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 149,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].personalInfoGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userName,
                                children: userData.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Username:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 161,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: userData.username
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 162,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.js",
                                    lineNumber: 160,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].email,
                                children: userData.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Email:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 171,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: userData.email
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 172,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.js",
                                    lineNumber: 170,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].phoneNumber,
                                children: userData.phoneNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Phone Number:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 181,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: userData.phoneNumber
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 182,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.js",
                                    lineNumber: 180,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Phone Number:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 186,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 187,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.js",
                                    lineNumber: 185,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.js",
                lineNumber: 148,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addressInfoContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addressInfoTitle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "My Address Information"
                            }, void 0, false, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 197,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/profile/address",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addAddressButton,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Add Address"
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.js",
                                        lineNumber: 199,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].plusIcon,
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPlus"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/profile/page.js",
                                        lineNumber: 200,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/profile/page.js",
                                lineNumber: 198,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/profile/page.js",
                        lineNumber: 196,
                        columnNumber: 17
                    }, this),
                    userData.addresses && userData.addresses.map((address, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addressInfoGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addressTitle,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Address ",
                                                index + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 208,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: handleEditButton,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editButton,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.js",
                                                    lineNumber: 210,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editIcon,
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$faPen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPen"]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/profile/page.js",
                                                    lineNumber: 211,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 209,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.js",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].addressInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].district,
                                            children: address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "District"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 219,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: address.district
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 220,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.js",
                                                lineNumber: 218,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 215,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].province,
                                            children: address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Province"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 230,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: address.province
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 231,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.js",
                                                lineNumber: 229,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 226,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].municipality,
                                            children: address.municipality && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Municipality"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 240,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: address.municipality
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 241,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.js",
                                                lineNumber: 239,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 236,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wardNumber,
                                            children: address.wardNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Ward number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 250,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: address.wardNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 251,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.js",
                                                lineNumber: 249,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 246,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].landMark,
                                            children: address.landmark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "LandMark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 260,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: address.landmark
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/profile/page.js",
                                                        lineNumber: 261,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/profile/page.js",
                                                lineNumber: 259,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/profile/page.js",
                                            lineNumber: 256,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/profile/page.js",
                                    lineNumber: 214,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/profile/page.js",
                            lineNumber: 206,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/profile/page.js",
                lineNumber: 195,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/profile/page.js",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ac19ee6._.js.map