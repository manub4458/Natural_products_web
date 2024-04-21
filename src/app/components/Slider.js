import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Arrow from './Arrow';
// import "./globals.css";
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background:'#db5f7a' }}
//         onClick={onClick}
//       />
//     );
//   }
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: '#', // Change the background color here
         
          
          borderRadius: '50%', // Make it circular
          
          lineHeight: '25px', // Center the icon vertically
          fontSize: '20px', // Set the font size of the icon
        }}
        onClick={onClick}
      >
        {'>'}
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: '#', // Change the background color here
         
          
          borderRadius: '50%', // Make it circular
          
          lineHeight: '25px', // Center the icon vertically
          fontSize: '20px', // Set the font size of the icon
        }}
        onClick={onClick}
      >
        {'>'}
      </div>
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
                            src='/hero7.jpeg'
                        />
                    </div>
                    
                    
                </Slider>
            </div>

        </>
    )
}

export default Sliders