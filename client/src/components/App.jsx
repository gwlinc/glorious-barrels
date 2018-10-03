import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
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
    );
  }
}

export default App;
