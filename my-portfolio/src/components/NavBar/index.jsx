import React from 'react'
import "./styles.css"
export default function(){
return(
    <>
    <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item"><a href="#home" class="navbar-link">Home</a></li>
      <li class="navbar-item"><a href="#about" class="navbar-link">About</a></li>
      <li class="navbar-item"><a href="#projects" class="navbar-link">Projects</a></li>
      <li class="navbar-item"><a href="#contact" class="navbar-link">Contact</a></li>
      <li class="navbar-item"><a href="#" class="navbar-link"><span class="fa fa-sign-in-alt"></span></a></li>
    </ul>
  </nav>
    </>
)
}