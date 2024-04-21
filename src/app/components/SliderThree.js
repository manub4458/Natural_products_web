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
        style={{
          ...style,
          display: 'block',
          background: '#db5f7a', // Change the background color here
         
          
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
          background: '#db5f7a', // Change the background color here
         
          
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
const SliderThree = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className='gap-x-6'>
                <Slider {...settings} className='banner-slider  '>
                    <div>
                        <img
                           src="/cer1.jpg"
                            className='aspect-[3/4] p-2 '
                        />
                    </div>
                    <div>
                        <img
                            src="/cer2.jpg"
                            className='aspect-[3/4] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src="/cer3.jpg"
                            className='aspect-[3/4] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src="/cer4.jpg"
                             className='aspect-[3/4] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src="/cer5.jpg"
                            className='aspect-[3/4] p-2'
                        />
                    </div>
                    <div>
                        <img
                           src="/cer6.jpg"
                            className='aspect-[3/4] p-2'
                        />
                    </div>
                    <div>
                        <img
                           src="/cer7.jpg"
                            className='aspect-[3/4] p-2'
                        />
                    </div>

                    <div>
                        <img
                           src="/cer1.jpg"
                            className='aspect-[3/4] p-2 '
                        />
                    </div>
                    <div>
                        <img
                            src="/cer2.jpg"
                            className='aspect-[3/4] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src="/cer3.jpg"
                            className='aspect-[3/4] p-2'
                        />
                    </div>
                    
                </Slider>
            </div>

        </>
    )
}

export default SliderThree