'use client'
import { useState } from "react"
import AdminNavbar from "../AdminComponent/AdminNavbar"
import AdminSideNavbar from "../AdminComponent/AdminSideNavbar"
import style from '../CSS/adminNavbar/adminPage.module.css'
import Dashboard from "../AdminComponent/Dashboard"
import Product from "../AdminComponent/Product"
import Profile from "../AdminComponent/Profile"
export default function AdminPage() {
    const [isSideBarOpen,setIsSideBarOpen] = useState(false);
    const [itemClicked,setItemClicked] = useState('');

    const toggleSideBar = () =>{
        console.log("SideBarOpen: ",isSideBarOpen)
        setIsSideBarOpen(prev=> !prev);
    }
    return (
        <div className={style.adminLayout}>
            <AdminNavbar showSideBar={toggleSideBar} />
            <div className={style.adminContent}>
                <AdminSideNavbar isSideBarOpen={isSideBarOpen} setItemClicked={setItemClicked} />
                <main className={style.mainContent}>
                    {/* Your page content goes here */}
                    <div className={style.pageContent}>
                        {
                            itemClicked === 'dashboard' &&
                            <Dashboard />
                        }
                        {
                            itemClicked === 'product' &&
                            <Product />
                        }
                        {
                            itemClicked === 'profile' &&
                            <Profile />
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}