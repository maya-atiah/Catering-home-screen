import React, { useEffect, useState } from "react";
import "./ListItems.css";
import Arrow from "../Assests/LeftAr.png";
import Catering from "../Assests/catering.png";

const ListItems = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [arrowHovered, setArrowHovered] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const handleArrowHover = (hovered) => {
    setArrowHovered(hovered);
  };

  const menuData = [
    {
      title: "Contract Catering",
      details: "Details for Title 1",
    },
    {
      title: "Hospitality Catering",
      details: "Details for Title 2",
    },
    {
      title: "Healthy Meal Plans",
      details: "Details for Title 3",
    },
    {
      title: "Workers Accommodation",
      details: "Details for Title 4",
    },
    {
      title: "Housekeeping & Laundry",
      details: "Details for Title 5",
    },
    {
      title: "Facilities Management",
      details: "Details for Title 6",
    },
  ];
  useEffect(() => {
    const handleMouseEnter = () => {
      document.body.classList.add("black-background");
    };

    const handleMouseLeave = () => {
      document.body.classList.remove("black-background");
    };

    const arrowImages = document.querySelectorAll(".title");
    arrowImages.forEach((arrowImage) => {
      arrowImage.addEventListener("mouseenter", handleMouseEnter);
      arrowImage.addEventListener("mouseleave", handleMouseLeave);
    });

  
    return () => {
      arrowImages.forEach((arrowImage) => {
        arrowImage.removeEventListener("mouseenter", handleMouseEnter);
        arrowImage.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      <ul className='menu'>
        {menuData.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${activeItem === index ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <div className='title-container'>
              <div
                className='title'
                onMouseEnter={() => handleArrowHover(true)}
                onMouseLeave={() => handleArrowHover(false)}
              >
                {item.title}
              </div>

              <img
                src={Arrow}
                alt='left arrow'
                className='left-arrow-details'
              />
            </div>
            <div className='details'>{item.details}</div>
            <div>
              {arrowHovered && (
                <div className='popup'>
                  <div className='popup-inner'>
                    <img
                      className='catering-image'
                      src={Catering}
                      alt='Catering'
                    />
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
