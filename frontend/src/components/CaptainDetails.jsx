import React from 'react'

const CaptainDetails = () => {
  return (
    <>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start  gap-3'>
              <img className='h-10 1-10 rounded-full
               object-cover' src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
              <h4 className='text-lg font-medium'>Hahahil khan</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold'>201.12</h4>
              <p className='text-xl text-green-600'>Earened</p>
            </div>
          </div>
          <div className='flex mt-6 p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-extralight ri-timer-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Houres Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-extralight ri-speed-up-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Houres Online</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-extralight ri-booklet-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Houres Online</p>
            </div>
          </div>
        </>  
  )
}

export default CaptainDetails