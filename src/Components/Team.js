// Team.js

import React from 'react';
import '../index.css'; 
import myimage1 from '../Images/pexels-andrea-piacquadio-845434.jpg';
import myimage2 from '../Images/pexels-hussein-altameemi-2776353.jpg'; 
import myimage3 from '../Images/pexels-vinicius-wiesehofer-1130624.jpg';

const Team = () => {
  return (
    <section className="team" style={{ marginTop: '2rem' }}>
      <h1 className="heading" style={{ marginTop: '-1.5rem' }} id="team">
        OUR TEAM
      </h1>
      <p></p>
      <div className="row">
        <div className="card">
          <div className="image">
            <img src={myimage1} alt="Team member 1" />
          </div>
          <div className="info">
            <h3>Schott Watkins</h3>
            <span>Web Developer</span>
            <div className="icons">
              <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
              <a href="https://twitter.com/login" className="fab fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
              <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={myimage3} alt="Team member 2" />
          </div>
          <div className="info">
            <h3>Nicole Bell</h3>
            <span>Mobile Developer</span>
            <div className="icons">
              <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
              <a href="https://twitter.com/login" className="fab fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
              <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={myimage2} alt="Team member 3" />
          </div>
          <div className="info">
            <h3>John Doe</h3>
            <span>Graphic Designer</span>
            <div className="icons">
              <a href="https://www.facebook.com/" className="fab fa-facebook-f"></a>
              <a href="https://twitter.com/login" className="fab fa-twitter"></a>
              <a href="https://www.instagram.com/" className="fab fa-instagram"></a>
              <a href="https://www.linkedin.com/" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
