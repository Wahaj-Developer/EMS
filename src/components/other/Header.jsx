import React, { useState } from 'react'

const Header = (props) => {
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }

const logOutUser = () => {
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
  // window.location.reload()

}



  return (
    <div className='flex items-end text-white justify-between'>
      <h1 className='text-2xl font-medium'>Hello! <br/> <span className='font-semibold text-3xl'>username😀</span></h1>
      <button onClick={logOutUser} className='hover:bg-red-500 cursor-pointer text-white bg-red-400 px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header
