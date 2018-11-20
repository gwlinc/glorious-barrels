import React from 'react';

function NavBar(props) {
  return (
    <ul className="navBar">
      <li id ="home" className="navBar-button" onClick={e => props.handlePage(e)}>Home</li>
      <li id="about" className="navBar-button" onClick={e => props.handlePage(e)}>About Us</li>
      <li id="line" className="navBar-button" onClick={e => props.handlePage(e)}>Line Card</li>
      <li id="contact" className="navBar-button" onClick={e => props.handlePage(e)}>Contact Us</li>
      <li id="sales" className="navBar-button" onClick={e => props.handlePage(e)}>Current Sales</li>
      <li id="store" className="navBar-button" onClick={e => props.handlePage(e)}>Store</li>
    </ul>
  );
}

export default NavBar;
