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
        style={{ ...style, display: "block", background:'#db5f7a' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:'#db5f7a' }}
        onClick={onClick}
      />
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
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e2.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e3.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                             src='/e4.png'
                             className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e5.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e6.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e7.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>

                    <div>
                        <img
                            src='/e1.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e2.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    <div>
                        <img
                            src='/e3.png'
                            className='aspect-[3/2] p-2'
                        />
                    </div>
                    
                </Slider>
            </div>

        </>
    )
}

export default SliderTwo