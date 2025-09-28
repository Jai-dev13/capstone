import React from 'react';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate('/booking');
  };

  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2>Welcome to Little Lemon</h2>
        <p>Experience the finest Mediterranean cuisine in Chicago</p>
        <button 
          onClick={handleReservation}
          className="cta-button"
          aria-label="Reserve a table at Little Lemon"
        >
          Reserve a Table
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
