import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const CoursesFeatures = () => {
  return (
    <div className='p-8 w-3/4 justify-center mx-24 border-spacing-4 shadow rounded-lg my-4'>
      <div className='grid grid-flow-col gap-5'>
        <div>
          <h1 className='text-2xl font-semibold mb-4'>Your AI Genrated New Platform Course</h1>
        </div>
        <button className='bg-[#069d4758] rounded-2xl text-[#069D47] flex w-[156px] h-[38px]'>
          <FaCloudUploadAlt className='w-5 h-5 ml-5 mt-2 '/>
          <span className='mt-2'>
          Public Totural
          </span>
        </button>
      </div>
      <ul className='list-roman pl-5'>
        <li className='mb-2'>I. Introduction
          <p className='mt-2'>Privacy rights in Pakistan are a complex issue, with the country's legal system grappling with the balance between individual privacy and national security. The Supreme Court of Pakistan has played a significant role in shaping the country's privacy laws, with several landmark decisions that have set precedents for future cases.</p>
        </li>
        <li className='mb-2'>II. Legal Framework
          <p className='mt-2'>The legal framework for privacy rights in Pakistan is based on a combination of constitutional provisions, statutes, and case law. The Constitution of Pakistan guarantees the right to privacy as a fundamental right, and several statutes provide specific protections for personal data.</p>
        </li>
        <li className='mb-2'>III. Supreme Court Decisions
          <p className='mt-2'>1. The Supreme Court of Pakistan has issued several important decisions on privacy rights, including cases involving surveillance, data protection, and the right to be forgotten. These decisions have established important principles for protecting privacy in Pakistan.</p>
          <p className='mt-2'>2. The Supreme Court has also issued guidelines for law enforcement agencies on conducting surveillance and collecting personal data. These guidelines are intended to balance the needs of national security with the right to privacy.</p>
        </li>
        <li className='mb-2'>IV. Data Protection Laws
          <p className='mt-2'>Pakistan has several laws that regulate the collection, use, and disclosure of personal data. The most important of these is the Pakistan Personal Data Protection Act, which sets out the rights and obligations of data controllers and data subjects.</p>
        </li>
      </ul>
    </div>
  )
}

export default CoursesFeatures