import React from 'react';
import '../App.css'
import Linework from '../assets/linework.jpg';
import JSQuiz from '../assets/JSQuiz.png';
import Workday from '../assets/workday.png';
import Editor from '../assets/JATE.png';
import ExpressNote from '../assets/NoteTaker.png';
import EmployeeTracker from '../assets/mysql.jpg';
import PassGen from '../assets/password.png';


export default function Portfolio() {
    return (
        <section className="portfolio-container">
            <div className='portfolio'>
                <div>
                    <h2>My Portfolio</h2>
                    <p>Here is a selection of my recent projects. Click on them to go to go to their GitHub repositories</p>
                    <br />
                </div>
                <div className='projects-grid'>
                    <div className='image'>
                        <div className='project-title'><h2>Linework MERN</h2></div>
                        <a href="https://github.com/HansVanHousen/linework" rel="alternate" target="_blank">
                            <img src={Linework} alt="tattoo flash search bar" />
                            <div className='project-description'>
                                <p>A group MERN Application for finding tattoo inspiration</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>JavaScript Quiz</h2></div>
                        <a href="https://github.com/HansVanHousen/Web-Code-Quiz" target="_blank">
                            <img src={JSQuiz} alt="JavaScript Quiz" />
                            <div className='project-description'>
                                <p>A timed quiz that keeps score with saved high scores</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Workday Scheduler</h2></div>
                        <a href="https://github.com/HansVanHousen/3rdPartyAPI-WorkDayScheduler" rel="alternate" target="_blank">
                            <img src={Workday} alt="Workday-Scheduler" />
                            <div className='project-description'>
                                <p>A planner for your day with buttons for hour blocks that are color coded by time.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Text Editor</h2></div>
                        <a href="https://github.com/HansVanHousen/PWA_text_editor_JATEY_BABY" rel="alternate" target="_blank">
                            <img src={Editor} alt="Text Editor" />
                            <div className='project-description'>
                                <p>A text editor using local storage.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Express Note Taker</h2></div>
                        <a href="https://github.com/HansVanHousen/expressJSnoteTaker" rel="alternate" target="_blank">
                            <img src={ExpressNote} alt="Note taker" />
                            <div className='project-description'>
                                <p>Note taker using Express.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Employee Tracker</h2></div>
                        <a href="https://github.com/HansVanHousen/MYSQLemployeeTracker" rel="alternate" target="_blank">
                            <img src={EmployeeTracker} alt="Employee Tracker" />
                            <div className='project-description'>
                                <p>MySQL database using Inquirer responses from within the terminal.</p>
                            </div>
                        </a>
                    </div>
                    <div className='image'>
                        <div className='project-title'><h2>Password Generator</h2></div>
                        <a href="https://github.com/HansVanHousen/JSPassWordGen" rel="alternate" target="_blank">
                            <img src={PassGen} alt="Password Generator" />
                            <div className='project-description'>
                                <p>Password generator.</p>
                            </div>
                        </a>
                    </div>
                 
                </div>
            </div>
        </section>
    );
};
