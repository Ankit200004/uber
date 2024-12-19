import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Captainlogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptrainData] = useState({})
  const submitHandler = (e) =>{
    e.preventDefault();
    setCaptrainData({
      email: email,
      password: password
    })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img src='https://w7.pngwing.com/pngs/597/568/png-transparent-uber-gratuity-lyft-driving-taxi-driving-driving-logo-car.png' className='w-16 mb-10'/>
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
      <p className='text-center'>Join the fleet
            <Link 
            to={'/signup'}
          className='text-blue-600'
          >Register as a captain</Link>
          </p>
      </div>
      <div>
        <Link 
        to={'/login'}
        className='bg-[#d5622d] text-white font-semibold rounded px-4 py-2 mb-7 flex items-center justify-center w-full text-lg placeholder:text-base'>
          Sign in as user
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin