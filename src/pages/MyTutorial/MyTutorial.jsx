import React from 'react';
import Card from '../../components/Card/Card.jsx';

const MyTutorial = () => {
    return (
        <div className='m-2'>
            <div className='flex justify-around p-2 rounded-xl w-full md:w-[30%] mx-auto border border-[#0957F9]'>
                <button className="px-3 py-1 rounded-xl focus:text-white focus:bg-[#0957F9]">
                    Private Tutorials
                </button>
                <button className="px-3 py-1 rounded-xl focus:text-white focus:bg-[#0957F9]">
                    Public Tutorials
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
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
    );
}

export default MyTutorial;
