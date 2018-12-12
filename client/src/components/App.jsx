import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import LineCard from './LineCard';
import NavBar from './NavBar';
import Sales from './Sales';
import Store from './Store';

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
    const currentState = this.state.menu;
    this.setState({ menu: !currentState });
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }


  render() {
    const { page } = this.state;
    let mainContent = <Home menu={this.state.menu} />;

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
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <a href="#!"><img id="logo" src="gw-logo-website.png" /></a>
            </div>
            <NavBar active={this.state.active} handlePage={this.handlePage} menu={this.state.menu} showMenu={this.showMenu} toggleClass={this.toggleClass} />
          </div>
        </section>
        <div className="cuck">
          { mainContent }
        </div>
      </div>
    );
  }
}

export default App;
