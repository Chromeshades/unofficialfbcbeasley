import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="contact-card" style={{ flex: 1, marginRight: '20px' }}>
        <h1>Contact Us</h1>
        <p>First Baptist Church of Beasley</p>
        <p>7319 Avenue J, Beasley, Texas 77417, United States</p>
        <p>Telephone: (281) 406-0808</p>
        <p>Email: <a href="mailto:pastor@fbcbeasley.com">pastor@fbcbeasley.com</a></p>
        
        <div style={{ margin: '20px 0' }}>
          <iframe
            title="FBC Beasley Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890123!2d-95.12345678901234!3d29.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c1234567890%3A0x1234567890abcdef!2s7319%20Avenue%20J%2C%20Beasley%2C%20TX%2077417%2C%20USA!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="contact-card" style={{ flex: 1 }}>
        <h2>Contact Form</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;