// App.js
import React from 'react';

import './App.css';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: 0,
    end: 800,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: "rotate",
      },
      {
        startValue: 1,
        endValue: 1.5,
        property: "scale",
      },
      {
        startValue: 1,
        endValue: 0.75,
        property: "opacity",
      },
    ],
  },
  {
    start: 900,
    duration: 300,
    properties: [
      {
        startValue: "#3cb99c",
        endValue: "rgba(50,50,200,0.8)",
        property: "backgroundColor",
      },
      {
        startValue: 0,
        endValue: 100,
        property: "translateY",
      },
      {
        startValue: 0.75,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
  {
    start: 700,
    duration: 1000,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: 1.5,
        endValue: 2,
        property: "scale",
      },
      {
        startValue: 90,
        endValue: 0,
        property: "rotate",
      },
      // Blur is not performant
      // Used just as an example for CSS filters
      {
        startValue: 0,
        endValue: 20,
        property: "blur",
      },
    ],
  },
];

const App = () => {
  return (
    <Plx className="page home" parallaxData={parallaxData}>
      <div
        className="page about"
        style={{
          height: '100vh',
          width: '80%',
          margin: '0 auto',
          backgroundColor: 'pink',
        }}
      >
        <h1>About Us</h1>
        <p>This is a brief description of our company.</p>
      </div>

      <div className="page services" style={{ height: '100vh' }}>
        <h1>Our Services</h1>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </div>

      <div
        className="page portfolio"
        style={{ height: '100vh', backgroundColor: 'blue' }}
      >
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

      <div
        className="page contact"
        style={{ height: '100vh', backgroundColor: 'red' }}
      >
        <h1>Contact Us</h1>
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Plx>
  );
};

export default App;
