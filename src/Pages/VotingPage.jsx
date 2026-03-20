import React from 'react'
import { Link } from 'react-router'

export const VotingPage = () => {
  return (
    <>
      <div className='@container w-6xl mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
        <ul>
          <li className='flex border-2 m-2 p-3 justify-between rounded'> <span>Candate Nmae</span> <span></span></li>
          {/* <h2>Candate Nmae</h2><p>party Name</p> */}
          <Link>Vote</Link>
        </ul>
      </div>
    </>
  )
}
