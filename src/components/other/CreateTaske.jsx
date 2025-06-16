import React, { use, useState }  from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'




const CreateTaske = () => {

const [userData,setUserData] = useContext(AuthContext)


const [taskTitle, setTaskTitle] = useState('')
const [taskDescription, setTaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [asignTo, setAsignTo] = useState('')
const [category, setCategory] = useState('')


const [newtask, setNewTask] = useState({})

const submithandler = (e) => {

  e.preventDefault()
 
   setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })


 const data = userData
 

 data.forEach(function(elem){
  if(asignTo == elem.firstname){
    elem.tasks.push(newtask)
    elem.taskStats.newTask = elem.taskStats.newTask+1
  }
 })
 setUserData(data)
console.log(data)

 setTaskTitle('');
 setTaskDate('');
 setAsignTo('');
 setCategory('');
 setTaskDescription('');


}




  return (
   <div className=" p-5 mt-7 bg-[#1c1c1c] rounded ">
    <form onSubmit={(e)=>{
      submithandler(e)
    }} 
    className='flex w-full flex-wrap items-start justify-between text-white'>
      <div className="w-1/2">
              {/*  */}
    <div>
          <h3 className='text-sm font-bold text-gray-300 mb-0.5'>Create Taske</h3>
        <input 
        value={taskTitle}
        onChange={(e)=>{
          setTaskTitle(e.target.value)
        }}
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300 mb-4' type="text" placeholder='Manage the taske' />
    </div>
               {/*  */}
       <div>
         <h3 className='text-sm font-bold text-gray-300 mb-0.5'>Date:</h3>
        <input
         value={taskDate}
        onChange={(e)=>{
          setTaskDate(e.target.value)
        }}
         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4 border-gray-300' type="date" />
       </div>
            {/*  */}
      <div>
      <h3 className='text-sm font-bold text-gray-300 mb-0.5'>Asign to</h3>
            <input 
             value={asignTo}
        onChange={(e)=>{
          setAsignTo(e.target.value)
        }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300 mb-4' type="text" placeholder='Employ name' />
      </div>
            {/*  */}
      <div>
               <h3 className='text-sm font-bold text-gray-300 mb-0.5'>Catrgory</h3>
            <input
             value={category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-300 mb-4' type="text" placeholder='design, dev, etc' />
      </div>
      </div>

        {/*  */}
     <div className="w-2/5 flex flex-col items-start ">
         <h3 className='text-sm font-bold text-gray-300 mb-0.5'>Description</h3>
        <textarea 
         value={taskDescription}
        onChange={(e)=>{
          setTaskDescription(e.target.value)
        }}
        className='w-full h-44 text-sm py-2 px-4 rounded bg-transparent border-[1px] border-gray-300 mb-4 ' name="" id=""  placeholder='Description about task.'></textarea>
          <button className='px-5 mt-4 w-full text-xl rounded py-3 bg-red-400 hover:bg-red-200 cursor-pointer'>Create Task</button>
     </div>
 
          
      
    </form>
    </div>
  )
}

export default CreateTaske
