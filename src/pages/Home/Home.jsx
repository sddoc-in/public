import React from 'react'
// import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-screen flex'>
            <div className='w-[25%] m-4  p-4 flex flex-col rounded shadow z-50'>
                <h1 className='font-bold'>Select your Core & New Platform and describe your features</h1>
                <form action="">
                    <div className='flex flex-col justify-center items-center w-[80%]'>
                        <label className='block w-full font-semibold' htmlFor="">Core Platform</label>
                        <select className='w-full block ' name="" id="">
                            <option >Select Your Core Platform</option>
                            <option value="Oracle">Oracle</option>
                            <option value="Oracle">Oracle</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[80%]'>
                        <label className='block w-full font-semibold' htmlFor="">New Platform</label>
                        <select className='w-full block shadow rounded' name="" id="">
                            <option >Select New Platform</option>
                            <option value="Oracle">Oracle</option>
                            <option value="Oracle">Oracle</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[80%]'>
                        <label className='block w-full font-semibold' htmlFor="">Select Features</label>
                        <select className='w-full block shadow rounded' name="" id="">
                            <option >Select Features</option>
                            <option value="Oracle">Oracle</option>
                            <option value="Oracle">Oracle</option>
                        </select>
                    </div>

                </form>
                <button className='order-last'>Generate</button>

            </div>
            <div className='rounded shadow z-50 w-[70%] '>
                <h1 className='text-center text-3xl mt-10'>How Does it Works</h1>
                <div className='grid grid-cols-2 gap-4 mx-16 justify-center items-center mt-8'>
                    <div className='shadow w-64 h-56 text-center rounded-2xl bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] p-4'>
                        <div className='flex justify-center'>
                            <div className='text-2xl flex items-center justify-center rounded-full bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] w-12 h-12 shadow'>
                                1
                            </div>
                        </div>
                        <p className='text-2xl font-semibold mt-4'>Select Core Platform</p>
                        <p className='text-sm mt-2'>Choose the database platform on which you are most knowledgeable.</p>
                    </div>
                    <div className='shadow w-64 h-56 text-center rounded-2xl bg-gradient-to-tr from-[#F5A7C4] to-[#F5A7C4] p-4'>
                        <div className='flex justify-center'>
                            <div className='text-2xl flex items-center justify-center rounded-full bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] w-12 h-12 shadow'>
                                1
                            </div>
                        </div>
                        <p className='text-2xl font-semibold mt-4'>Select Core Platform</p>
                        <p className='text-sm mt-2'>Choose the database platform on which you are most knowledgeable.</p>
                    </div>
                    <div className='shadow w-64 h-56 text-center rounded-2xl bg-gradient-to-tr from-[#0957F9] to-[#0957F9] p-4'>
                        <div className='flex justify-center'>
                            <div className='text-2xl flex items-center justify-center rounded-full bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] w-12 h-12 shadow'>
                                1
                            </div>
                        </div>
                        <p className='text-2xl font-semibold mt-4'>Select Core Platform</p>
                        <p className='text-sm mt-2'>Choose the database platform on which you are most knowledgeable.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
