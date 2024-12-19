import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({})
  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      fullname:{
        firstname:firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    })
    setFirstname('')
    setLastname('')
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

        <h3 className='text-lg font-medium mb-2'>What's your Name?</h3>
        <div className='flex gap-4 mb-5'>
          <input 
        required
        value={firstname}
        onChange={(e)=>{
          setFirstname(e.target.value)
        }}
        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
        type='text' 
        placeholder='firstname'/>
        <input 
        required
        value={lastname}
        onChange={(e)=>{
          setLastname(e.target.value)
        }}
        className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base'
        type='text' 
        placeholder='lastname'/>

        </div>

        <h3 className='text-lg font-medium mb-2'>What's your Email?</h3>
        <input 
        required
        value={email}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base'
        type='email' 
        placeholder='email@example.com'/>

        <h3 className='text-lg font-medium mb-2'>Enter password:</h3>

        <input 
        type="password"
        className='bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base'
        required 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        placeholder='***********' />
        <Link
        to={'/login'}
        className='bg-[#111] text-white flex items-center justify-center font-semibold rounded px-4 py-2 mb-2 w-full text-lg placeholder:text-base'
        >
          Login</Link>
      </form>
      <p className='text-center'>Already have a account?
            <Link 
            to={'/login'}
          className='text-blue-600'
          >Login Here!!!</Link>
          </p>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>
          This site is protected bt reCAPTCHA and <span className='underline'>Google privacy policy</span> and <span className='underline'>Terms of Service apply</span>.
        </p>
      </div>
    </div>
  )
}

export default UserSignup