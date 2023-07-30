import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-scroll";
import './Sidebar.css'
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const menuRef = useRef()
  
 const toggleSidebar = () => {
   setIsOpen(!isOpen);
 };

  const handleDocumentClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

   useEffect(() => {
    
     document.addEventListener("click", handleDocumentClick);

     return () => {
       document.removeEventListener("click", handleDocumentClick);
     };
   }, []);


  return (
    <div className='Navbar-container'>
      <div className='sections-container'>
        <div>Home</div>
        <div> About Us</div>
        <Link
          to='services'
          spy={true}
          smooth={true}
          offset={-100}
          duration={900}
        >
          <div div='services'>Services</div>
        </Link>
      </div>
      <div className='menu-navbar'>
        <div className='inquire-style'> INQUIRE NOW</div>
        <div className='menu-icon' onClick={toggleSidebar} ref={menuRef}>
          <BiMenuAltLeft />
          <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
            <span onClick={() => setIsOpen(false)} className='close-button'>
              <AiOutlineClose />
            </span>
            <div>SUBSIDIARIES</div>
            <div>SERVICES</div>
            <div>OUR CLIENTS</div>
            <div>TEAM</div>
            <div>CAREERS</div>
            <div>PRIVACY POLICY</div>
            <div>TERMS & CONDITION</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
