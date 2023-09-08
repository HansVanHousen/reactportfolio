import React from 'react';
import LostCoast from '../assets/LostCoast.jpg';
import '../App.css';

export default function Home() {
  return (
    <div>
      <div className="navigation-bar">
      
      </div>
      <div>
        <h1>Hans Van Housen</h1>
        <p>
          Welcome to my home page. Here you can find information about me, some of my recent projects, my contact information, and my resume.
        </p>
        <div className='homeimg'>
          <div className='image'>
            <img src={LostCoast} alt="A guy and his dog on the beach backpacking" />
          </div>
        </div>
      </div>
    </div>
  );
}
