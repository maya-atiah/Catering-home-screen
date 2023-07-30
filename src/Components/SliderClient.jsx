import React, { useState } from 'react'
import Slider from "react-slick";
import './Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientIcon from '../Assests/clientIcon.png'
import Image1 from '../Assests/image1.jpeg'
import Image2 from "../Assests/image2.jpeg";
import Image3 from "../Assests/image3.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const SliderClient = () => {

  const [imageIndex,setImageIndex]=useState(0)
   const NextArrow = ({ onClick }) => {
     return (
       <div className='arrow next' onClick={onClick}>
         <FaArrowRight />
       </div>
     );
   };

   const PrevArrow = ({ onClick }) => {
     return (
       <div className='arrow prev' onClick={onClick}>
         <FaArrowLeft />
       </div>
     );
   };
  
  var settings = {
    dots: false,
    infinite: true,
    lazyload: true,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 500,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const clientsFeedback = [
    {
      name: "FULL NAME / COMPANY NAME",
      date: "MARCH 15, 2023",
      feedback:
        " is one of the largest support services conglomerates in the UAEe Specializing in Industrial and Corporate Catering, FacilitiesManagement, Engineering, Food Distribution, Retail and F&B. Withits headquarters in Abu Dhabi, the company adheres t highest international standards within its industries; all byleveraging on its experienced management team and workforce as well as their uncompromising approach towards satisfying ouclients requirements.",
      image: Image1,
    },
    {
      name: "FULL NAME / COMPANY NAME",
      date: "April 15, 2023",
      feedback:
        " is one of the largest support services conglomerates in the UAEe Specializing in Industrial and Corporate Catering, FacilitiesManagement, Engineering, Food Distribution, Retail and F&B. Withits headquarters in Abu Dhabi, the company adheres t highest international standards within its industries; all byleveraging on its experienced management team and workforce as well as their uncompromising approach towards satisfying ouclients requirements.",
      image: Image2,
    },
    {
      name: "FULL NAME / COMPANY NAME",
      date: "April 15, 2023",
      feedback:
        " is one of the largest support services conglomerates in the UAEe Specializing in Industrial and Corporate Catering, FacilitiesManagement, Engineering, Food Distribution, Retail and F&B. Withits headquarters in Abu Dhabi, the company adheres t highest international standards within its industries; all byleveraging on its experienced management team and workforce as well as their uncompromising approach towards satisfying ouclients requirements.",
      image: Image3,
    },
    {
      name: "FULL NAME / COMPANY NAME",
      date: "April 15, 2023",
      feedback:
        " is one of the largest support services conglomerates in the UAEe Specializing in Industrial and Corporate Catering, FacilitiesManagement, Engineering, Food Distribution, Retail and F&B. Withits headquarters in Abu Dhabi, the company adheres t highest international standards within its industries; all byleveraging on its experienced management team and workforce as well as their uncompromising approach towards satisfying ouclients requirements.",
      image: Image2,
    },
  ];
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {
          clientsFeedback.map((item,index) => {
            return (
              <div className={index=== imageIndex ?"slide activeSlide" : "slide"}>
                <div className='details-container'>
                  <div className='info-container'>
                    <div>
                      <img src={item.image} alt='client' />
                    </div>
                    <div className='details-client'>
                      <h3>{item.name}</h3>
                      <h5>{item.date}</h5>
                      <p>{item.feedback}</p>
                    </div>
                  </div>
                  <div className='icon-client-container'>
                    <img src={ClientIcon} alt='icon' />
                  </div>
                </div>
              </div>
            );
          })
        }
      
       
      </Slider>
    </div>
  );
}

export default SliderClient
