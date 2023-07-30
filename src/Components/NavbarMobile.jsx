import React, { useState } from "react";
import "./NavbarMobile.css";
import { FaAlignRight} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavbarMobile = (props) => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaAlignRight className='hamburger' onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <AiOutlineClose className='hamburger' onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

  const animatedForm = { opacity: 0, y: -30 };
  const animatedTo = { opacity: 1, y: 0 };
  return (
    <div>
      {open ? closeIcon : hamburgerIcon}
      <div className='navbar-mobile-container'>
        {open && (
          <div className='navlink-mobile'>
            <div className='one'>
              <Link  style={{ textDecoration: "none" }}>
                <div onClick={() => closeMobileMenu()}>
                  <motion.div
                    initial={animatedForm}
                    animate={animatedTo}
                    className='navbar-divstyle'
                  >
                    Home
                  </motion.div>
                </div>
              </Link>
            </div>

            <div className='one'>
              <Link  style={{ textDecoration: "none" }}>
                <div onClick={() => closeMobileMenu()}>
                  <motion.div
                    initial={animatedForm}
                    animate={animatedTo}
                    className='navbar-divstyle'
                  >
                    Feed
                  </motion.div>
                </div>
              </Link>
            </div>

            <div className='one'>
              <Link  style={{ textDecoration: "none" }}>
                <div onClick={() => closeMobileMenu()}>
                  <motion.div
                    initial={animatedForm}
                    animate={animatedTo}
                    className='navbar-divstyle'
                  >
                    About Us
                  </motion.div>
                </div>
              </Link>
            </div>
            <div className='one'>
              <Link  style={{ textDecoration: "none" }}>
                <div onClick={() => closeMobileMenu()}>
                  <motion.div
                    initial={animatedForm}
                    animate={animatedTo}
                    className='navbar-divstyle'
                  >
                   Inquire Now
                  </motion.div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;




