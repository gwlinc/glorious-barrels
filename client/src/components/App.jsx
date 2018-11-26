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
      active: false,
      menu: true,
    };
    this.handlePage = this.handlePage.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  handlePage(e) {
    this.setState({ page: e.target.id });
  }

  showMenu() {
    console.log('workingmenu')
    const currentState = this.state.menu;
    this.setState({ menu: !currentState });
  }

  toggleClass(e) {
    console.log('e.target.id')
    const currentState = this.state.active;
    this.setState({ active: !currentState });
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
        {/* <div id="header">
          <div className="wrapper">
            <div className="logo box">
              <img src="Goldenwest-Logo.png" alt="goldenWest logo" />
            </div>
            <div className="search box">
              Search */}
              {/* <Search /> */}
            {/* </div>
          </div>
        </div> */}
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <a href="#!"><img id="logo" src="gw-logo-website.png" /></a>
            </div>
            <NavBar active={this.state.active} handlePage={this.handlePage} menu={this.state.menu} showMenu={this.showMenu} toggleClass={this.toggleClass} />
          </div>
        </section>
        <div>
          { mainContent }
        </div>
      </div>
    );
  }
}

export default App;
