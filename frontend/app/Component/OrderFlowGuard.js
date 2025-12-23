'use client'

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react";
import { cancelOrder } from "../services/clientServices/OrderService";


export function OrderFlowGuard ({children}) {
    const pathname = usePathname(); // current path name
    const previousPathName = useRef(pathname);
    const hasCancelledRef = useRef(false);

    useEffect(()=>{
         if (typeof window === 'undefined') return;

        const orderId = localStorage.getItem('orderId')
        const wasInOrderFlow = previousPathName.current.startsWith("/order");
        const isLeavingOrderFlow = wasInOrderFlow && !pathname.startsWith("/order");

        if(isLeavingOrderFlow && orderId && !hasCancelledRef.current){
            hasCancelledRef.current = true;
            cancelOrder(orderId).then((response)=>{
                localStorage.removeItem('orderId')
                console.log("Order cancelled due to navigation")
            }).catch((err)=>{
                console.error("Failed to cancel order: ",err);
                localStorage.removeItem('orderId');
            })
        }

        if(pathname.startsWith("/order")){
            hasCancelledRef.current = false;
        }
        previousPathName.current = pathname;
    },[pathname])
    return <>{children}</>
}