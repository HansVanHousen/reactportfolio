import React from "react";
import '../App.css';
import HVHresume from '../assets/resume.jpg'


export default function Resume() {
  return (
    <section className="page">
      <div className="resume">
        <h1>Hans Van Housen</h1>
        <a href="../assets/resume.jpg" download="resume.jpg">Click to download resume</a>

        <ul className="list-inline">
            <h2>Web Development</h2>
            <hr className="star-secondary" />

          <li className="list-inline-item">
            <strong>Languages:</strong> JavaScript, HTML, CSS
          </li>
          <br></br>
          <li className="list-inline-item">
            <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
            Express
          </li>
          <br></br>
          <li className="list-inline-item">
            <strong>Databases:</strong> MongoDB, MySQL
          </li>
          <br></br>
          <li className="list-inline-item">
            <strong>Tools/Platforms:</strong> Git, GitHub, Heroku, Insomnia
          </li>
        </ul>
      </div>
      <hr className="star-secondary" />

      <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Associates of Science in Dental Hygiene</h4>
              <h5>Cabrillo College, 2015</h5>
              <p>
              Hans was trained as a dental hygienist at Cabrillo College from 2013-2015
              </p>
            </div>
    </section>
   
  );
}
