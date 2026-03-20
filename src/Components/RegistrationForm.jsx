import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const RegistrationForm = () => {
    const [member, setMember] = useState({
        userName: "",
        userMail: "",
        userPswd: ""
    });

    const inputHandler = (event) => {
        setMember({ ...member, [event.target.name]: event.target.value });
    }

    const registor = async (event) => {
        try {
            event.preventDefault();

            let res = await axios.post("http://localhost:4000/registor", member);
            setMember({
                userName: "",
                userMail: "",
                userPswd: ""
            });
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className='@container w-xl mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
                <form action="" className='p-5' onSubmit={registor} method='post'>
                    <div className='grid'>
                        <label htmlFor="" className='font-bold'>User Name</label>
                        <input type="text" name="userName" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' required value={member.userName} onChange={inputHandler} />
                    </div>
                    <div className='grid'>
                        <label htmlFor="" className='font-bold'>Email</label>
                        <input type="email" name="userMail" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' required value={member.userMail} onChange={inputHandler} />
                    </div>
                    <div className='grid'>
                        <label htmlFor="" className='font-bold'>Password</label>
                        <input type="password" name="userPswd" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' required value={member.userPswd} onChange={inputHandler} />
                    </div>
                    <div className='grid grid-flow-col justify-items-center mt-5 px-10'>
                        <button type='submit' className='text-xl bg-blue-700 rounded-md text-white px-5 py-2'>Registor</button>
                    </div>
                </form>
            </div>
        </>
    )
}
