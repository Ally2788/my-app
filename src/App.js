import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './HomePage';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'; // Import the ConfirmedBooking component
import Specials from './Specials';

function App() {
  return (
    <div className="container">
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Chicago/>}/>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* Add route for ConfirmedBooking */}
          <Route path="/order" element={<Specials/>} />
        </Routes>
        <Footer />
      </>
    </Router>
    </div>
  );
}

export default App;
