import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1710101362/assets/13/bd753e-2843-44d4-9aff-cc44c3062e95/original/SS_Commuter.jpg)] h-screen flex justify-between pt-8 w-full flex-col">
        <img src='https://pngimg.com/d/uber_PNG24.png' className='w-16 ml-9'/>
        <div className='bg-white py-4 px-4 pb-7'>
          <h2 className='text-3xl font-bold'>Get started with uber</h2>
          <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home