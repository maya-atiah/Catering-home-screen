import React from "react";
import logo from "../Assests/logo.png";
import Navbar from "./Navbar";
import './NavHead.css'
import NavbarMobile from "./NavbarMobile";



const NavHead = () => {
  return (
    <div className='navhead-container'>
      <div>
        <img src={logo} alt='catering logo' className='logo-class' />
      </div>
      <div className="navbar-desktop">
        <Navbar />
      </div>
      <div className='nav-mobile'>
        <NavbarMobile />
      </div>
    </div>
  );
};

export default NavHead;
