import React from 'react';

function NavBar(props) {
  return (
    <div className="navBar">
      <button type="button" className="NavButton" onClick={e => props.handlePage(e)}>Home</button>
      <button type="button" className="NavButton" onClick={e => props.handlePage(e)}>About Us</button>
      <button type="button" className="NavButton" onClick={e => props.handlePage(e)}>Line Card</button>
      <button type="button" className="NavButton" onClick={e => props.handlePage(e)}>Contact Us</button>
      <button type="button" className="NavButton" onClick={e => props.handlePage(e)}>Current Sales</button>
      <button type="button" className="NavButton" onClick={e => props.handlePage(e)}>Store</button>
    </div>
    // <ul className="navBar">
    //   <li className="home button" onClick={e => props.handlePage(e)}>Home</li>
    //   <li className="about button" onClick={e => props.handlePage(e)}>About Us</li>
    //   <li className="line button" onClick={e => props.handlePage(e)}>Line Card</li>
    //   <li className="contact button" onClick={e => props.handlePage(e)}>Contact Us</li>
    //   <li className="sales button" onClick={e => props.handlePage(e)}>Current Sales</li>
    //   <li className="store button" onClick={e => props.handlePage(e)}>Store</li>
    // </ul>
  );
}

export default NavBar;
