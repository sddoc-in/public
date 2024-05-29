import React from 'react'
import { Link } from 'react-router-dom'
import { BsStars } from "react-icons/bs";
import { PiFilePdfLight } from "react-icons/pi";

const SideNavbar = () => {
  return (
    <div className='flex flex-col justify-between items-center bg-white h-screen shadow z-50'>
      <div className='w-full flex flex-col items-center space-y-2'>
        <div className='h-[100px] flex items-center'>
          <span className='font-black text-[#0957F9] '>LOGO</span>
        </div>
        <Link to='/' className="p-4 py-2 rounded-xl block focus:text-white focus:bg-[#0957F9] w-[90%] sm:w-auto">
          <BsStars className='inline mr-2' />
          Prompt Generation
        </Link>
        <Link to='/tutorial' className="p-4 py-2 rounded-xl block focus:text-white focus:bg-[#0957F9] w-[90%] sm:w-auto">
          <PiFilePdfLight className='inline mr-2' />
          My tutorials
        </Link>
        <Link to='/Generate' className="p-4 py-2 rounded-xl block focus:text-white focus:bg-[#0957F9] w-[90%] sm:w-auto">
          Page 1
        </Link>
        <Link to='/tutorial1' className="p-4 py-2 rounded-xl block focus:text-white focus:bg-[#0957F9] w-[90%] sm:w-auto">
          Page 2
        </Link>
        <Link to='/tutorial2' className="p-4 py-2 rounded-xl block focus:text-white focus:bg-[#0957F9] w-[90%] sm:w-auto">
          Page 3
        </Link>
      </div>
      <div className='order-last flex flex-col justify-center items-center w-[80%] sm:w-[60%] h-[180px] bg-[#0957F9] text-white rounded-3xl mb-4'>
        <div className='p-1 bg-white rounded-full h-auto -mt-[40%]'>
          <div className='bg-[#0957F9] h-50 rounded-full shadow-xl p-1'><img src="fxemoji_rocket.png" alt="gg" /></div>
        </div>
        <span className='font-bold'>Upgrade Your Plan</span>
        <span>Upgrade your free plan</span>
        <span>to KDBA Pro</span>
        <button className='bg-[#0957F9] rounded outline-white'>Upgrade Plan</button>
      </div>
    </div>
  )
}

export default SideNavbar
