import React from 'react';
import * as Sentry from '@sentry/browser';
import config from '../../../config';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import LineCard from './LineCard';
import NavBar from './NavBar';
import Sales from './Sales';
import Store from './Store';


Sentry.init({
  dsn: config.reactdsn,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null,
    };
    this.handlePage = this.handlePage.bind(this);
  }

  handlePage(e) {
    this.setState({ page: e.target.id });
  }

  render() {
    try {
      console.log(this.doesntExist.heyo);
    } catch (err) {
      Sentry.captureException(err);
    }
    const { page } = this.state;
    let mainContent = <Home />;

    if (page === 'about') {
      mainContent = <About />;
    }
    if (page === 'line') {
      mainContent = <LineCard />;
    }
    if (page === 'contact') {
      mainContent = <Contact />;
    }
    if (page === 'sales') {
      mainContent = <Sales />;
    }
    if (page === 'store') {
      mainContent = <Store />;
    }
    return (
      <div>
        <div id="header">
          <div className="wrapper">
            <div className="logo box">
              <img src="Goldenwest-Logo.png" alt="goldenWest logo" />
            </div>
            <div className="search box">
              Search
              {/* <Search /> */}
            </div>
          </div>
        </div>
        <div>
          <NavBar handlePage={this.handlePage} />
        </div>
        <div>
          { mainContent }
        </div>
      </div>
    );
  }
}

export default App;
