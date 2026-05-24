import React from "react";


function About() {
  return (
    <section className="about">

      <div className="about-wrapper">

        {/* LEFT SIDE */}
        <div className="about-content">

          <h1>
            About <span>CoCal</span>
          </h1>

          <p>
            CoCal School is a modern digital skills academy focused on
            practical learning and real-world careers.
          </p>

          <p>
            We help students learn Web Development, SEO,
            Digital Marketing, UI/UX Design, and other
            high-income digital skills.
          </p>

          {/* STATS */}
          <div className="stats">

            <div className="card">
              <h2>500+</h2>
              <span>Students</span>
            </div>

            <div className="card">
              <h2>20+</h2>
              <span>Courses</span>
            </div>

            <div className="card">
              <h2>100%</h2>
              <span>Practical Skills</span>
            </div>

          </div>

          <button className="join-btn">
            Join Us
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students"
          />

        </div>

      </div>

    </section>
  );
}

export default About;