import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' className='w-16 mb-10'/>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-lg font-medium mb-2'>What's your Email?</h3>
        <input 
        required 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base'
        type='email' 
        placeholder='email@example.com'/>

        <h3 className='text-lg font-medium mb-2'>Enter password:</h3>

        <input 
        type="password" 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base'
        required 
        placeholder='***********' />
        <button
        className='bg-[#111] text-white font-semibold rounded px-4 py-2 mb-2 w-full text-lg placeholder:text-base'
        >
          Login</button>
      </form>
      <p className='text-center'>New hers?
            <Link 
            to={'/signup'}
          className='text-blue-600'
          >Create a new account</Link>
          </p>
      </div>
      <div>
        <Link 
        to={'/captain-login'}
        className='bg-[#10b461] text-white font-semibold rounded px-4 py-2 mb-7 flex items-center justify-center w-full text-lg placeholder:text-base'>
          Sign in as captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin