import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault();
        setCaptainData({
            email: email,
            password: password
        })
        console.log(captainData);
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src='https://w1.pngwing.com/pngs/827/977/png-transparent-uber-logo-taxi-gratuity-peertopeer-ridesharing-driver-dynamic-pricing-san-francisco-driving.png'/>
        <form onSubmit={(e)=>{
            console.log(e);
            submitHandler(e)
        }}>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='youremail@gmail.com' />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='password' />

            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Login
            </button>
        </form>
        <p className='text-center'>Join a fleet <Link 
        to='/captain-signup' 
        className='text-blue-600'>Register as a Captain</Link></p>
        </div>
        <div>
            <Link
             to='/login'
             className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as User
            </Link>
        </div>
    </div>
  )
}

export default CaptainLogin