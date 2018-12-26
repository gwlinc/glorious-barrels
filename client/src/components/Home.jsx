import React from 'react';
import Carousel from './Carousel';

function Home(props) {
  const articleImageStyles = {
    paddingTop: '0',
    display: 'block',
    minWidth: '140px',
    minHeight: '28px',
    width: '100%',
<<<<<<< HEAD
    
  }

  var articleTitleStyle = {
    textAlign:"center",
    fontSize:"2em"
  }

  var articleContentStyle = {
    fontSize:'1.25em',
    textAlign:'center'
  }

=======
  };
>>>>>>> 5cf3ce5c497ed510f0b9c7ef862740c336b0dbc7

  let style;
  if (props.active && !props.menu) {
    style = { paddingTop: 300 };
  }
  return (
    <div style={style}>
      <Carousel />
      <div className="articles">
        <div className="article">
          <img src="gwlinc4.jpg" alt="Cutting" style={articleImageStyles} />
          <h1 style={articleTitleStyle}>
            Why GoldenWest?
          </h1>
          <h2 style={articleContentStyle}>
          Situated in the heart of the Los Angeles metropolitan area, Goldenwest Lubricants Inc. has been supplying the valley with high quality lubricants for [INSERT HOW LONG GWLINC HAS EXISTED]. With our extensive catalogue of premium lubricants, GoldenWest is the one stop shop for all your lubricant needs.
          </h2>
        </div>
        <div className="article">
<<<<<<< HEAD
          <img src="gwlinc2.jpg" alt="Cutting" style={articleImageStyles}/>
          <h1 style={articleTitleStyle}>
            Highest Quality Lubricants
=======
          <img src="gwlinc1.jpg" alt="Cutting" style={articleImageStyles} />
          <h1>
            Titles that will blow your mind
>>>>>>> 5cf3ce5c497ed510f0b9c7ef862740c336b0dbc7
          </h1>
          <h2 style={articleContentStyle}>
          Maintaining our high product standards also means that our products must be fresh. Although our products have a long shelf life, we want to make sure you have product that is no older than 90 days. This gives us the added assurance that our products are contaminant free and our customer receives a high quality product.
          </h2>
        </div>
        <div className="article">
<<<<<<< HEAD
          <img src="gwlinc3.jpg" alt="Cutting" style={articleImageStyles}/>
          <h1 style={articleTitleStyle}>
            Industry Leading Support
=======
          <img src="gwlinc1.jpg" alt="Cutting" style={articleImageStyles} />
          <h1>
            Titles that will blow your mind
>>>>>>> 5cf3ce5c497ed510f0b9c7ef862740c336b0dbc7
          </h1>
          <h2 style={articleContentStyle}>
          In house or in the field, our representatives have the knowledge to solve your needs and issues. We have an extensive library of lubrication reference material. This allows us to find equivalents or replacement products quickly and accurately. To make sure that you have the best possible service, we are only able to accept calls weekdays between 8:00 am - 5:00 pm PDT/PST. Call us today!
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
