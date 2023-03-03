import React from 'react';
import "./Navbar.css";
import hamburger from './hamburger-menu.svg';

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-name'>
           <div>Sukru Oguz Dizdaroglu</div> 
           <img src={hamburger} alt="hamburgerNenu"  />
            </div>
        <div className='navbar-links-container'>
            <a href='#home'>Home</a>
            <a href='#aboutme'>About Me</a>
            <a href='#technologies'>Technologies</a>
            <a href='#portfolio'>Portfolio</a>
            <a href='#contact'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar