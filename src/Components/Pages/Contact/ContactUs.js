import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>
          Feel free to reach out to us for any inquiries or feedback. You can
          contact us through the following methods:
        </p>
        <ul>
          <li className="list-item">Email: contact@example.com</li>
          <li className="list-item">Phone: +1 (123) 456-7890</li>
          <li className="list-item">Address: 1234 Street, City, Country</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
