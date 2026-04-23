import React from 'react'

export const VoteConform = ({ t, cndt, cancle, confirm}) => {
  t.duration = Infinity;

  return (
    <div className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'} max-w-md w-full bg-white shadow-lg rounded-lg border-2 border-indigo-400`}>
      <h4 className='w-full font-black text-lg text-center py-2 border-b border-indigo-400'>Conform Your Vote</h4>
      <div className='p-3'>
        <p className='w-full text-md text-center py-3'>are you sure you want to vote for <span className='font-bold'>{cndt}</span> ?</p>
        <div className='mx-3 md:mx-5 flex justify-between'>
          <button onClick={confirm} className='justify-center items-center bg-rose-600 py-1 w-25 text-white rounded'>confirm</button>
          <button onClick={cancle} className='justify-center items-center bg-emerald-600 py-1 w-25 text-white rounded'>cancle</button>
        </div>
      </div>
    </div>
  )
}
