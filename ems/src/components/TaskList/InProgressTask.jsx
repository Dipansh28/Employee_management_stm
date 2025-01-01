import React from 'react'

const InProgressTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sm'>01-Dec-2024</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Make a React File</h2>
    <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem nesciunt eos in laudantium omnis distinctio? Odit?
    </p>
    <div className='mt-2'>
    <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 w-full text-sm rounded shadow-md">In Progress</button>
    </div>
  </div>
  )
}

export default InProgressTask
