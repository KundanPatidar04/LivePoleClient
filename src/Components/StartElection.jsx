import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, } from 'react-router'

export const StartElection = () => {
  const navigate = useNavigate();
  const [elections, setElections] = useState([])

  const fetchDate = async ()=>{
    let res = await axios.get("http://localhost:4000/electionList");
    setElections(res.data.data);
  }
  useEffect( ()=>fetchDate ,[])

  const conformElection =(elec)=> {
    try{
      navigate(`/admin/${elec._id}`);
    }
    catch(error){
      console.error(error); 
    }
  }

  return (
    <>
      <div className='@container w-5xl mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
            <h2 className='text-2xl bg-blue-600 m-1 p-3 rounded font-medium text-white '>Schedule Elections</h2>
            <ul>
              {
                elections.map((items , index)=>{
                  return (<li className='flex border-b-1 vote-li m-2 p-3 rounded' key={index}><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>{items.electionTitle}</span> 
                  {items.isActive ? <><span className='p-2 text-green-600'> ( Ongoing )</span> <button className='bg-green-600 py-2 px-4 font-bold rounded ms-auto text-red-600 w-[100px]'>Started </button> </> 
                  : <><span className='p-2 text-red-600'> ( not Started )</span> <button className='bg-green-600 py-2 px-4 font-bold rounded ms-auto w-[100px]' onClick={()=>conformElection(items)}>Start </button></>} </li>)
                })
              }
                
            </ul>
        </div>
    </>
  )
}
