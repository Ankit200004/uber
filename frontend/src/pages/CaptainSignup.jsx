import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault();
        setCaptainData({
            fullName:{
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src='https://w1.pngwing.com/pngs/827/977/png-transparent-uber-logo-taxi-gratuity-peertopeer-ridesharing-driver-dynamic-pricing-san-francisco-driving.png'/>
        <form onSubmit={(e)=>{
            console.log(e);
            submitHandler(e)
        }}>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's Name</h3>
            <div className='flex gap-4 mb-5'>
            <input 
            required
            value={firstName}
            onChange={(e)=>{
                setFirstName(e.target.value)
            }}
            className='bg-[#eeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
            type="text" 
            placeholder='firstname' />
            <input 
            value={lastName}
            onChange={(e)=>{
                setLastName(e.target.value)
            }}
            className='bg-[#eeeee]  rounded px-4 py-2 border w-1/2 text-base placeholder:text-base'
            type="text" 
            placeholder='lastname' />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
            <input 
            required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            className='bg-[#eeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='youremail@gmail.com' />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input 
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className='bg-[#eeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password" 
            placeholder='password' />

            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Login
            </button>
        </form>
        <p className='text-center'>Already have a account? <Link 
        to='/captain-login' 
        className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
            <p className='text-[10px] leading-tight'>
                This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
            </p>
        </div>
    </div>
  )
}

export default CaptainSignup