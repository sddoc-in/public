import React from 'react'
import { PiFilePdfLight } from "react-icons/pi";


const card = () => {
    return (
        <div className='shadow rounded z-50  m-2 p-2 w-[200px] '>
            <span className='text-[#0957F9]'>

                <PiFilePdfLight className='teex-blue-300' />
            </span>
            <span className=' w-full'>Oracle Platform Tutorial</span>
            <p className='text-gray-500'>24/12/2024</p>
            <div className='flex justify-end '>
                <img className='mx-2 my-2 h-6' src="Vector4.png" alt="" />
                <img className='mx-2 my-2 h-6' src="Trash.png" alt="" />
            </div>

        </div>
    )
}

export default card
