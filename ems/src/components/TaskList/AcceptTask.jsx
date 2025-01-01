import React from 'react'

const AcceptTask = ({data}) => {
    // console.log(data.taskTitle)
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.taskCategory}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
        <button className="bg-green-600 hover:bg-green-700 focus:ring focus:ring-green-300 mr-4 text-white font-semibold py-1 px-4 rounded-lg text-sm shadow-md transition-all duration-300 ease-in-out">
  Mark as Completed
</button>
<button className="bg-red-500 hover:bg-red-600 focus:ring focus:ring-red-300 text-white font-semibold py-1 px-4 rounded-lg text-sm shadow-md transition-all duration-300 ease-in-out">
  Mark as Failed
</button>
        </div>
      </div>
  )
}

export default AcceptTask
