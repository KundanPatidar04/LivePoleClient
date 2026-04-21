import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

export const ViewResult = () => {
  let Api = import.meta.env.VITE_API;
  const [result, setResult] = useState([])

  const fetchResult = async () => {
    let token = await JSON.parse(sessionStorage.getItem('token'));
    let res = await axios.get(`${Api}/electionResult`, {
      headers: {
        'authtoken': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    setResult(res.data.data);
  }
  useEffect(() => fetchResult, [])


  return (
    <div className='@container w-5xl mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
      <h2 className='text-2xl bg-blue-600 m-1 p-3 rounded font-medium text-white '>Election Results</h2>
      {/* <div>
        <h3 className='text-2xl bg-blue-500 mx-3 my-1 px-5 py-2 rounded font-medium text-white '>title</h3>
        <p className='text-sm bg-sky-300 px-5 py-2 ms-6 me-3 rounded font-medium '>description</p>
        <ul className='mx-2'>
          <li className='flex border-b-1 vote-li m-2 p-3'><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>candidate-1</span><span className='p-2'>(Candidate Party)</span> <span className='bg-green-600 p-2 font-bold rounded ms-auto'>vote count</span></li>
          <li className='flex border-b-1 vote-li m-2 p-3'><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>candidate-2</span><span className='p-2'>(Candidate Party)</span> <span className='bg-green-600 p-2 font-bold rounded ms-auto'>vote count</span></li>
        </ul>
      </div> */}
        {
          result.map((elec) => {
            return (<div key={elec._id} className='mb-10'>
              <h3 className='text-2xl bg-blue-500 mx-3 my-1 px-5 py-2 rounded font-medium text-white '>{elec.title}</h3>
              <p className='text-sm bg-gray-300 px-5 py-2 ms-6 me-3 rounded font-medium '>{elec.description}</p>
              <ul className='mx-2'>
                {
                  elec.candidates.map((item, index)=>{
                    return(
                    <li key={index} className='flex border-b-1 vote-li m-2 p-3'><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>{item.name}</span><span className='p-2'>({item.party})</span> <span className='bg-green-600 p-2 font-bold rounded ms-auto w-20 text-center'>{item.voteCount}</span></li>
                  )
                  })
                }
              </ul>
              <ul className='mx-2'>
                <h5 className='text-xl mx-3 px-3 font-bold text-center'>WINNER</h5>
                {
                  elec.winner.map((item, index)=>{
                    return(
                    <li key={index} className='flex border-b-1 vote-li mx-auto w-[70%] my-2 p-3 '><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>{item.name}</span><span className='bg-green-600 p-2 font-bold rounded ms-auto w-20 text-center'>{item.voteCount}</span></li>
                  )
                  })
                }
              </ul>
            </div>)
          })
        }
    </div>
  )
}
