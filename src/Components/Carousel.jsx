import React from 'react'
import './Slider.css'
import './testSlider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../Assests/image1.jpeg";
import Image2 from "../Assests/image2.jpeg";
import Image3 from "../Assests/image3.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

import { EffectCoverflow, Pagination} from "swiper/modules";
import { Autoplay } from 'swiper/modules';
import SwiperCore from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);


const Carousel = () => {
  return (
    <div className='container'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed='5000'
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }} 
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        //   clickable: true,
        // }}
        className='swiper_container'
      >
        <SwiperSlide>
          <div className='details-container'>
            <div className='info-container'>
              <div>
                <img src={Image1} alt='client' />
              </div>
              <div className='details-client'>
                <h3>FULL NAME / COMPANY NAME</h3>
                <h5>MARCH 15, 2023</h5>
                <p>
                  is one of the largest support services conglomerates in the
                  UAE, Specializing in Industrial and Corporate Catering,
                  Facilities Management, Engineering, Food Distribution, Retail
                  and F&B. With its headquarters in Abu Dhabi, the company
                  adheres to the highest international standards within its
                  industries; all by leveraging on its experienced management
                  team and workforce as well as their uncompromising approach
                  towards satisfying our clients’ requirements.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='details-container'>
            <div className='info-container'>
              <div>
                <img src={Image2} alt='client' />
              </div>
              <div className='details-client'>
                <h3>FULL NAME / COMPANY NAME</h3>
                <h5>MARCH 15, 2023</h5>
                <p>
                  is one of the largest support services conglomerates in the
                  UAE, Specializing in Industrial and Corporate Catering,
                  Facilities Management, Engineering, Food Distribution, Retail
                  and F&B. With its headquarters in Abu Dhabi, the company
                  adheres to the highest international standards within its
                  industries; all by leveraging on its experienced management
                  team and workforce as well as their uncompromising approach
                  towards satisfying our clients’ requirements.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='details-container'>
            <div className='info-container'>
              <div>
                <img src={Image3} alt='client' />
              </div>
              <div className='details-client'>
                <h3>FULL NAME / COMPANY NAME</h3>
                <h5>MARCH 15, 2023</h5>
                <p>
                  is one of the largest support services conglomerates in the
                  UAE, Specializing in Industrial and Corporate Catering,
                  Facilities Management, Engineering, Food Distribution, Retail
                  and F&B. With its headquarters in Abu Dhabi, the company
                  adheres to the highest international standards within its
                  industries; all by leveraging on its experienced management
                  team and workforce as well as their uncompromising approach
                  towards satisfying our clients’ requirements.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <ion-icon name='arrow-back-outline'></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div>
          <div className='swiper-pagination'></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default Carousel
