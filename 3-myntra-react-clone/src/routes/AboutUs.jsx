
import React from 'react';
import { Row, Col } from 'react-bootstrap';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>ABOUT US</h1>
      <Row>
        <h2>OUR VISSION AND MISSION</h2>
        <Col md={6}>
          <p>
            Welcome to Plant Petals, your one-stop destination for all things green! We are passionate about bringing nature closer to you through our carefully curated collection of plants.
          </p>
          <p>
            At Plant Petals, we believe in the power of plants to enhance your living spaces, improve air quality, and contribute to a healthier lifestyle. Our mission is to provide you with a wide variety of high-quality plants that suit your preferences and lifestyle.
          </p>
          <p>
            Whether you're a seasoned plant enthusiast or just starting your green journey, Plant Petals is here to inspire and support you. Explore our collection, discover new plant varieties, and embark on a journey of growth and well-being with Plant Petals!
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/images/ABOUT.jpg" 
            alt="Plant Petals Image"
            className="about-us-image"
          />
        </Col>
        <Col md={6}>
          <h2>Our Team</h2>
          <Row>
            <Col sm={4}>
              <div className="team-member">
                <img src="/images/team1.jpg" alt="Team Member 1" className="team-member-image" />
                <p>HEMANT DHUMAL</p>
                
              </div>
            </Col>
            <Col sm={4}>
              <div className="team-member">
                <img src="/images/team2.jpg" alt="Team Member 2" className="team-member-image" />
                <p>ARPITA MESHRAM</p>
                
              </div>
            </Col>
            <Col sm={4}>
              <div className="team-member">
                <img src="/images/team3.jpg" alt="Team Member 3" className="team-member-image" />
                <p>VRUSHALI KENDRE</p>
                
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
     
  );
};

export default AboutUs;
