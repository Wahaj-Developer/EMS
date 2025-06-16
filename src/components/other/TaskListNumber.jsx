import React from 'react'


const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5 text-white'>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className='text-3xl font-semibold'>{data.taskStats.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
     
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-300">
        <h2 className='text-3xl font-semibold'>{data.taskStats.completed}</h2>
        <h3 className='text-xl font-medium'>Compleat Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-300">
        <h2 className='text-3xl font-semibold'>{data.taskStats.newTask}</h2>
        <h3 className='text-xl font-medium'>New Taske</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] text-black bg-yellow-300">
        <h2 className='text-3xl font-semibold'>{data.taskStats.active}</h2>
        <h3 className='text-xl font-medium'>Active Taske</h3>
      </div>

    </div>
  )
}

export default TaskListNumber
