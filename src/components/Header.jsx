import React from "react";
import imgNasa from "./images/nasa.jpg";

function Header(){
    return(
  <div id="title">
    <div className="container-fluid" style={{backgroundImage: `url(${imgNasa})`}}>
    <nav className="navbar navbar-expand-lg navbar-dark">
     <a className="navbar-brand" href="index.html">  Cynthia's Résumé Palace</a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">Positions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
     </div>
    </nav>

 
  <div id="home">
    <div className="container">
      <img src={require("./images/xinxia.JPG")} className="img-fluid" alt="Profile" />
      <h3 className="main-text mt-5">Hello, I’m Cynthia Song</h3>
      <p className="my-4 mb-5">A Data Professional</p>  
    </div>
  </div>
 </div>
</div>

    );
}

export default Header;

