// Contact.js

import React, { useState } from 'react';
import '../index.css'; // Create a new CSS file for styling
import Axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   // Your logic to send form data to the backend (API call, fetch, etc.)
    //   console.log('Form submitted:', formData);

    //   // Reset form after submission (optional)
    //   setFormData({
    //     name: '',
    //     phone: '',
    //     email: '',
    //     message: '',
    //   }); 
    //   alert('Your details have been sent successfully!');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }


    e.preventDefault()

      const data = {...formData}
      console.log(data)
      Axios.post("http://localhost:4000/contact/",data)
      .then((res)=>{
          console.log(res.data)
      }).catch((err)=>{
          console.log(err);
      })
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact">
      <h1 className="heading">GET IN TOUCH</h1>
      <div className="contact-in">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-form-txt"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              required
              placeholder="Contact number"
              maxLength="10"
              className="contact-form-phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-form-email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="contact-form-txtarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="Submit" name="submit" className="contact-form-btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
