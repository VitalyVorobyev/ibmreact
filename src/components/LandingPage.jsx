import React from 'react';
import './LandingPage.css'; // We'll create this file in the next step

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Conference Expense Planner</h1>
          <p>Plan your next major event with us!</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h2>Welcome to BudgetEase Solutions</h2>
        <p>
          Your trusted partner in simplifying budget management and financial solutions.
          We understand the importance of effective budget planning and strive to provide
          intuitive, user-friendly solutions to meet the diverse needs of our clients.
        </p>
        <p>
          With a commitment to efficiency and innovation, we empower individuals and businesses
          to take control of their finances and achieve their goals with ease.
        </p>
        <p>
          At BudgetEase Solutions, our mission is to make budgeting effortless and accessible
          for everyone. Whether you're a small business owner, a busy professional, or an
          individual looking to manage your personal finances, we offer tailored solutions
          to streamline your budgeting process.
        </p>
      </section>
    </div>
  );
}

export default LandingPage;
