import React from 'react';

const Home = () => {
    return (
        <div className='w-full h-screen flex flex-col md:flex-row'>
            <div className='w-full md:w-[25%] m-4 p-4 flex flex-col rounded shadow z-50'>
                <h1 className='font-bold mb-4'>Select your Core & New Platform and describe your features</h1>
                <form className='space-y-4'>
                    <div className='flex flex-col w-full'>
                        <label className='block font-semibold' htmlFor="core-platform">Core Platform</label>
                        <select className='w-full block shadow rounded' name="core-platform" id="core-platform">
                            <option>Select Your Core Platform</option>
                            <option value="Oracle">Oracle</option>
                            <option value="MySQL">MySQL</option>
                            <option value="PostgreSQL">PostgreSQL</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='block font-semibold' htmlFor="new-platform">New Platform</label>
                        <select className='w-full block shadow rounded' name="new-platform" id="new-platform">
                            <option>Select New Platform</option>
                            <option value="Oracle">Oracle</option>
                            <option value="MySQL">MySQL</option>
                            <option value="PostgreSQL">PostgreSQL</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label className='block font-semibold' htmlFor="features">Select Features</label>
                        <select className='w-full block shadow rounded' name="features" id="features">
                            <option>Select Features</option>
                            <option value="Feature1">Feature 1</option>
                            <option value="Feature2">Feature 2</option>
                            <option value="Feature3">Feature 3</option>
                        </select>
                    </div>
                    <button className='bg-blue-600 text-white py-2 px-4 rounded mt-4'>Generate</button>
                </form>
            </div>
            <div className='rounded shadow z-50 w-full md:w-[70%] p-4'>
                <h1 className='text-center text-3xl mt-4 md:mt-10'>How It Works</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols- gap-4 mx-4 md:mx-16 mt-8'>
                    <div className='shadow w-full h-56 text-center rounded-2xl bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] p-4'>
                        <div className='flex justify-center'>
                            <div className='text-2xl flex items-center justify-center rounded-full bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] w-12 h-12 shadow'>
                                1
                            </div>
                        </div>
                        <p className='text-2xl font-semibold mt-4'>Select Core Platform</p>
                        <p className='text-sm mt-2'>Choose the database platform on which you are most knowledgeable.</p>
                    </div>
                    <div className='shadow w-full h-56 text-center rounded-2xl bg-gradient-to-tr from-[#F5A7C4] to-[#F5A7C4] p-4'>
                        <div className='flex justify-center'>
                            <div className='text-2xl flex items-center justify-center rounded-full bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] w-12 h-12 shadow'>
                                2
                            </div>
                        </div>
                        <p className='text-2xl font-semibold mt-4'>Select New Platform</p>
                        <p className='text-sm mt-2'>Choose the new platform you want to migrate to or integrate with.</p>
                    </div>
                    <div className='shadow w-full h-56 text-center rounded-2xl bg-gradient-to-tr from-[#0957F9] to-[#0957F9] p-4'>
                        <div className='flex justify-center'>
                            <div className='text-2xl flex items-center justify-center rounded-full bg-gradient-to-tr from-[#C1A6F3] to-[#D9C4F3] w-12 h-12 shadow'>
                                3
                            </div>
                        </div>
                        <p className='text-2xl font-semibold mt-4'>Select Features</p>
                        <p className='text-sm mt-2'>Pick the features you need for the new platform or migration.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
