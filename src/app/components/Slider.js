import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Arrow from './Arrow';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
const Sliders = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div>
                <Slider {...settings} className='banner-slider'>
                    <div>
                        <img
                            src='/hero1.png'
                        />
                    </div>
                    <div>
                        <img
                            src='/hero2.png'
                        />
                    </div>
                    <div>
                        <img
                            src='/hero6.jpeg'
                        />
                    </div>
                    <div>
                        <img
                            src='/hero4.jpeg'
                        />
                    </div>
                    <div>
                        <img
                            src='/hero5.jpeg'
                        />
                    </div>
                    <div>
                        <img
                            src='/hero1.png'
                        />
                    </div>
                    <div>
                        <img
                            src='/hero1.png'
                        />
                    </div>
                    <div>
                        <img
                            src='/hero1.png'
                        />
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Sliders