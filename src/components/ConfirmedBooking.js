import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <div className="confirmation-page">
      <div className="confirmation-content">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for choosing Little Lemon. Your table has been successfully reserved.</p>
        <p>You will receive a confirmation email with your booking details shortly.</p>
        <Link to="/" className="home-button">Return to Home</Link>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
