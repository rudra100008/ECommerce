(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/CSS/userSide/shippingAddressForm.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Form": "shippingAddressForm-module__5kppgW__Form",
  "FormContainer": "shippingAddressForm-module__5kppgW__FormContainer",
  "FormSection": "shippingAddressForm-module__5kppgW__FormSection",
  "error": "shippingAddressForm-module__5kppgW__error",
  "inputGroup": "shippingAddressForm-module__5kppgW__inputGroup",
  "inputSection": "shippingAddressForm-module__5kppgW__inputSection",
  "selectGroup": "shippingAddressForm-module__5kppgW__selectGroup",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Component/axiosInterceptor.js [app-client] (ecmascript)");
;
const fetchAllAddressesOfUser = async (userId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/user/".concat(userId));
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/address/addAddress", addressDTO);
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/api/address/".concat(addressId, "/user/").concat(userId));
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put('/api/address/updateAddress', address);
        console.log("Response in AddressService:", response.data);
        return response.data;
    } catch (err) {
        console.log("Error in AddressService:", err.response.data);
    }
};
const getProvinces = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/province");
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/district/".concat(provinceId));
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Component$2f$axiosInterceptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/address/municipality/".concat(districtId));
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ShippingAddress() {
    _s();
    const [shippingAddress, setShippingAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        shippingDistrict: "",
        shippingProvince: "",
        shippingMunicipality: "",
        shippingWardNumber: "",
        shippingLandmark: "",
        houseNumber: "",
        addressType: ""
    });
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        phoneNumber: ""
    });
    const { province, district, municipality, wards, fetchProvince, selectedAddress, fetchDistrict, fetchMunicipality, addWards, handleSelectedProvince, handleSelectedDistrict } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAddressData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAddressData"])();
    const onShippingAddressChange = (e)=>{
        const { name, value } = e.target;
        console.log("Name: ", name, "value: ", value);
        setShippingAddress((prev)=>({
                ...prev,
                [name]: value
            }));
        if (name === "shippingProvince") {
            handleSelectedProvince(value);
        } else if (name === "shippingDistrict") {
            handleSelectedDistrict(value);
        } else if (name === "shippingMunicipality") {
            addWards(parseInt(value, 10));
        }
    };
    const handleUserDataChange = (e)=>{
        const { name, value } = e.target;
        setUserData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleDataSubmit = ()=>{};
    const handleCancelClick = ()=>{};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShippingAddress.useEffect": ()=>{
            fetchProvince();
        }
    }["ShippingAddress.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].FormContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Shipping Address"
                    }, void 0, false, {
                        fileName: "[project]/app/order/shippingAddress/page.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Select a province for district and municipality"
                    }, void 0, false, {
                        fileName: "[project]/app/order/shippingAddress/page.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/order/shippingAddress/page.js",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].FormSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleDataSubmit,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Form,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inpputSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "fullName",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "fullName",
                                                name: "fullName",
                                                value: userData.fullName,
                                                onChange: handleUserDataChange,
                                                placeholder: "Enter a full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "phoneNumber",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "phoneNumber",
                                                name: "phoneNumber",
                                                value: userData.phoneNumber,
                                                onChange: handleUserDataChange,
                                                placeholder: "Enter phone number"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 94,
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
                                            lineNumber: 108,
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
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "",
                                            children: "Land Mark"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 121,
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
                                                placeholder: "Enter a  land mark"
                                            }, void 0, false, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "",
                                            children: "Province"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 135,
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a province"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    province && province.length > 0 && province.map((province, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: province.provinceId,
                                                            children: province.englishName
                                                        }, index, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "District"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "shippingDistrict",
                                                name: "shippingDistrict",
                                                value: shippingAddress.shippingDistrict,
                                                onChange: onShippingAddressChange,
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGroup),
                                                disabled: selectedAddress.provinceId === null,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a district"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    district && district.length > 0 && district.map((district, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: district.districtId,
                                                            children: district.englishName
                                                        }, index, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "",
                                            children: "Municipality"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputGroup,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "shippingMunicipality",
                                                name: "shippingMunicipality",
                                                value: shippingAddress.shippingMunicipality,
                                                onChange: onShippingAddressChange,
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGroup),
                                                disabled: selectedAddress.districtId === null,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a municipality"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    municipality && municipality.length > 0 && municipality.map((municipality, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: municipality.municipalityId,
                                                            children: municipality.englishName
                                                        }, index, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 194,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputSection,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "",
                                            children: "Ward number"
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 203,
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select a wardNumber"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "6",
                                                        children: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                                        lineNumber: 213,
                                                        columnNumber: 19
                                                    }, this),
                                                    wards && wards.length > 0 && wards.map((ward, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: ward,
                                                            children: ward
                                                        }, index, false, {
                                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                                            lineNumber: 217,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/order/shippingAddress/page.js",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/order/shippingAddress/page.js",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/order/shippingAddress/page.js",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/order/shippingAddress/page.js",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionGroup,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCancelClick,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelButton,
                                        type: "button",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CSS$2f$userSide$2f$shippingAddressForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                        type: "submit",
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/order/shippingAddress/page.js",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/order/shippingAddress/page.js",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/order/shippingAddress/page.js",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/order/shippingAddress/page.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/order/shippingAddress/page.js",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/order/shippingAddress/page.js",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(ShippingAddress, "NqwSgP/3f+xTMzFuhYmagZJQ/Zw=", false, function() {
    return [
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
]);

//# sourceMappingURL=app_6397953f._.js.map