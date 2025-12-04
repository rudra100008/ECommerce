"use client";
import { useEffect, useState } from "react";
import AdminNavbar from "../AdminComponent/AdminNavbar";
import AdminSideNavbar from "../AdminComponent/AdminSideNavbar";
import style from "../CSS/adminNavbar/adminPage.module.css";
import Dashboard from "../AdminComponent/Dashboard";
import Product from "../AdminComponent/Product";
import Profile from "../AdminComponent/Profile";
import { RouteGuard } from "../Component/RouteGuard";

export default function AdminPage() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [itemClicked, setItemClicked] = useState("");

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (itemClicked) {
      localStorage.setItem("adminSelectedTab", itemClicked);
    }
  }, [itemClicked]);

  useEffect(() => {
    const selectedTab = localStorage.getItem("adminSelectedTab");
    if (selectedTab) {
      setItemClicked(selectedTab);
    } else {
      setItemClicked("dashboard");
    }
  }, []);

  return (
    <RouteGuard requiredRole="ROLE_ADMIN">
      <div className={style.adminLayout}>
        <AdminSideNavbar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          setItemClicked={setItemClicked}
          itemClicked={itemClicked}
        />
        {/* Apply dynamic class to adminContent */}
        <div
          className={`${style.adminContent} ${
            !isSideBarOpen ? style.sidebarClosed : ""
          }`}
        >
          <AdminNavbar
            showSideBar={toggleSideBar}
            isSideBarOpen={isSideBarOpen}
          />
          <main className={style.mainContent}>
            <div className={style.pageContent}>
              {itemClicked === "dashboard" && <Dashboard />}
              {itemClicked === "product" && <Product />}
              {itemClicked === "profile" && <Profile />}
            </div>
          </main>
        </div>
      </div>
    </RouteGuard>
  );
}
