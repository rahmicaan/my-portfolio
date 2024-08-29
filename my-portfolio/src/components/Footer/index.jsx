import React from 'react'
import './styles.css';

export default function index() {
  return (
    <footer className = "footer">
    <div className="footer-content">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
      </footer>
  )
}
