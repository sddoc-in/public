import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../../pages/Home/Home';
import MyTutorial from '../../pages/MyTutorial/MyTutorial';
import CoursesFeatures from '../../pages/MyTutorial/CoursesFeatures';
import CoursesFeatures1 from '../../pages/MyTutorial/CoursesFeature1';
import CoursesFeatures2 from '../../pages/MyTutorial/CoursesFeatures2';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/tutorial" element={<MyTutorial />} />
        <Route path="/Generate" element={<CoursesFeatures />} />
        <Route path="/tutorial1" element={<CoursesFeatures1 />} />
        <Route path="/tutorial2" element={<CoursesFeatures2 />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
