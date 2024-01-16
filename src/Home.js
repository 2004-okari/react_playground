// components/Home.js
import React from 'react';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: 'self',
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 360,
        property: 'rotate',
      },
    ],
  },
];

const Home = () => {
  return (
    <div className="page home" >
      <div className="page about">
        <h1>About Us</h1>
        <p>This is a brief description of our company.</p>
      </div>

      <div className="page services">
      <h1>Our Services</h1>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </div>

      <div className="page portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/150" alt="Project 1" />
          <p>Project 1</p>
        </div>
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/150" alt="Project 2" />
          <p>Project 2</p>
        </div>
        <div className="portfolio-item">
          <img src="https://via.placeholder.com/150" alt="Project 3" />
          <p>Project 3</p>
        </div>
      </div>

      <div className="page contact">
        <h1>Contact Us</h1>
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
