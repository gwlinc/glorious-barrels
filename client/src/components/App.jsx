import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      active: false,
      menu: true,
    };
    this.showMenu = this.showMenu.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.updateClass = this.updateClass.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateClass);
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home active={this.state.active} menu={this.state.menu} />}
          />
          <Route exact path="/about/" component={About} />
          <Route exact path="/linecard/" component={LineCard} />
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/sales/" component={Sales} />
        </Switch>
      </div>
    );
  }
}

export default App;
