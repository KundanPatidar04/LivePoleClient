import React from 'react'
import { Link, Outlet } from 'react-router'

export const AdminDashboard = () => {
  return (
    <>
    <div className='@container w-7xl mx-auto my-10 border-2 rounded border-sky-300 bg-white flex'>
        <div className='w-[50%] p-5 border-r'>
            <h2 className='border-b text-2xl font-bold'>Total Elections</h2>
            <p className='p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ipsum excepturi accusamus vitae repellendus officia? Consequuntur minima fugit animi delectus placeat corporis numquam sequi, consequatur aspernatur reiciendis expedita nulla. Temporibus?</p>
        </div>
        <div className='w-[50%] p-5'>
            <h2 className='border-b text-2xl font-bold'>Total Voters</h2>
            <p className='p-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ipsum excepturi accusamus vitae repellendus officia? Consequuntur minima fugit animi delectus placeat corporis numquam sequi, consequatur aspernatur reiciendis expedita nulla. Temporibus?</p>
        </div>
    </div>
    <div className='@container w-6xl mx-auto flex flex-wrap p-5 justify-evenly'>
      <Link to='createElection' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>Create Election</Link>
      <Link to='addCandidate' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>Add Candidates</Link>
      <Link to='startElection' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>Start Election</Link>
      <Link to='viewResult' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>View Results</Link>
    </div>
    <Outlet />
    </>
  )
}
