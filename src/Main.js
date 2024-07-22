import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import './styles.css';
import { submitAPI } from './api';

// Dummy fetchAPI function
function fetchAPI(date) {
  console.log(`fetchAPI called with date: ${date}`);
  // Replace this mock data with actual API call
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

export const initializeTimes = () => {
  const today = new Date();
  const date = today.toISOString().split('T')[0]; // Ensure it's in 'yyyy-mm-dd' format
  const times = fetchAPI(date);
  console.log(`initializeTimes: ${times}`);
  return times;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const times = fetchAPI(action.date);
      console.log(`updateTimes: ${times}`);
      return times;
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate('/confirmed'); // Navigate to the booking confirmation page
    }
  };

  return (
    <main className="main-content">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onBookingSubmit={submitForm} />
    </main>
  );
}

export default Main;
