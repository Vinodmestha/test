"use client"

import { useState } from "react";
import Navbar from "./container/Navbar";

export default function MainLayout({ children }) {
    // const [isLogin, setIsLogin]=useState(false)
    return (
        <>
        {/* {isLogin ? */}
        <>
            <Navbar/>
            <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">

                <div className="flex-grow">
                    <main className="my-0 py-16">{children}</main>
                </div>
                <footer>Dashboard Footer section</footer>
            </div>
            </>
            {/* :
            <button onClick={()=>{
                setIsLogin(true)
            }}>Login here</button>
            // <Auth/>
        } */}
        </>
    );
}