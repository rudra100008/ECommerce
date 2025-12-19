import { useState } from "react"
import { getDistricts, getMunicipalities, getProvinces, } from './../services/clientServices/AddressService';

export const useAddressData = ()=>{
    const [province,setProvince] = useState([]);
    const [district,setDistrict] = useState([]);
    const [municipality,setMunicipality] = useState([]);
    const [wards,setWards] = useState([])
    const [selectedAddress,setSelectedAddress] = useState({
        provinceId:null,
        districtId: null
    })

    const fetchProvince = async ()=>{
        try{
            const data = await getProvinces();
            setProvince(data);
        }catch(err){
            console.log("Error in fetchProvince: ",err.response.data);
        }
    }

    const fetchDistrict = async(provinceId)=>{
        try{
            const data =  await getDistricts(provinceId);
            setDistrict(data);
        }catch(err){
            console.log("Error in fetchDistrict:",err.response.data);
        }
    }

    const fetchMunicipality = async(districtId) => {
        try{
            const data = await getMunicipalities(districtId);
            setMunicipality(data);
        }catch(err){
            console.log("Error in fetchMunicipality: ",err.response.data);
        }
    }

    const handleSelectedProvince = (id) =>{
        setSelectedAddress(prev => ({...prev,provinceId:id}))
    }

    const handleSelectedDistrict = (id)=>{
        setSelectedAddress(prev => ({...prev,districtId:id}))
    }
    const addWards = (id = null) =>{
        if(id === null) return;
        const municipalityWards = municipality.find((mun)=> mun.municipalityId === id);
        if(municipalityWards){
            const wardsArray = [];
            for(let i = 1; i<= municipalityWards.wards;i++){
                wardsArray.push(i);
            } 
            setWards(wardsArray);
        }
    }

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
        addWards,

    }
}