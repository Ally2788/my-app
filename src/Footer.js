import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="container">
        <div className="logo">
            <img src="footer.logo.png" alt="Little Lemon Logo" style={{width: '183px', height: '260px'}}/>
        </div>
      <div className="footer-nav">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </div>
      <div className="social-media">
        <h3>Social Media Links</h3>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </div>
    </footer>
  );
}

export default Footer;
