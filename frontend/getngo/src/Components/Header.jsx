import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

  // hamburger
  const [clicked, setClicked] = useState(true);
      const toggleMenu = () => {
        setClicked(!clicked);
      };

  return (
    <nav>
      <h1>GetnGo</h1>
      <main className= {` nav-bar-rs ${clicked ? "nav-rs-appear" : "nav-main-rs" }`}>
        <HashLink to = "/" className="active nav-rs">Home</HashLink> 
        <HashLink to = "/servies" className="nav-rs">Services</HashLink>
        <HashLink to = "/option" className="nav-rs">Option</HashLink>
        <Link to = "/signIn" className="nav-rs">Sign-Up</Link>
      </main>
      <div className="hamburger-btn" onClick={toggleMenu}>{clicked ? <FaBars className="hamburger" /> : <FaTimes/> }</div>
    </nav>
  )
}

export default Header;
