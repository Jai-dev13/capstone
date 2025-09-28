import React, { useState, useEffect, useCallback } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0];

  // Validation functions
  const validateDate = useCallback((date) => {
    if (!date) return 'Date is required';
    if (new Date(date) < new Date(today)) return 'Date cannot be in the past';
    return '';
  }, [today]);

  const validateGuests = useCallback((guests) => {
    if (!guests) return 'Number of guests is required';
    if (guests < 1) return 'Must have at least 1 guest';
    if (guests > 10) return 'Maximum 10 guests allowed';
    return '';
  }, []);

  // Validate form on any field change
  useEffect(() => {
    const newErrors = {
      date: validateDate(date),
      guests: validateGuests(guests),
    };
    setErrors(newErrors);
    
    // Form is valid if there are no error messages
    setIsFormValid(!Object.values(newErrors).some(error => error));
  }, [date, guests, validateDate, validateGuests]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const formData = {
      date,
      time,
      guests,
      occasion
    };
    
    submitForm(formData);
  };

  return (
    <form 
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} 
      onSubmit={handleSubmit}
      aria-label="Reservation Form"
      noValidate
    >
      <fieldset>
        <legend>Reservation Details</legend>
        
        <div className="form-field" role="group" aria-labelledby="date-label">
          <label id="date-label" htmlFor="res-date">Choose date <span aria-label="required">*</span></label>
          <input
            type="date"
            id="res-date"
            name="reservation-date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
            }}
            min={today}
            required
            aria-invalid={errors.date ? "true" : "false"}
            aria-describedby="date-error date-hint"
          />
          <span id="date-hint" className="hint-message">Select a date for your reservation</span>
          {errors.date && <span id="date-error" className="error-message" role="alert">{errors.date}</span>}
        </div>

        <div className="form-field" role="group" aria-labelledby="time-label">
          <label id="time-label" htmlFor="res-time">Choose time <span aria-label="required">*</span></label>
          <select
            id="res-time"
            name="reservation-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-invalid="false"
            aria-describedby="time-hint"
          >
            {availableTimes.map(timeSlot => (
              <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
            ))}
          </select>
          <span id="time-hint" className="hint-message">Select your preferred dining time</span>
        </div>

        <div className="form-field" role="group" aria-labelledby="guests-label">
          <label id="guests-label" htmlFor="guests">Number of guests <span aria-label="required">*</span></label>
          <input
            type="number"
            id="guests"
            name="number-of-guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            required
            aria-invalid={errors.guests ? "true" : "false"}
            aria-describedby="guests-error guests-hint"
          />
          <span id="guests-hint" className="hint-message">Enter number of guests (1-10)</span>
          {errors.guests && <span id="guests-error" className="error-message" role="alert">{errors.guests}</span>}
        </div>

        <div className="form-field" role="group" aria-labelledby="occasion-label">
          <label id="occasion-label" htmlFor="occasion">Occasion <span aria-label="required">*</span></label>
          <select
            id="occasion"
            name="dining-occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
            aria-invalid="false"
            aria-describedby="occasion-hint"
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <span id="occasion-hint" className="hint-message">Select the occasion for your visit</span>
        </div>
      </fieldset>

      <button 
        type="submit" 
        className="submit-button"
        disabled={!isFormValid}
        aria-label={!isFormValid ? "Form is incomplete or has errors" : "Make your reservation"}
        aria-disabled={!isFormValid}
      >
        Make Your Reservation
      </button>

      {!isFormValid && (
        <div role="alert" className="form-alert">
          Please fill in all required fields correctly before submitting.
        </div>
      )}
    </form>
  );
}

export default BookingForm;
