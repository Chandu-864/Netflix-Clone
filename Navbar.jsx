import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../FireStorage'

const Navbar = () => {

  const navRef = useRef();

  useEffect( () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 240) {
        navRef.current.classList.add('nav-dark');
      }
      else {
        navRef.current.classList.remove('nav-dark');
      }
    })
  })

  const navigate1 = useNavigate();

  return (
    <div className='navbar' ref={navRef}>

      <div className="navbar-left">
        <img src={logo} alt="" onClick={() =>navigate1('/login')} />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <p>Guest</p>
        <img src={bell_icon} alt="" className='icons' />

        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />
          <div className="signout">
            <p onClick={ () => logOut()}>sign out of netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar