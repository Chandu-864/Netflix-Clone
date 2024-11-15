import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Player from './pages/player/Player'
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { auth } from './FireStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigateLogin = useNavigate();

  useEffect( () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("loggedIn!");
        navigateLogin('/')
      }
      else {
        console.log("No user loggedIn")
        navigateLogin('/login')
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme="dark" 
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/player/:id' element = {<Player />} />
    </Routes>
  
  </div>
    
  )
}

export default App