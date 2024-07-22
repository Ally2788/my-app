import React from 'react';
import './styles.css';

function CallToAction() {
  return (
    <header className="container">
      <img src="home.jpg" alt="Little Lemon home" className="header-image"/>
      <div className="text-content">
        <h1>Little Lemon</h1>
        <p className="location">Chicago</p>
        <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
    </header>
  );
}

export default CallToAction;
