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
const SliderTwo = () => {
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
                            src='/e1.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e2.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e3.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                             src='/e4.png'
                            alt='slider'

                             className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e5.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e6.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e7.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>

                    <div>
                        <img
                            src='/e1.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e2.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e3.png'
                            alt='slider'

                            className='object-contain p-2'
                        />
                    </div>
                    
                </Slider>
            </div>

        </>
    )
}

export default SliderTwo