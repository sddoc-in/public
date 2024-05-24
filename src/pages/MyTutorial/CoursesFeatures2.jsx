import React, { useState } from 'react';
import { PiStarThin } from "react-icons/pi";
import { FaRegSave } from "react-icons/fa";

const CoursesFeatures2 = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSaveClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmSave = () => {
    setShowConfirmation(false);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); // Popup will disappear after 3 seconds
  };

  const handleCancelSave = () => {
    setShowConfirmation(false);
  };

  return (
    <div className='p-8 w-3/4 justify-center mx-24 border-spacing-4 shadow rounded-lg my-4'>
      {popupVisible && (
        <div className='fixed top-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg'>
          Tutorial Saved
        </div>
      )}
      {showConfirmation && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className='text-[#0957F9] text-4xl text-center'>LOGO</h1>
            <p className="text-xl mb-4 fw-semibold text-black text-center ">Review Oracle New Course?</p>
            <p className="text-xl mb-4">Tap a star to rate it on the <br/>
              Web App.</p>
              <div class="flex items-center gap-4 justify-content-between mt-10">
                <hr/>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
            <div className="flex justify-center gap-5 mt-10" >
              <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleConfirmSave}>Save</button>
              <button className="px-4 py-2 bg-gray-400 text-gray-800 rounded" onClick={handleCancelSave}>Cancel</button>
            </div>
          </div>
        </div>
      )}
       <div class="flex items-center">
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p>(315)</p>
        </div>
      <div className='grid grid-flow-col gap-5'>
     
        <div>
          <h1 className='text-2xl font-semibold mb-4'>Your AI Generated New Platform Course</h1>
        </div>
        <button className='bg-[#FFD60A] rounded-2xl text-[#069D47] flex w-[156px] h-[38px]'>
          <PiStarThin className='w-5 h-5 ml-5 mt-2'/>
          <span className='mt-2'>Rate Tutorial</span>
        </button>
        <button className='bg-[#007AFF] rounded-2xl text-[#069D47] flex w-[156px] h-[38px]' onClick={handleSaveClick}>
          <FaRegSave className='w-5 h-5 ml-5 mt-2'/>
          <span className='mt-2'>Save Tutorial</span>
        </button>
      </div>
      <ul className='list-roman pl-5'>
        <li className='mb-2'>
          I. Introduction
          <p className='mt-2'>
            Privacy rights in Pakistan are a complex issue, with the country's legal system grappling with the balance between individual privacy and national security. The Supreme Court of Pakistan has played a significant role in shaping the country's privacy laws, with several landmark decisions that have set precedents for future cases.
          </p>
        </li>
        <li className='mb-2'>
          II. Legal Framework
          <p className='mt-2'>
            The legal framework for privacy rights in Pakistan is based on a combination of constitutional provisions, statutes, and case law. The Constitution of Pakistan guarantees the right to privacy as a fundamental right, and several statutes provide specific protections for personal data.
          </p>
        </li>
        <li className='mb-2'>
          III. Supreme Court Decisions
          <p className='mt-2'>
            1. The Supreme Court of Pakistan has issued several important decisions on privacy rights, including cases involving surveillance, data protection, and the right to be forgotten. These decisions have established important principles for protecting privacy in Pakistan.
          </p>
          <p className='mt-2'>
            2. The Supreme Court has also issued guidelines for law enforcement agencies on conducting surveillance and collecting personal data. These guidelines are intended to balance the needs of national security with the right to privacy.
          </p>
        </li>
        <li className='mb-2'>
          IV. Data Protection Laws
          <p className='mt-2'>
            Pakistan has several laws that regulate the collection, use, and disclosure of personal data. The most important of these is the Pakistan Personal Data Protection Act, which sets out the rights and obligations of data controllers and data subjects.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default CoursesFeatures2;