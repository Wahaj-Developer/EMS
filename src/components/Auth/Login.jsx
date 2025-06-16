import React, { useState } from 'react'

const Login = ({handleLogin}) => {
 

const [email, setemail] = useState('')
const [password, setpassword] = useState('')

const submitHandler = (e) => {
    e.preventDefault();
     handleLogin(email,password);
    setemail('');
    setpassword('');
}


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className="border-2 border-white p-20 rounded-xl">
        <form 
        
        onSubmit={ (e) => {
          submitHandler(e);
          
        }
        }

        className='flex flex-col justify-center'>
             <input
             value={email}
             onChange={(e)=>{
             
              setemail(e.target.value);
             }}
             required className='border-2 text-white border-white text-xl outline-none rounded-full py-4 px-5 placeholder:text-gray-300' type="email" placeholder='Enter your email' />
            <input
            value={password}
             onChange={(e)=>{
       
              setpassword(e.target.value);
             }}
            required className='border-2 text-white border-white text-xl outline-none rounded-full py-4 px-5 mt-3 placeholder:text-gray-300' type="password" placeholder='Enter your password.' />
            <button className='border-2  bg-white text-black font-bold rounded-full py-2 px-1 mt-4 cursor-pointer hover:bg-black hover:text-white '>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
