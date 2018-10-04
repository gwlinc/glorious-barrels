import React from 'react';
import Carousel from './Carousel'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <div id="nav-bar">
        <div className="wrapper">
          <div className="logo box"><img src="Goldenwest-Logo.png" alt="goldenWest logo" />
          </div>
          <div className="search box">
            Search
            {/* <Search /> */}
          </div>
        </div>
      </div>
      <div className="mainImg">
        <Carousel></Carousel>
      </div>
      <div className="smallbox">
        <div className="articles">
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
}

export default App;
