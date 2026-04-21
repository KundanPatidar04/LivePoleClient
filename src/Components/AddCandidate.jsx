import React, { useEffect, useState } from 'react'
import axios from 'axios';


export const AddCandidate = () => {
  let Api = import.meta.env.VITE_API;

  const[electionList, setElectionList] = useState([]);
  const [candidate, setCandidate] = useState({
    candidateName: "",
    party: "",
    electionId: ""
  });
 
  const getElections = async ()=>{
    let token = await JSON.parse(sessionStorage.getItem('token'));
    let res = await axios.get(`${Api}/electionList`, {
      headers: {
        'authtoken': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    setElectionList(res.data.data);
  }
  useEffect(getElections,[]);

  const inputHandler = (event) => {
    setCandidate({ ...candidate, [event.target.name]: event.target.value });
  }

  const AddCandidate = async (event) => {
    try {
      event.preventDefault();
      let token = await JSON.parse(sessionStorage.getItem('token'));
      let res = await axios.post(`${Api}/addCandidate`, candidate, {
      headers: {
        'authtoken': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
      if (res) {
        setCandidate({
          candidateName: "",
          party: "",
          electionId: ""
        })
      }
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='@container w-2xl mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
      <h2 className='text-2xl font-bold text-center m-2'>Add Candidate</h2>
      <form action="" className='p-5' method='post' onSubmit={AddCandidate}>
        <div className='grid'>
          <label htmlFor="" className='font-bold'>Candidate Name:</label>
          <input type="text" name="candidateName" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' placeholder='Enter Candidate Name' required value={candidate.candidateName} onChange={inputHandler} />
        </div>
        <div className='grid'>
          <label htmlFor="" className='font-bold'>Party:</label>
          <select name="party" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' required value={candidate.party} onChange={inputHandler} >
            <option value="independent" >select</option>
            <option value="party1">party1</option>
            <option value="party2">party2</option>
            <option value="party3">party3</option>
          </select>
        </div>
        <div className='grid'>
          <label htmlFor="" className='font-bold'>Select Election:</label>
          <select name="electionId" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' required value={candidate.electionId} onChange={inputHandler} >
            <option value="" >select</option>
            {
              electionList.map((item, index)=>{
                return (<option key={index} value={item._id}>{item.electionTitle}</option>)
              })
            }
          </select>
        </div>
        <div className='grid grid-flow-col justify-items-center mt-5 px-10'>
          <button type='submit' className='text-xl bg-blue-700 rounded-md text-white px-5 py-2'>Add</button>
        </div>
      </form>
    </div>
  )
}
