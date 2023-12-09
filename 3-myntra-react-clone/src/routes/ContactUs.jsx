

import React, { useState } from 'react';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Form submitted:', formData);

    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contact.png"
            alt="contactus"
            style={{ width: '70%' }}
            className="contactus-image"
          />
        </div>
        <div className="col-md-6">
          <h1 className="bg-green p-2 text-white text-center">Get in Touch</h1>
          <p className="text-justify mt-2">
            We would love to hear from you! If you have any questions or inquiries, please feel free to contact us using the form below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Contact Information</h2>
          <p>
            If you prefer other means of communication, you can reach us through the following channels:
          </p>
          <p>
            <BiMailSend /> Email: <a href="mailto:help@plantpetals.com">help@plantpetals.com</a>
          </p>
          <p>
            <BiPhoneCall /> Phone: 012-3456789
          </p>
          <p>
            <BiSupport /> Toll-Free: 1800-0000-0000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
