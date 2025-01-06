import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
       <div className="bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1710101362/assets/13/bd753e-2843-44d4-9aff-cc44c3062e95/original/SS_Commuter.jpg)] h-screen flex justify-between pt-8 pl-5 w-full flex-col">
        <img className='ml-8 w-16' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>
        <div className="bg-white pb-7 py-4 px-4">
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
        </div>   
    </div>
  )
}

export default Start