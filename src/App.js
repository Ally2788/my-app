import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'; // Import the ConfirmedBooking component

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* Add route for ConfirmedBooking */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
