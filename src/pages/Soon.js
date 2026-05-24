import React from "react";
import { Link } from "react-router-dom";


function Soon() {
  return (
    <section className="soon-section">

      <div className="overlay"></div>

      {/* TOP BUTTONS */}
      <div className="top-buttons">

        <Link to="/" className="top-btn">
          Back to Site
        </Link>

        <Link to="/dashboard" className="top-btn">
          Back to Dashboard
        </Link>

      </div>

      {/* CONTENT */}
      <div className="soon-content">

        <h1>
          CoCal School <span>Coming Soon</span>
        </h1>

        <p>
          We are preparing a modern digital skills school for the next generation.
          Soon you will learn Web Development, SEO, Digital Marketing,
          UI/UX Design, and many future-ready skills.
        </p>

        <div className="soon-boxes">

          <div className="box">
            <h2>Modern Skills</h2>
            <p>Learn practical skills for real careers.</p>
          </div>

          <div className="box">
            <h2>Expert Mentors</h2>
            <p>Industry-focused training and guidance.</p>
          </div>

          <div className="box">
            <h2>Career Focused</h2>
            <p>Build job-ready and freelance-ready skills.</p>
          </div>

        </div>

        <button className="soon-btn">
          We Will Start Soon, Be Ready Yourself
        </button>

      </div>

    </section>
  );
}

export default Soon;