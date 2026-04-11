import React from 'react'
import { Link, Outlet } from 'react-router'
import { HeroCards } from '../Components/HeroCards'

export const AdminDashboard = () => {
  return (
    <>
      <div className='@container w-7xl mx-auto my-10 border-2 rounded border-sky-300 flex place-content-around p-5'>
        <HeroCards heading='Total Elections' number='20+' />
        <HeroCards heading='Total Voters' number='500+' />
        <HeroCards heading='Ended Elections' number='5+' />
      </div>
      <div className='@container w-6xl mx-auto flex flex-wrap p-5 justify-evenly'>
        <Link to='/createElection' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>Create Election</Link>
        <Link to='/addCandidate' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>Add Candidates</Link>
        <Link to='/startElection' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>Start Election</Link>
        <Link to='/viewResult' className='rounded w-[35%] text-center p-2 m-2 bg-blue-600 hover:bg-rose-600 font-bold text-white text-xl'>View Results</Link>
      </div>
    </>
  )
}
