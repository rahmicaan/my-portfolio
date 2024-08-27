import React from 'react'

export default function  () {
  return (
    <div>
  {/* Centered Title Section */}
  <div className="title-container">
    <h1>Innovating with Technology</h1>
  </div>

  {/* 3 Circled Images with Descriptions */}
  <div className="circle-images">
    <div className="image-item">
      <img src="image1.jpg" alt="Image 1" />
      <p>Image 1 Description</p>
    </div>
    <div className="image-item">
      <img src="image2.jpg" alt="Image 2" />
      <p>Image 2 Description</p>
    </div>
    <div className="image-item">
      <img src="image3.jpg" alt="Image 3" />
      <p>Image 3 Description</p>
    </div>
  </div>

  {/* About Me Section */}
  <div className="about-me">
    <h2>About Me</h2>
    <p>
      I am a passionate developer with a keen interest in cloud computing and modern web technologies. My experience includes designing, implementing, and managing scalable cloud solutions. With a commitment to continuous learning, I’m excited to explore new challenges and grow as a cloud engineer.
    </p>
  </div>

  {/* Footer with Social Media Links */}
  <footer className="footer">
    <p>Connect with me on social media:</p>
    <div className="social-icons">
      <a href="https://twitter.com/yourprofile"><img src="twitter-icon.png" alt="Twitter" /></a>
      <a href="https://linkedin.com/in/yourprofile"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
      <a href="https://github.com/yourprofile"><img src="github-icon.png" alt="GitHub" /></a>
    </div>
  </footer>
</div>

    
  )
}
