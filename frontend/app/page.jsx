"use client";
import { useEffect } from "react";
import Navbar from "./Component/Navbar";
import style from "./CSS/mainContent.module.css";
import { useRouter } from "next/navigation";
import { RouteGuard } from "./Component/RouteGuard";
export default function Home() {
  const router = useRouter();
  return (
    <RouteGuard requiredRole="ROLE_CUSTOMER">
      <div>
        <Navbar />
        <div className={style.mainContent}>main page</div>
      </div>
    </RouteGuard>
  );
}
