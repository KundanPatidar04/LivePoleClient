import React from 'react'
import { Link } from 'react-router'

export const PageNotFound = () => {
  return (
    <>
      <div className='bg-light-500 flex items-center justify-center mt-5'>
        <div className="text-center px-6">
          <h1 className="text-9xl font-black text-indigo-600 animate-bounce">
            404
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-4">
            Uh-ho!
          </p>

          <p className="mt-4 text-gray-500">
            We can't find that page. It might have been moved or deleted.
          </p>

          <Link className="mt-8 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
            Go Back Home </Link>
        </div>
      </div>
    </>
  )
}
