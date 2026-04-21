import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { VotingElection } from './VotingElection';

export const ElectionList = () => {
  let Api = import.meta.env.VITE_API;

  let user = JSON.parse(sessionStorage.getItem("user"))
  let userId = user.id;

  const [elections, setElections] = useState([]);
  const [electionItem, setElectionItem] = useState();
  const [flag, setFlag] = useState(false);

  const getElections = async () => {
    let token = await JSON.parse(sessionStorage.getItem('token'));
    let res = await axios.get(`${Api}/Elections/${userId}`,{
      headers: {
        'authtoken': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    } );
    setElections(res.data.data);
  }
  useEffect(getElections, [])

  const AddVote = (item)=>{
    setElectionItem(item);
    setFlag(true);
  }

  return (
    <>
      <div className='@container w-6xl mx-auto my-10 border-2 rounded border-sky-300 bg-white pop-bg'>
        <h2 className='text-2xl bg-blue-600 m-1 p-3 rounded font-medium text-white '>Active Elections</h2>
        <ul>
          {elections.map((items, index)=>{
            return (<li className='flex border-b-1 vote-li m-2 p-3' key={index}><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>{items.electionTitle}</span><span className='p-2'>(Not Voted)</span> <Link className='bg-green-600 p-2 font-bold rounded ms-auto' onClick={()=> {AddVote(items)}}>Add Vote</Link></li>)
          })}
        </ul>
      </div>
      {flag && (<VotingElection title={electionItem.electionTitle} id={electionItem._id} description={electionItem.description} onClose={()=> setFlag(false)} />)}
    </>
  )
}
