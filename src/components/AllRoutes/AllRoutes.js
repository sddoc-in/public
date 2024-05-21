import React from 'react'
import {Routes, Route } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Home from '../../pages/Home/Home'
import MyTutorial from '../../pages/MyTutorial/MyTutorial'


const AllRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path='/tutorial' element={<MyTutorial/>}/>
        </Route>
      </Routes>
  )
}

export default AllRoutes