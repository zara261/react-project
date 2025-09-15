import React from 'react';
import './Navbar.css'; // CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Digicsol</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
