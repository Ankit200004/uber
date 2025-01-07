import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState('')
  const vehicleFoundRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const WaitingForDriverRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) =>{
    e.preventDefault()
  }

  useGSAP(function(){
    if (panelOpen) {
      gsap.to(panelRef.current,{
        height: '70%',
        padding:24
        // opacity:1
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
        // opacity:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })
    }else{
      gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
    }
  }, [vehiclePanel])

  useGSAP(function(){
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)'
    })
    }else{
      gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(100%)'
    })
    }
  }, [confirmRidePanel])

  useGSAP(function(){
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current,{
      transform:'translateY(0)'
    })
    }else{
      gsap.to(vehicleFoundRef.current,{
      transform:'translateY(100%)'
    })
    }
  }, [vehicleFound])

  useGSAP(function(){
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current,{
      transform:'translateY(0)'
    })
    }else{
      gsap.to(WaitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'/>

      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img
         className='h-full w-full object-cover' 
         src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" 
         alt="" />
      </div>
      <div 
      className='absolute h-screen w-full top-0 flex flex-col justify-end'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 
          ref={panelCloseRef}
          onClick={()=>{
            setPanelOpen(false)
          }}
          className='absolute opacity-0 top-6 right-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold '>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 top-[45%] left-10 w-1 bg-gray-900 rounded-full"></div>
          <input 
          onClick={(e)=>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          className='bg-[#eee] w-full mb-5 px-12 py-2 text-lg rounded-lg' 
          type="text" 
          placeholder='Add a pick-up location'/>
          <input 
          onClick={(e)=>{
            setPanelOpen(true)
          }}
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full' 
          type="text" 
          placeholder='Enter your destination'/>
        </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
          <LocationSearchPanel 
          setPanelOpen={setPanelOpen} 
          setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full bg-white z-10 translate-y-full bottom-0 pt-12 py-10 px-3'>
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel}
        setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full bg-white z-10 translate-y-full bottom-0 p-3 py-6 px-3 pt-12'>
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel}
        setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full bg-white z-10 translate-y-full bottom-0 p-3 py-6 px-3 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={WaitingForDriverRef} className='fixed w-full bg-white z-10 bottom-0 p-3 py-6 px-3 pt-12'>
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
      </div>
  )
}

export default Home