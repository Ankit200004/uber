import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 
        className='p-1 text-center absolute w-[93%] top-0'
        onClick={()=>{
          props.setVehiclePanel(false)
        }}
        ><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div
            onClick={()=>{
              props.setConfirmRidePanel(true)
            }}
            className='flex mb-2 p-3 w-full items-center border-2 active:border-black bg-gray-100 rounded-xl justify-between'>
              <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png" alt="" />
              <div className=' w-1/2 '>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-medium text-xs text-gray-600'>Afforadable, compact rides</p>
              </div>
              <h2 className='text-xl font-semibold'>₹198.10</h2>
            </div>
            <div
            onClick={()=>{
              props.setConfirmRidePanel(true)
            }}
            className='flex mb-2 p-3 w-full items-center border-2 active:border-black bg-gray-100 rounded-xl justify-between'>
              <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
              <div className='ml-2 w-1/2 '>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>1 mins away</h5>
              <p className='font-medium text-xs text-gray-600'>Afforadable, compact rides</p>
              </div>
              <h2 className='text-xl font-semibold'>₹150.4</h2>
            </div>
            <div
             onClick={()=>{
              props.setConfirmRidePanel(true)
            }}
            className='flex mb-2 p-3 w-full items-center border-2 active:border-black bg-gray-100 rounded-xl justify-between'>
              <img className='h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
              <div className='ml-2 w-1/2 '>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>1 mins away</h5>
              <p className='font-medium text-xs text-gray-600'>Afforadable, compact rides</p>
              </div>
              <h2 className='text-xl font-semibold'>₹150.4</h2>
            </div>
    </div>
  )
}

export default VehiclePanel