import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailledTask from './FailledTask'
const Tasklist = ({data}) => {
  
  return (
    <div  id='tasklist' className='h-[55%] text-white overflow-x-auto flex items-center flex-nowrap justify-between gap-5 py-5 w-full mt-10'>
     {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if (elem.failed) {
          return <FailledTask key={idx} data={elem} />
        }
       
      })}
    </div>
  )
}

export default Tasklist
