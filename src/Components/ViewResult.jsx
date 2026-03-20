import React from 'react'
import { Link } from 'react-router'

export const ViewResult = () => {
  return (
    <div className='@container w-5xl mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
      <h2 className='text-2xl bg-blue-600 m-1 p-3 rounded font-medium text-white '>Election Results</h2>
      <ul>
        <li className='flex border-b-1 vote-li m-2 p-3'><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>candidate-1</span><span className='p-2'>(Candidate Party)</span> <span className='bg-green-600 p-2 font-bold rounded ms-auto'>vote count</span></li>
        <li className='flex border-b-1 vote-li m-2 p-3'><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>candidate-2</span><span className='p-2'>(Candidate Party)</span> <span className='bg-green-600 p-2 font-bold rounded ms-auto'>vote count</span></li>
      </ul>
      <p className='text-xl mx-3 p-3 font-medium text-center'>winner: Candidate Name</p>
    </div>
  )
}
