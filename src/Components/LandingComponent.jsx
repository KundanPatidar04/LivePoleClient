import React from 'react'
import { Link } from 'react-router'

export const LandingComponent = () => {
    return (
        <>
            <div className='border-4 border-sky-300 rounded-md @container bg-white w-6xl mx-auto mt-7'>
                <h2 className='text-5xl text-center m-5 text-blue-700 font-bold pt-10'>Online Election Voating System</h2>
                <div className='grid grid-flow-col justify-items-center m-20 px-10'>
                    <Link className='text-4xl bg-blue-700 rounded-md text-white px-15 py-4' to='/login'>Login</Link>
                    <Link className='text-4xl bg-blue-700 rounded-md text-white px-11 py-5' to='/registration'>Registor</Link>
                </div>
            </div>
        </>
    )
}
