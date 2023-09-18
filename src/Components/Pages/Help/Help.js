import React from "react";
import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help Center</h1>
      <div className="help-content">
        <h2>Frequently Asked Questions</h2>
        <p>
          Welcome to our Help Center! Here are answers to some of the most
          common questions we receive from our users.
        </p>
        <ul className="faq-list">
          <li>
            <strong>How do I create an account?</strong> You can create an
            account by clicking on the "Sign Up" button and following the
            registration process.
          </li>
          <li>
            <strong>How do I reset my password?</strong> To reset your password,
            go to the "Forgot Password" link on the login page and follow the
            instructions.
          </li>
          <li>
            <strong>How can I contact customer support?</strong> You can reach
            out to our customer support team through the "Contact Us" page.
          </li>
        </ul>
        <h2>Resources</h2>
        <p>Here are some additional resources that might help you:</p>
        <ul className="resource-list">
          <li>
            <a href="/guides">User Guides</a>
          </li>
          <li>
            <a href="/tutorials">Video Tutorials</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
