import React, { useState } from 'react'

function Contact() {

  // ===== Store what user types =====
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  // ===== Update form when user types =====
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ===== When user clicks Submit =====
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks ${form.name}! We'll give you more information, please wait a moment.`)
  }

  return (
    <section id="contact" className="contact-section">

     
      <h2 className="contact-title">
       More Information, Contact <span>Us</span>
      </h2>
      <p className="contact-subtitle">
        Have a question? We'd love to hear from you!
      </p>

      <div className="contact-container">

       
        <div className="contact-info">

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h4>Address</h4>
              <p>Addis Ababa, Megenanga, Piyasa</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+251994098268</p>
               <p>+251996417676</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📧</span>
            <div>
              <h4>Email</h4>
              <p>fileweb380@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <h4>Working Hours</h4>
              <p>Mon - Fri: 12am - 1pm</p>
            </div>
          </div>

        </div>

     
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-input"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="form-input"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="form-input form-textarea"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="form-btn">
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact;