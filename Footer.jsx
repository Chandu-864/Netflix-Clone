import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-list-items'>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms Of Use</li>
          <li>privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <div className="footer-items">
          <div className='allButtons'>
            <button><FaFacebookF /></button>
            <button><FaInstagram /></button>
            <button><FaTwitter /></button>
            <button><FaYoutube /></button>
          </div>
          <div className='copyright'>
            <p>@ 1997 - {new Date().getFullYear()} Netflix. Inc</p>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Footer