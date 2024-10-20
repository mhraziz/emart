import React from 'react';
import './About.css'; // Make sure this CSS file is created for styling
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Welcome to our E-commerce application! We are committed to offering you an amazing shopping experience with high-quality products and unbeatable service.
          Built using <strong>React</strong> and <strong>Redux</strong>, our platform ensures a fast, reliable, and seamless user experience.
        </p>
        <p className="about-description">
          At our core, we believe in customer satisfaction and making your shopping journey delightful. Explore our wide range of products today and experience the difference!
          We are grateful to have you with us. Thank you for being a part of our family.
        </p>

        <div className="about-buttons">
          <NavLink to="/products" className="btn btn-outline-secondary">All Products</NavLink>
          <NavLink to="/contact" className="btn btn-outline-secondary">Contact Us</NavLink>
        </div>
      </div>

      <div className="about-image">
        <img src="/assets/images/about.png" alt="E-commerce journey"/>
      </div>
    </div>
  );
};

export default About;
