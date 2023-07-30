import React, { useEffect } from "react";
import ListItems from "./ListItems";
import "./Services.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Services = () => {
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
    <div className='services-container'>
      <div data-aos='fade-right'>
        <h3>Our</h3>
        <h1>Services</h1>
        <p>
          is one of the largest support services conglomerates in the UAE,
          Specializing in Industrial and Corporate Catering, Facilities
          Management, Engineering, Food Distribution, Retail and F&B.
        </p>
      </div>
      <div className='itemslist-container' data-aos='fade-up'>
        <ListItems />
      </div>
    </div>
  );
};

export default Services;
