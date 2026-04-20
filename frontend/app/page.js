"use client";
import { useEffect } from "react";
import Navbar from "./component/Navbar";
import style from "./CSS/mainContent.module.css";
import { RouteGuard } from "./component/RouteGuard";
export default function Home() {
  return (
    <RouteGuard requiredRole="ROLE_CUSTOMER">
      <div>
        <Navbar />
        <div className={style.mainContent}>main page</div>
      </div>
    </RouteGuard>
  );
}
