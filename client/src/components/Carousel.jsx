import React from 'react';
import Slider from 'react-slick';

function Carousel() {
  var mainCaroselImageStyles = {
    paddingTop: '0',
    display: 'block',
    minWidth:'140px',
    minHeight:'28px',
    width: '100%',
    height: '100%',
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="gwlinc1.jpg" alt="Cutting" style={mainCaroselImageStyles} />
      </div>
      <div>
        <img src="gwlinc2.jpg" alt="Cutting" style={mainCaroselImageStyles}/>
      </div>
      <div>
        <img src="gwlinc3.jpg" alt="Cutting" style={mainCaroselImageStyles}/>
      </div>
      <div>
        <img src="gwlinc4.jpg" alt="Cutting" style={mainCaroselImageStyles}/>
      </div>
      <div>
        <img src="gwlinc5.jpg" alt="Cutting" style={mainCaroselImageStyles}/>
      </div>
      <div>
        <img src="gwlinc6.jpg" alt="Cutting" style={mainCaroselImageStyles}/>
      </div>
    </Slider>
  );
}

export default Carousel;
