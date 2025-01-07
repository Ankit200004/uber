import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
        <h5 
        className='p-1 text-center absolute w-[93%] top-0'
        onClick={()=>{
          props.waitingForDriver(false)
        }}
        ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <div className='flex items-center justify-between'>
            <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png" alt="" />
            <div className='text-right '>
                <h2 className='text-lg font-medium'>Ankit</h2>
                <h4 className='text-xl font-semibold -mt-2 -mb-1'>MP 16aU81</h4>
                <p className='font-small text-gray-600 '>Swift</p>
            </div>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-cente gap-5 p-3 border-b-2'>
                    <i className="ri-crosshair-2-line"></i>
                    <div className=''>
                        <h3 className='text-lg font-medium'>562-11-8</h3>
                        <p className='text-small -mt-1 text-gray-600 '>school, andheri east</p>
                    </div>
                </div>
                <div className='flex items-cente gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-focus-3-fill"></i>
                    <div className=''>
                        <h3 className='text-lg font-medium'>562-11-8</h3>
                        <p className='text-small -mt-1 text-gray-600 '>school, andheri east</p>
                    </div>
                </div>
                <div className='flex items-cente gap-5 p-3 border-b-2'>
                    <i className="ri-currency-line"></i>
                    <div className=''>
                        <h3 className='text-lg font-medium'>₹198.10</h3>
                        <p className='text-small -mt-1 text-gray-600 '>Cash cash</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default WaitingForDriver