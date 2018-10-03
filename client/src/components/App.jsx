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
          <div className="menu box">
            Menu
            {/* <Menu /> */}
          </div>
          <div className="logo box">Logo</div>
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
