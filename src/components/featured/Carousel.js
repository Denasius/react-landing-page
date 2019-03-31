import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image_one from '../../resources/images/slide_one.jpg';
import image_two from '../../resources/images/slide_two.jpg';
import image_three from '../../resources/images/slide_three.jpg';

const Carousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500
  }
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow:"hidden"
      }}
    >
      <Slider {...settings}>

        <div>
          <div 
            className="carrousel_image"
            style={{
              background:`url(${image_one})`,
              height:`${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div 
            className="carrousel_image"
            style={{
              background:`url(${image_two})`,
              height:`${window.innerHeight}px`
            }}
          ></div>
        </div>

        <div>
          <div 
            className="carrousel_image"
            style={{
              background:`url(${image_three})`,
              height:`${window.innerHeight}px`
            }}
          ></div>
        </div>

      </Slider>
    </div>
  );
};

export default Carousel;