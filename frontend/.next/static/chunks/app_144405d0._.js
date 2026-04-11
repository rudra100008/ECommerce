(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/CSS/userSide/profile.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionButtons": "profile-module__1fuQea__actionButtons",
  "addAddressButton": "profile-module__1fuQea__addAddressButton",
  "addressFormContainer": "profile-module__1fuQea__addressFormContainer",
  "addressFormGroup": "profile-module__1fuQea__addressFormGroup",
  "addressInfo": "profile-module__1fuQea__addressInfo",
  "addressInfoContainer": "profile-module__1fuQea__addressInfoContainer",
  "addressInfoGroup": "profile-module__1fuQea__addressInfoGroup",
  "addressInfoTitle": "profile-module__1fuQea__addressInfoTitle",
  "addressInput": "profile-module__1fuQea__addressInput",
  "addressTitle": "profile-module__1fuQea__addressTitle",
  "backButton": "profile-module__1fuQea__backButton",
  "cancelAddressButton": "profile-module__1fuQea__cancelAddressButton",
  "cancelButton": "profile-module__1fuQea__cancelButton",
  "deletIcon": "profile-module__1fuQea__deletIcon",
  "deleteButton": "profile-module__1fuQea__deleteButton",
  "deleteIcon": "profile-module__1fuQea__deleteIcon",
  "district": "profile-module__1fuQea__district",
  "editButton": "profile-module__1fuQea__editButton",
  "editIcon": "profile-module__1fuQea__editIcon",
  "email": "profile-module__1fuQea__email",
  "fadeOut": "profile-module__1fuQea__fadeOut",
  "formGroup": "profile-module__1fuQea__formGroup",
  "fullName": "profile-module__1fuQea__fullName",
  "fullNameInput": "profile-module__1fuQea__fullNameInput",
  "landMark": "profile-module__1fuQea__landMark",
  "logoutButton": "profile-module__1fuQea__logoutButton",
  "logoutButtonSection": "profile-module__1fuQea__logoutButtonSection",
  "municipality": "profile-module__1fuQea__municipality",
  "personalInfoGroup": "profile-module__1fuQea__personalInfoGroup",
  "phoneNumber": "profile-module__1fuQea__phoneNumber",
  "plusIcon": "profile-module__1fuQea__plusIcon",
  "profileContainer": "profile-module__1fuQea__profileContainer",
  "profileTitle": "profile-module__1fuQea__profileTitle",
  "province": "profile-module__1fuQea__province",
  "removeImageButton": "profile-module__1fuQea__removeImageButton",
  "removeImageButtonSection": "profile-module__1fuQea__removeImageButtonSection",
  "revertPicButton": "profile-module__1fuQea__revertPicButton",
  "revertPicButtonSection": "profile-module__1fuQea__revertPicButtonSection",
  "saveAddressButton": "profile-module__1fuQea__saveAddressButton",
  "saveButton": "profile-module__1fuQea__saveButton",
  "settingContainer": "profile-module__1fuQea__settingContainer",
  "settingSection": "profile-module__1fuQea__settingSection",
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
"[project]/app/profile/address/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddressForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CSS/userSide/profile.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NavigationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/services/clientServices/AddressService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Context/NotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$RouteGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/RouteGuard.js [app-client] (ecmascript)");
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
function AddressForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { loadCurrentUser, userData, setUserData, userLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    const { success, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"])();
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        district: "",
        province: "",
        municipality: "",
        wardNumber: "",
        landMark: "",
        userId: userData.userId
    });
    const handleAddressChange = (e)=>{
        const { name, value } = e.target;
        setAddress((prev)=>({
                ...prev,
                [name]: name === "wardNumber" ? value ? parseInt(value, 10) : "" : value
            }));
    };
    const submitAddress = async ()=>{
        try {
            const addressDTO = {
                district: address.district.trim(),
                province: address.province.trim(),
                municipality: address.municipality.trim(),
                wardNumber: parseInt(address.wardNumber, 10),
                landmark: address.landMark.trim(),
                userId: userData.userId
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$services$2f$clientServices$2f$AddressService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAddress"])(addressDTO);
            console.log("Response of sendAddress", response);
            success("Address added success.");
            setAddress({
                district: "",
                province: "",
                municipality: "",
                wardNumber: "",
                landMark: "",
                userId: userData.userId
            });
            setTimeout(()=>{
                router.push("/profile");
                clear();
            }, 2000);
        } catch (err) {
            console.log("error in handleAddAddress", err.response.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddressForm.useEffect": ()=>{
            loadCurrentUser();
        }
    }["AddressForm.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$RouteGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouteGuard"], {
        requiredRole: "ROLE_CUSTOMER",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressFormContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Address Form"
                    }, void 0, false, {
                        fileName: "[project]/app/profile/address/page.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/profile/address/page.js",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addressFormGroup,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "district",
                                    children: "District"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "district",
                                    id: "district",
                                    value: address.district,
                                    onChange: handleAddressChange,
                                    placeholder: "Enter district"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/address/page.js",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "province",
                                    children: "Province"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "province",
                                    id: "province",
                                    value: address.province,
                                    onChange: handleAddressChange,
                                    placeholder: "Enter a province"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/address/page.js",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "municipality",
                                    children: "Municipality"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "municipality",
                                    id: "municipality",
                                    value: address.municipality,
                                    onChange: handleAddressChange,
                                    placeholder: "Enter municipality name"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/address/page.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "wardNumber",
                                    children: "Ward Number"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    name: "wardNumber",
                                    id: "wardNumber",
                                    value: address.wardNumber,
                                    onChange: handleAddressChange,
                                    placeholder: "Enter ward number",
                                    min: "1",
                                    max: "35"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/address/page.js",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "landMark",
                                    children: "LandMark"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "landMark",
                                    id: "landMark",
                                    value: address.landMark,
                                    onChange: handleAddressChange,
                                    placeholder: "Enter a landMark"
                                }, void 0, false, {
                                    fileName: "[project]/app/profile/address/page.js",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/profile/address/page.js",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: submitAddress,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$profile$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            children: "Add Address"
                        }, void 0, false, {
                            fileName: "[project]/app/profile/address/page.js",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/profile/address/page.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/profile/address/page.js",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/profile/address/page.js",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(AddressForm, "9FF2ojY+RRBS4rap0Xyj9RuXHQQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NavigationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Context$2f$NotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotification"]
    ];
});
_c = AddressForm;
var _c;
__turbopack_context__.k.register(_c, "AddressForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_144405d0._.js.map