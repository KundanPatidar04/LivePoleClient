import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { VoteConform } from './VoteConform';

export const VotingElection = ({ title, id, description, onClose }) => {
  let Api = import.meta.env.VITE_API;
    
    const [candidate, setCandidate] = useState([]);
    const [conform, setConform] = useState({ popup: false, candidate: "" });

    useEffect(() => {                             // control background scroll of ElectionList
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])

    const getCandidate = async () => {
        let token = await JSON.parse(sessionStorage.getItem('token'));
        let res = await axios.get(`${Api}/Candidate/${id}`, {
      headers: {
        'authtoken': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
        setCandidate(res.data.list);
    }
    useEffect(()=>getCandidate, [])

    const addVote = async (cndid) =>{
        try{
            let voterId = JSON.parse(sessionStorage.getItem("user")).id;
            let candidateId = cndid;
            let electionId = id ;
            let votes = {voterId , candidateId, electionId};

            let token = await JSON.parse(sessionStorage.getItem('token'));
            let res = await axios.post(`${Api}/addVote`, votes, {
      headers: {
        'authtoken': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
            if(res.data.success == true){
                toast.success(res.data.message);
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        }
        catch(error){
            console.error(error);
        }
    }

    const cancle = ()=>{
        toast.dismiss();
    }

    const conformVote = (cndt, cndid) => {
        toast.dismiss();
        toast.custom((t) => <VoteConform t={t} cndt={cndt} cancle={cancle} confirm={()=> addVote(cndid)} /> )
    }

    return (
        <>
            <div className='fixed inset-0 bg-gray-300 opacity-75' onClick={onclose}></div>
            <div className='@container w-3xl mx-auto my-10 pb-5 border-2 rounded border-sky-300 bg-white pop-up'>
                <h2 className='text-2xl bg-blue-600 m-1 p-3 rounded font-medium text-white relative'>{title}</h2>
                <button className='absolute top-5 right-5 bg-slate-400 px-1 rounded border border-gray-500' onClick={onClose}>←back</button>
                <p className='px-5 p-2 bg-gray-200'>{description}</p>
                <ul>
                    {
                        candidate.map((item, index) => {
                            return (<li className='flex border-b-1 vote-li m-2 p-3' key={index}><span className='text-blue-600 font-bold text-xl p-1 text-shadow-lg/20 '>{item.candidateName}</span> <span className='p-2'>({item.party})</span> <button className='bg-green-600 py-2 px-4 font-bold rounded ms-auto w-[90px]' onClick={() => conformVote(item.candidateName, item._id)}>Vote</button> </li>)
                        })
                    }
                </ul>
                <Toaster />
            </div>
        </>
    )
}
