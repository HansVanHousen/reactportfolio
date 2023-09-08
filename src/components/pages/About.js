import React from 'react';
import '../App.css'


export default function AboutMe() {
  return (
    <section className='page'>
      <div className='about'>
        <div className='Hans'>
          <h1>Hans Van housen</h1>
          <p>Full-Stack Developer</p>
          <a href="mailto:hansvanhousen.com" rel="email" target="_blank"><p className='email'>Email</p></a>
          <a href="https://github.com/HansVanHousen" rel="github" target="_blank"><p className='email'>Github</p></a>
          <a href="https://www.instagram.com/leadlinedmind/" rel="instagram" target="_blank"><p className='email'>Instagram</p></a>

        </div>
        <div className='bio'>
          <h3>About me</h3>
          <p> My name is Hans Van Housen and I have many interests and passions. Outdoors I am an active cyclist, backpacker, snowboarder, and baby scuba diver. Indoors I am found of working on code, listening to music, making art and watching movies.  
          I grew up in southern California in the small town of Ojai, and have lived for the past 16 years in the slightly larger town of Santa Cruz. My dog Randy is the center of that universe. 

          </p>
        </div>
      </div>
      
  </section>
  );
};