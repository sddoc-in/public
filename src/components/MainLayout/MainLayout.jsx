import React from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <div className="box-content bg-[#F7F7F8] w-full h-screen flex ">
                <div className='w-1/5 h-[100%] '>
                    <SideNavbar />
                </div>

                <div className="w-4/5 ">
                    <Navbar />
                    <div className=" -fixed">
                        <Outlet />
                    </div >
                </div>
            </div>

        </>
    )
}

export default MainLayout;