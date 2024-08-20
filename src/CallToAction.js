import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function CallToAction() {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate('/booking'); 
  };

  return (
    <header className="container">
      <div className="header-frame">
      <div className="text-content">
        <h1>Little Lemon</h1>
        <p className="location">Chicago</p>
        <p>We are a family owned<br /> Mediterranean restaurant <br />focused on traditional <br />recipes served with a modern twist.</p>
        <button onClick={handleReserveClick}>Reserve a Table</button>
      </div>
      <img src="/images/home.jpg" alt="Little Lemon home" className="header-image"/>
      </div>
    </header>
  );
}

export default CallToAction;
