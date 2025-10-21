import { useEffect, useState } from "react"
import api from "./axiosInterceptor";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function GetProductImage({ imageUrl }) {
    const [loading, setLoading] = useState(false);
    const [image,setImage] = useState("");
    const GetProductImage = async () => {
        setLoading(true);
        try {
            const response = await api.get(imageUrl, {
                responseType: 'blob'
            })
            console.log("Response in GetProductImage: ", response);
            const createImageUrl = URL.createObjectURL(response.data);
            setImage(createImageUrl);
        } catch (error) {
            console.log("Error in GetProductImage: ", error.response?.data);
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        GetProductImage();
    }, [imageUrl])
    return (
        <div>
            {
                image &&
                (
                    <div>
                        <Image
                        src={image}
                        width={400}
                        height={100}
                        alt="ProductImage"
                        />
                    </div>
                )
            }
        </div>
    )
}