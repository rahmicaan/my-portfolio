import React from 'react';
import './styles.css';
import Gallery from '../Gallery';
import Buttons from '../Buttons';

export default () => {
  return (
    <>
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery />
      <Buttons />
      <h1 className="homePageTitle">Innovating with Technology</h1>
      <div className="text-block">
        <p>
          hello I'm can
        </p>

      </div>

      <div className="image-container">
        <div className="image-item">
          <img
            src="/img/4.jpg"
            alt="Description 1"
            className="circular-image"
            />
            <p className="description" > call </p>
          
        </div>

        <div className="image-item">
          <img
            src="/img/2.jpg"
            alt="Description 2"
            className="circular-image"
          />
          <p className="description" > text </p>
        </div>

        <div className="image-item">
          <img
            src="/img/3.jpg"
            alt="Description 3"
            className="circular-image"
          />
          <p className="description" > or ask ai for fast respond </p>
        </div>
      </div>
    </>
  );
};
