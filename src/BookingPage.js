import React, { useState, useEffect } from 'react';
import './BookingStyles.css';
import Main from './Main';
import BookingTable from './BookingTable';
import { fetchBookings } from './api';

function BookingPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBookings();
      setBookings(data);
    };
    fetchData();
  }, []);

  return (
    <div className="booking">
      <h2>Book a Table</h2>
      <Main />
      <BookingTable bookings={bookings} />
    </div>
  );
}

export default BookingPage;
