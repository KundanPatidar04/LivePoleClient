import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';


export const LoginForm = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        userMail: "",
        userPswd: ""
    });

    const inputHandler = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    }
    const loginMamber = async (event) => {
        try {
            event.preventDefault();
            let res = await axios.post("http://localhost:4000/login", login);
            let user = res.data.user ;
            
            setLogin({
                userMail: "",
                userPswd: ""
            });
            
            if(res.data.success == true){
                localStorage.setItem("user" ,JSON.stringify(user));
                navigate(`/${user.role}`)
            }
            
        }
        catch (error) {
            console.log(error);
            alert("incorrect email/password");
        }

    }

    return (
        <>
            <div className='@container w-xl mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
                <form action="" className='p-5' onSubmit={loginMamber} method='post'>
                    <div className='grid'>
                        <label htmlFor="" className='font-bold'>Email</label>
                        <input type="email" name="userMail" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' required value={login.userMail} onChange={inputHandler} />
                    </div>
                    <div className='grid pt-3'>
                        <label htmlFor="" className='font-bold'>Password</label>
                        <input type="password" name="userPswd" id="" className='border-1 rounded border-sky-300 outline-sky-300 p-2' required value={login.userPswd} onChange={inputHandler} />
                    </div>
                    <div className='grid grid-flow-col justify-items-center mt-5 px-10'>
                        <button className='text-xl bg-blue-700 rounded-md text-white px-5 py-2' type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}
