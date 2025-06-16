import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import Tasklist from '../TaskList/Tasklist'
const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-5 bg-black h-screen'>
    
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber data={props.data}/>
      <Tasklist data={props.data}/>

    </div>
  )
}

export default EmployeeDashboard
