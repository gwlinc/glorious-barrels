import React from 'react';

function NavBar(props) {
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
        <li><a id="home" onClick={e => props.handlePage(e)}>Home</a></li>
        <li><a id="about" onClick={e => props.handlePage(e)}>About</a></li>
        <li><a id="line" onClick={e => props.handlePage(e)}>Line Card</a></li>
        <li><a id="contact" onClick={e => props.handlePage(e)}>Contact</a></li>
        <li><a id="sales" onClick={e => props.handlePage(e)}>Sales</a></li>
        <li><a id="store" onClick={e => props.handlePage(e)}>Store</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
