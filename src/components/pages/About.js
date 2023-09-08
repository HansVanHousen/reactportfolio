import React from 'react';
import '../App.css'
import LostCoast from '../assets/LostCoast.jpg';


export default function AboutMe() {
  return (
    <section className='page'>
      <div className='about'>
    
        <div className='bio'>
          <h3>About me</h3>
          <p> My name is Hans Van Housen and I have many interests and passions. Outdoors I am an active cyclist, backpacker, snowboarder, and baby scuba diver. Indoors I am found of working on code, listening to music, making art and watching movies.  
          I grew up in southern California in the small town of Ojai, and have lived for the past 16 years in the slightly larger town of Santa Cruz. My dog Randy is the center of that universe. 
          </p>
          <div className='homeimg'>
          <div className='image'>
            <img src={LostCoast} alt="A guy and his dog on the beach backpacking" />
          </div>
        </div>
        </div>
      </div>
      
  </section>
  );
};