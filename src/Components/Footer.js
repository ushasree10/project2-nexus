import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; 

const Footer = () => {
    const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions (e.g., submit feedback to backend)

        // Set state to show feedback message
        setShowFeedbackMessage(true);

        // Reset form or perform any additional actions if needed
        e.target.reset();
    };

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-col" style={{ marginLeft: '20px', marginRight:'10px' }}>
                    <h4>About Us</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p>1300 Center Avenue<br />
                    Fresno, California<br />
                    United States<br />
                    <strong>Phone:</strong> +123-456-7890<br />
                    <strong>Email:</strong> info@example.com</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/login?lang=en">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Feedback</h4>
                    {showFeedbackMessage ? (
                        <p className="feedback-message">Thank you for your valuable feedback!</p>
                    ) : (
                        <form className="feedback-form" onSubmit={handleSubmit}>
                            <input type="text" className="feedback-input" placeholder="Your feedback" />
                            <button type="submit" className="feedback-submit">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
