import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';


export const LoginForm = () => {
    let Api = import.meta.env.VITE_API;

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        userMail: "",
        userPswd: ""
    });

    const inputHandler = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    }

    const decodeToken = (token) => {
        try {
            const base64Url = token.split('.')[1]; // Get the payload part
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        } catch (e) {
            return null;
        }
    };

    const loginMamber = async (event) => {
        try {
            event.preventDefault();
            let token = await JSON.parse(sessionStorage.getItem('token'));
            let res = await axios.post(`${Api}/login`, login, {
                headers: {
                    'authtoken': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            setLogin({
                userMail: "",
                userPswd: ""
            });


            if (res.data.success == true) {
                let token = res.data.accessToken;
                sessionStorage.setItem('token', JSON.stringify(token));

                let user = decodeToken(token);
                sessionStorage.setItem("user", JSON.stringify(user));
                navigate(`/${user.role}`);
            }

        }
        catch (error) {
            setLogin({
                userMail: "",
                userPswd: ""
            });
            alert("incorrect email/password");
        }

    }

    return (
        <>
            <div className='@container w-[90%] md:w-[70%] lg:w-[50%] mx-auto my-10 border-2 rounded border-sky-300 bg-white'>
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
