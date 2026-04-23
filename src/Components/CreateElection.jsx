import axios from 'axios';
import React, { useState } from 'react'

export const CreateElection = () => {
    let Api = import.meta.env.VITE_API;

    const [election, setElection] = useState({
        electionTitle: "",
        description: "",
        startDate: "",
        endDate: ""
    });

    const inputHandler = (event) => {
        setElection({ ...election, [event.target.name]: event.target.value });
    }

    const createElection = async (event) => {
        try {
            event.preventDefault();
            let token = await JSON.parse(sessionStorage.getItem('token'));
            let res = await axios.post(`${Api}/createElection`, election, {
                headers: {
                    'authtoken': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            if (res) {
                setElection({
                    electionTitle: "",
                    description: "",
                    startDate: "",
                    endDate: ""
                })
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <div className='@container w-[90%] sm:w-[60%] mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
                <h2 className='text-2xl font-bold text-center m-2'>Create Election</h2>
                <form action="" className='px-3 sm:px-5 py-5 flex flex-wrap' onSubmit={createElection}>
                    <div className='w-full p-2 grid font-bold'>
                        <label htmlFor="">Election Title:</label>
                        <input className='border-1 rounded border-sky-300 outline-sky-300 p-2' type="text" name="electionTitle" id="" placeholder='Election Title' value={election.electionTitle} required onChange={inputHandler} />
                    </div>
                    <div className='w-full p-2 grid font-bold'>
                        <label htmlFor="">Description:</label>
                        <input className='border-1 rounded border-sky-300 outline-sky-300 p-2' type="textarea" name="description" id="" placeholder='Election Description' value={election.description} required onChange={inputHandler} />
                    </div>
                    <div className='w-full md:w-1/2 p-2 grid font-bold'>
                        <label htmlFor="">Start Date:</label>
                        <input type="date" name="startDate" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' value={election.startDate} required onChange={inputHandler} />
                    </div>
                    <div className='w-full md:w-1/2 p-2 grid font-bold'>
                        <label htmlFor="">End Date:</label>
                        <input type="date" className='border-1 rounded border-sky-300 outline-sky-300 p-2' name="endDate" id="" value={election.endDate} required onChange={inputHandler} />
                    </div>
                    <div className='grid grid-flow-col w-full justify-items-center mt-5 px-auto'>
                        <button type='submit' className='text-xl bg-blue-700 rounded-md text-white w-[40%] px-5 py-2'>Create</button>
                    </div>
                </form>
            </div>
        </>
    )
}
