import React, { useEffect } from "react";
import "./Clients.css";

import "aos/dist/aos.css";
import Aos from "aos";
import Carousel from "../Components/Carousel";

const Clients = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });

    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='clients-title-container'>
      <div className='clients-title-container-details' data-aos='fade-left'>
        <h2>What our</h2>
        <h1>Clients Say</h1>
        <p>
          Our main goal is to become a perfect partner for our client’s
          businesses & to adapt quickly to evolving new market developments.
        </p>
      </div>
      {/* <SliderClient /> */}
      <div data-aos='zoom-in'>
        <Carousel />
      </div>
    </div>
  );
};

export default Clients;
