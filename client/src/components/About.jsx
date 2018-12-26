import React from 'react';

const AboutUs = (props) => {
  var mainImgStyle = {
    maxwidth: '850px',
    display:'block',
    margin:'0 auto'
  }
  
  var headerStyle = {
    textAlign:"center",
    fontFamily: 'Lobster'
  }

  var h2Style = {
    fontFamily: 'Lobster',
  }


  return (
    <div>
      <h1>
        Southern California's Premium Wholesale Lubricant Provider
      </h1>
        
      <img src="gwlinc+prolong.jpg" style={mainImgStyle} alt="GoldenWest Pomona"></img>

      <p className="figCaption">
      Situated in the heart of the Los Angeles metropolitan area, Goldenwest Lubricants Inc. has been supplying the valley with high quality lubricants for [INSERT HOW LONG GWLINC HAS EXISTED]. With our extensive catalogue of premium lubricants, GoldenWest is the one stop shop for all your lubricant needs.
       
      </p>

      <h2 style={headerStyle}>
      In a Pinch? 2 Day Delivery Guaranteed!
      </h2>
      <p>
      On top of our 2 day guarantee on deliveries in the greater Los Angeles County, GoldenWest strives to meet your every need. With our large fleet of dedicated drivers, we can often deliver same day if you call us up!
      </p>
      <h2 style={headerStyle}>
      Customer Service Is Our Priority
      </h2>
      <p>
      The low prices aren't the only reason why we have so many loyal customers. Our support representatives are ready to take your calls to help you with any questions or scheduling deliveries. In house or in the field, our representatives have the knowledge to solve your needs and issues. We have an extensive library of lubrication reference material. This allows us to find equivalents or replacement products quickly and accurately. To make sure that you have the best possible service, we are only able to accept calls weekdays between 8:00 am - 5:00 pm PDT/PST. Call us today!    
      </p>
      <h2>
      
      </h2>
    </div>
  );
};

export default AboutUs;