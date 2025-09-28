import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Reserve a Table</h1>
        <p>We look forward to hosting you at Little Lemon!</p>
      </div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default BookingPage;
