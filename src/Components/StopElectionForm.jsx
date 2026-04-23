import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router';

export const StopElectionForm = () => {
    let Api = import.meta.env.VITE_API;

    const navigate = useNavigate();
    const { electionId } = useParams();
    const [election, setElection] = useState();

    const fetchElection = async () => {
        try {
            let token = await JSON.parse(sessionStorage.getItem('token'));
            let res = await axios.get(`${Api}/election/${electionId}`, {
                headers: {
                    'authtoken': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });
            setElection(res.data.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => { fetchElection() }, [electionId]);

    const stopElection = async (event) =>{
        try {
            event.preventDefault();
            let token = await JSON.parse(sessionStorage.getItem('token'));
            let res = await axios({
                method: 'post',
                url: `${Api}/stopElection/${electionId}`,
                headers: {
                    'authtoken': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })

            if (res.data.success == true) {
                toast.success(res.data.message);
                setTimeout(() => {
                    navigate('/admin/startElection');
                }, 600);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
  return (
    <>
            <div className='@container w-[90%] md:w-[60%] mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
                <div className='border-b-2'>
                    <h3 className='text-2xl bg-blue-600 p-3 font-medium text-white'>start Election</h3>
                </div>
                <form action="" className='p-5' onSubmit={stopElection} method='post'>
                    <div>
                        <Toaster />
                        {election ? (<>
                            <span className='flex flex-wrap px-5 py-2 text-lg'><h4 className='px-3 text-cyan-400 font-bold'>Election Title:</h4><p className='px-3 text-lg'> {election.electionTitle} </p></span>
                            <span className='flex flex-wrap px-5 py-2 text-lg'><h4 className='px-3 text-cyan-400 font-bold'>Election Description:</h4><p className='px-3 text-lg'> {election.description} </p></span>
                            <span className='flex flex-wrap px-5 py-2 text-lg'><h4 className='px-3 text-cyan-400 font-bold'>Start Date:</h4><p className='px-3 text-lg'> {election.startDate} </p></span>
                            <span className='flex flex-wrap px-5 py-2 text-lg'><h4 className='px-3 text-cyan-400 font-bold'>End Date:</h4><p className='px-3 text-lg'> {election.endDate} </p></span>
                        </>) : (
                            <p>Loading...</p>
                        )}
                        <div className='grid grid-flow-col justify-items-center my-5 px-autopx-3 '>
                            <button type='submit' className='text-xl bg-blue-700 rounded-md text-white px-5 py-2'>End Election</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
  )
}
