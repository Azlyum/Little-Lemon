import React from "react";

const ErrorPage = () => {
  return (
    <section className="confirmation-message error" role="alert">
      <h2>❌ Reservation Failed</h2>
      <p>
        Oops! Something went wrong with your booking. Please fill in all
        required fields correctly and try again.
      </p>
    </section>
  );
};

export default ErrorPage;
