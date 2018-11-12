import React from 'react';
import Carousel from './Carousel';

function Home() {
  return (
    <div>
      <div className="mainImg">
        <Carousel />
      </div>
      <div className="smallbox">
        <div className="articles">
          <div className="article">
            <img src="gwlinc+prolong.jpg" alt="Cutting" />
            <h1>
              About Us
            </h1>
            <h2>
              Descriptions of GoldenWest
            </h2>
          </div>
          <div className="article">
            <img src="gwlinc1.jpg" alt="Cutting" />
            <h1>
              Titles that will blow your mind
            </h1>
            <h2>
              Descriptions of the current stuff
            </h2>
          </div>
          <div className="article">
            <img src="gwlinc1.jpg" alt="Cutting" />
            <h1>
              Titles that will blow your mind
            </h1>
            <h2>
              Descriptions of the current stuff
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
