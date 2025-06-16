import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = () => {
const [userData,setUserData] = useContext(AuthContext)




  return (
    <div className='p-5 bg-[#1c1c1c] mt-5  rounded text-white '>
      <div className='bg-red-400 mb-2  rounded flex justify-between py-2 px-4'>
            <h2 className='text-center text-lg font-medium w-1/4'>Employ Name:</h2>
            <h3 className='text-center text-lg font-medium w-1/4'>New Task</h3>
            <h5 className='text-center text-lg font-medium w-1/4'>Active Task</h5>
            <h5 className='text-center text-lg font-medium w-1/4'>Compleated Task</h5>
            <h5 className='text-center text-lg font-medium w-1/4'>Failled Task</h5>

        </div>
      <div className=''>
              {userData.map(function(elem,idx){
            return  <div key={idx} className='bg-black font-semibold text-white mb-2 rounded flex justify-between py-2 px-4'>
            <h2  className='text-lg text-center font-medium w-1/4'>{elem.firstname}</h2>
            <h3  className='text-lg text-center font-medium w-1/4'>{elem.taskStats.newTask}</h3>
            <h5  className='text-lg text-center font-medium w-1/4'>{elem.taskStats.active}</h5>
            <h5  className='text-lg text-center font-medium w-1/4'>{elem.taskStats.completed}</h5>
            <h5  className='text-lg text-center font-medium w-1/4'>{elem.taskStats.failed}</h5>
        </div>
        })}
       
      </div>
   
      
    </div>
  )
}

export default AllTask
