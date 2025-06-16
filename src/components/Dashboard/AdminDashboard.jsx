import React from 'react'
import Header from '../other/Header'
import CreateTaske from '../other/CreateTaske'
import AllTask from '../other/AllTask'
const AdminDashboard = (props) => {
  return (
    <div className='p-7 h-screen w-full'>
      
<Header changeUser={props.changeUser}/> 
<CreateTaske />
<AllTask />


    </div>
  )
}

export default AdminDashboard
