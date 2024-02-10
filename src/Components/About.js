// src/components/About.js
import React from 'react'; 
import { Link } from 'react-router-dom';
import '../index.css'; // Create this file for About page styles 
import myimage from '../Images/img2.png'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={myimage} alt="About Us" />
      </div>
      <div className="about-content">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet purus ac nisi fermentum laoreet. Integer efficitur luctus turpis
          vel cursus. Proin ac leo a justo consectetur ullamcorper. Sed
          fringilla, sapien non commodo laoreet, urna risus maximus lacus, nec
          venenatis libero orci non justo. Sed in dapibus nisi, vel pharetra
          velit. Sed ut aliquam est, vel scelerisque arcu.
        </p>
        <p>
          Fusce consequat est vel justo fermentum, eu varius lacus ultrices.
          Integer interdum nisl et tortor facilisis, a pulvinar neque
          scelerisque. Maecenas at velit nec orci tristique consectetur id non
          ligula. Vivamus a justo eu purus varius accumsan. Vivamus hendrerit
          dui at elit euismod, nec varius orci ultricies. Nullam vehicula,
          libero ut pulvinar vehicula, libero est vulputate urna, at viverra
          est orci quis purus.
        </p> 
        <div className="about-buttons">
          <Link to="/contact">
            <button className="contact-button">CONTACT</button>
          </Link>
          <Link to="/services">
            <button className="discover-button">DISCOVER MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
