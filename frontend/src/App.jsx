import React from 'react'
import {Route, Routes} from 'react-router-dom'
import CaptainSignup from './pages/CaptainSignup'
import Captainlogin from './pages/Captainlogin'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'




const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<Captainlogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
      </Routes>
    </>
  )
}

export default App