import React from 'react'
import './styles.css';

export default () => {
  return (
    <div className="about-container">
    <h1 className="common-title">About Me</h1>
    
    <div className="content-container">
      <div className="image-section">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROydcbyaCH2bgLNfbiAGvjGnxQDLspOrr9dA&s" 
          alt="About Me" 
          className="about-image"
        />
      </div>
      
      <div className="text-section">
        <article className="about-article">
          <h2>Who I Am</h2>
          <p>
            I am a Can, passionate about basketball. 
          </p>
        </article>
      </div>
    </div>
    
    <div className="footer-text">
      <p>Get in touch to collaborate or learn more about what I do.</p>
    </div>
  </div>
  )
}
