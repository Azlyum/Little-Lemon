import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ContactDetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const method = state?.method || "email";
  const [contactInfo, setContactInfo] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/;
    if (method === "email") {
      setIsValid(emailRegex.test(contactInfo));
    } else {
      setIsValid(phoneRegex.test(contactInfo));
    }
  }, [contactInfo, method]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid) return;

    alert("✅ Contact info submitted!");

    navigate("/confirmation", {
      state: {
        ...state,
        contactInfo,
      },
    });
  };

  return (
    <section className="reservation-page">
      <h2>Enter Your {method === "email" ? "Email" : "Phone Number"}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contactInput">
          {method === "email" ? "Email Address:" : "Phone Number:"}
        </label>
        <input
          type={method === "email" ? "email" : "tel"}
          id="contactInput"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          required
          placeholder={
            method === "email" ? "you@example.com" : "e.g. 07123456789"
          }
        />
        {!isValid && contactInfo && (
          <p className="error">Please enter a valid {method}.</p>
        )}
        <button type="submit" className="reserve-btn" disabled={!isValid}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactDetailsPage;
