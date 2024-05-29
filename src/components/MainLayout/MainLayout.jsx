import React from 'react';
import SideNavbar from '../SideNavbar/SideNavbar';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <div className="box-content bg-[#F7F7F8] w-full h-screen flex flex-col md:flex-row">
                {/* SideNavbar: Hidden on small screens, visible on md and up */}
                <div className='w-full md:w-1/5 h-full hidden md:block'>
                    <SideNavbar />
                </div>

                <div className="w-full md:w-4/5 flex-1">
                    <Navbar />
                    <div className="relative">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainLayout;
