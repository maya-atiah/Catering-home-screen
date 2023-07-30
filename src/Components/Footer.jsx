import React from 'react'
import logo from '../Assests/logo.png'
import './Footer.css'
    
const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div className='footer-menu'>
        <div>ABOUT</div>
        <div>CERTIFICATIONS</div>
        <div>SERVICES</div>
        <div>OUR CLIENTS</div>
        <div>TEAM</div>
        <div>CAREERS</div>
        <div>PRIVACY POLICY</div>
        <div>TERMS & CONDITION</div>
      </div>
    </div>
  );
}

export default Footer
