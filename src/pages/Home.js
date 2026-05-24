import React from "react";

 function Home() {

  return (

    <section id="home" className="home" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/photo_2026-05-07_18-18-02.jpg')`}}>

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>
            A Modern School <br />

            Focused on
            <span> Skills</span>, <br />

            Not Just Grades.
          </h1>

          <p>
            Empowering the next generation
            of innovators with practical
            learning and state-of-the-art
            facilities.
          </p>

          <div className="hero-buttons">

            <a href="/select">

              <button className="apply-btn">
                Apply Now
              </button>

            </a>

            <a href="#about">

              <button className="learn-btn">
                Learn More
              </button>

            </a>

          </div>

        </div>

      </div>

    </section>

  );
}
export default Home;