import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './BookingStyles.css';

const BookingForm = ({ availableTimes, onBookingSubmit }) => {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: ''
    },
    validationSchema: Yup.object({
      date: Yup.string().required('Please choose a date.'),
      time: Yup.string().required('Please choose a time.'),
      guests: Yup.number().min(1, 'Please enter a number of guests between 1 and 10.').max(10, 'Please enter a number of guests between 1 and 10.').required('Please enter the number of guests.'),
      occasion: Yup.string().required('Please select an occasion.')
    }),
    onSubmit: (values, { resetForm }) => {
      onBookingSubmit(values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="booking-form" style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <div className="booking-input">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.date && formik.errors.date ? 'input-error' : ''}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="error">{formik.errors.date}</div>
        ) : null}
      </div>

      <div className="booking-input">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.time && formik.errors.time ? 'input-error' : ''}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div className="error">{formik.errors.time}</div>
        ) : null}
      </div>

      <div className="booking-input">
        <label htmlFor="guests">Number of guests</label>
        <select
          id="guests"
          name="guests"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.guests && formik.errors.guests ? 'input-error' : ''}
        >
          <option value="">Select number of guests</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
        {formik.touched.guests && formik.errors.guests ? (
          <div className="error">{formik.errors.guests}</div>
        ) : null}
      </div>

      <div className="booking-input">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.occasion && formik.errors.occasion ? 'input-error' : ''}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div className="error">{formik.errors.occasion}</div>
        ) : null}
      </div>

      <button type="submit" className="submit-btn" disabled={!formik.isValid || formik.isSubmitting}>Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
