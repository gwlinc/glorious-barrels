import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  if (props.active) {
    return (
      <nav>
        <div className="nav-mobile">
          <a
            id="nav-toggle"
            className={props.active ? 'active': null } 
            onClick={(e) => {props.toggleClass(e); props.showMenu(e)}}>
            <span />
          </a>
        </div>
        <ul className="nav-list" style={{ display: props.menu ? 'none' : 'block' }}>
          <li id="home" onClick={e => {props.showMenu(e); props.toggleClass(e)}}><Link to="/">Home</Link></li>
          <li id="about" onClick={e => {props.showMenu(e); props.toggleClass(e)}}><Link to="/about">About</Link></li>
          <li id="line" onClick={e => {props.showMenu(e); props.toggleClass(e)}}><Link to="/contact">Contact</Link></li>
          <li id="contact" onClick={e => {props.showMenu(e); props.toggleClass(e)}}><Link to="/linecard">Line Card</Link></li>
          <li id="sales" onClick={e => {props.showMenu(e); props.toggleClass(e)}}><Link to="/sales">Sales</Link></li>
          <li><a id="store" href="http://www.gwlinc.com/eStore/default.aspx">Store</a></li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="nav-mobile">
          <a
            id="nav-toggle"
            className={props.active ? 'active': null } 
            onClick={(e) => {props.toggleClass(e); props.showMenu(e)}}>
            <span />
          </a>
        </div>
        <ul className="nav-list" style={{ display: props.menu ? 'none' : 'block' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/linecard">Line Card</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><a id="store" href="http://www.gwlinc.com/eStore/default.aspx">Store</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
