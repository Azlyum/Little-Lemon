import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

const ReservationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (!formData.guests || formData.guests < 1)
      errors.guests = "Guests must be at least 1";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      navigate("/success");
    } else {
      navigate("/error");
    }
  };

  return (
    <section className="reservation-page">
      <h2 className="reservation-title">Reserve a Table</h2>
      {!isSubmitted ? (
        <form
          className="reservation-form"
          onSubmit={handleSubmit}
          aria-label="Reservation Form"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            aria-required="true"
          />
          {formErrors.date && <span className="error">{formErrors.date}</span>}

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            aria-required="true"
          />
          {formErrors.time && <span className="error">{formErrors.time}</span>}

          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            aria-required="true"
          />
          {formErrors.guests && (
            <span className="error">{formErrors.guests}</span>
          )}

          <button type="submit" className="reserve-btn">
            Book Table
          </button>
        </form>
      ) : (
        <div className="confirmation-message" role="status">
          <h3>🎉 Table Reserved Successfully!</h3>
          <p>
            Thank you, {formData.name}. We look forward to serving you on{" "}
            {formData.date} at {formData.time}.
          </p>
        </div>
      )}
    </section>
  );
};

export default ReservationPage;
