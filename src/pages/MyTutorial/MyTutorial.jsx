import React from 'react'
import Card from '../../components/Card/Card.jsx'
const MyTutorial = () => {
    return (
        <div className='m-2'>
            <div className='flex justify-around p-2  rounded-xl w-[30%] border-1 border-[#0957F9]'>
                <button className="px-3 py-1 rounded-xl  focus:text-white focus:bg-[#0957F9]  ">
                    Private Tutorials
                </button>
                <button className="px-3 py-1  rounded-xl focus:text-white focus:bg-[#0957F9] ">
                    Public Tutorials
                </button>
            </div>
            <div className=' grid-cols-4 grid '>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default MyTutorial
