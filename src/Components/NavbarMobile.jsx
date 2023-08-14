import React, { useState } from "react";
import "./NavbarMobile.css";
import { FaAlignRight} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";


const NavbarMobile = (props) => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaAlignRight className='hamburger' onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <AiOutlineClose className='hamburger' onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

 
  return (
    <div>
      {open ? closeIcon : hamburgerIcon}
      <div className={`navbar-mobile-container ${open ? "open" : ""}`}>
        <div className='navlink-mobile'>
          <div className='one'>
            <Link style={{ textDecoration: "none" }}>
              <div onClick={() => closeMobileMenu()}>Home</div>
            </Link>
          </div>

          <div className='one'>
            <Link style={{ textDecoration: "none" }}>
              <div onClick={() => closeMobileMenu()}>Feed</div>
            </Link>
          </div>

          <div className='one'>
            <Link style={{ textDecoration: "none" }}>
              <div onClick={() => closeMobileMenu()}>About Us</div>
            </Link>
          </div>
          <div className='one'>
            <Link style={{ textDecoration: "none" }}>
              <div onClick={() => closeMobileMenu()}>Inquire Now</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;




