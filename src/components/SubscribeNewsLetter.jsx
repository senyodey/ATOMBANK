import React from 'react'

function SubscribeNewsLetter() {
  return (
<div className="bg-gray-100 h-25 flex items-center justify-center">
      <div className=" p-4 rounded-lg  w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4 text-center">Subsribe Newsletter</h1>
        
        {/* Description */}
        <p className="text-gray-600 text-center mb-6">Financial transactions remotely using mobile</p>
        
        <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
               Enter your email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-gray-900  text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started
              </button>
            </div>
       
      </div>
    </div>  )
}

export default SubscribeNewsLetter