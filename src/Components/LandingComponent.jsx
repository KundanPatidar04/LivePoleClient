import React from 'react'
import { Link } from 'react-router'

export const LandingComponent = () => {
    return (
        <>
            <div className='border-4 border-sky-300 rounded-md @container bg-white w-[70%] mx-auto mt-7'>
                <h2 className='text-xl md:text-3xl lg:text-5xl text-center m-5 text-blue-700 font-bold pt-10'>Online Election Voating System</h2>
                <div className='grid grid-flow-row lg:grid-flow-col justify-items-center m-10 md:m-15 lg:m-20 md:px-10'>
                    <Link className='sm:text-2xl md:text-3xl bg-blue-700 rounded-md text-white text-center px-2 py-4 w-[60%] my-3' to='/login'>Login</Link>
                    <Link className='sm:text-2xl md:text-3xl bg-blue-700 rounded-md text-white text-center px-2 py-4 w-[60%] my-3' to='/registration'>Registor</Link>
                </div>
            </div>
        </>
    )
}
