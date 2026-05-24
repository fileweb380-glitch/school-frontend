import React from 'react'

function Footer() {
  return (
    <footer className="footer">

    
      <div className="footer-columns">

        
        <div className="col">
          <h2>CoCal</h2>
          <p>We teach real skills like Web Dev, Marketing & SEO.</p>
        </div>

        
        <div className="col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href="#contact">Contact</a>
        </div>

       
        <div className="col">
          <h4>Our Courses</h4>
          <a href="#">Web Development</a>
          <a href="#">Digital Marketing</a>
          <a href="#">SEO</a>
          <a href="#">UI/UX Design</a>
          <a href="#">Freelancing...</a>
          <a>more</a>
        </div>

       
        <div className="col">
          <h4>Contact Us</h4>
          <p>📍 Addis Ababa, Megenanga, Piyasa</p>
          <p>📞 +251994098268</p>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>© 2026 CoCal. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer;