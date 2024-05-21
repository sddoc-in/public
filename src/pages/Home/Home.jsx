import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-full h-screen flex '>
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
            <div className='rounded shadow z-50 w-[70%]'>
                <h1>
                    How Does it Works
                    <Outlet />
                </h1>
            </div>
        </div>
    )
}

export default Home
