import React from 'react'

const NewTask = ({data}) => {
  
  return (
        <div className="h-full shrink-0 p-5 w-[250px] rounded-xl bg-blue-400  ">
    <div className="flex items-center justify-between">
      <h3 className="bg-red-500 px-3 py-1 rounded font-bold ">{data.category}</h3>
      <h4 className='text-sm'>{data.date}</h4>
    </div>
       <h3 className="mt-2 text-2xl font-bold">{data.title}</h3>
       <p className="text-sm mt-1">{data.description}</p>
       <div className='flex justify-between mt-1'>
        <button className='bg-green-400 rounded-sm mt-1 py-1 font-bold px-2 text-sm'>Completed</button>
        <button className='bg-rose-600 py-1 mt-1 rounded-sm font-bold px-2 text-sm'>Failed</button>
       </div>
      </div>
  )
}

export default NewTask
