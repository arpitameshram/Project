import React from "react";
import { Link } from "react-router-dom";
import {  FaBagShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img
            className="Plant Petals"
            src="images/logo.webp"
            alt="Plant Petals"
          />
        </Link>
      </div>
      <nav className="nav-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/bag" className="nav-link">Bag</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        
        
        <Link to="/registration" className="nav-link">Register</Link>
      </nav>
      
        
        <div>
     
      

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
