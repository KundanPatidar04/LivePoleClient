import React from 'react'

export const HeroCards = ({heading, number}) => {
    return (
        <div className='w-[30%] rounded-xl bg-transparent border border-4 p-5 m-2 hero-card'>
            <h2 className='border-b text-2xl font-bold'>{heading}</h2>
            <h4 className='hero-card-n'>{number}</h4>
            <span className='mx-auto'>Years of Experience</span>
        </div>
    )
}
