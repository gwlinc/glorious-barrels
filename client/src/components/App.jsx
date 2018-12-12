import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import LineCard from './LineCard';
import NavBar from './NavBar';
import Sales from './Sales';


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
    this.updateClass = this.updateClass.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateClass);
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

  updateClass() {
    const currentState = this.state.active;
    if (currentState === true && window.innerWidth > 799) {
      this.setState({ active: false });
    } else if (currentState === false && window.innerWidth <= 799) {
      this.setState({ menu: true });
    }
  }


  render() {
    var iconStyle = {
      height:'32px',
    }

    const { page } = this.state;
    let mainContent = <Home menu={this.state.menu} active={this.state.active} />;

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
        <div>
          { mainContent }
        </div>
      </div>
    );
  }
}

export default App;
