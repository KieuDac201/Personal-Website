import React from 'react'
import '../style/Resume.css'
import { pageAnimation } from "../animation";
import { motion } from "framer-motion"
import cv from '../assets/img/cv.pdf'


const Resume = () => {
    return (
        <motion.div variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
        <div className="resume"
        >
            <div className="container">
                <div className="title">Resume</div>
                <div className="resume-box">
                    <div className="resume-title"><span>Education</span><a href={cv} rel="noreferrer" download target="_blank" className="btn">Download CV</a></div>
                    
                    <div className="resume-content">
                        <div className="resume-info">
                            <div className="resume-time">2016 - 2019</div>
                            <h5>THACH THAT HIGHSCHOOL</h5>
                            <p>Thach That, Ha Noi</p>
                        </div>
                        <p className="resume-desc">
                        I'm a paragraph. Click here to add your own text and edit me. 
                        It’s easy. Just click “Edit Text” or double click me to add your 
                        own content and make changes to the font.
                        <br />
                        <br />
                        I’m a great place for you to tell a story and let your users know a little more about you.
                        </p>
                    </div>
                    <div className="resume-content">
                        <div className="resume-info">
                            <div className="resume-time">2019 - PRESENT</div>
                            <h5>HA NOI TRADE & TECH COLLEGE</h5>
                            <p>Degree Level</p>
                            <p>Tan Lap, Dan Phuong</p>
                        </div>
                        <p className="resume-desc">
                        My objective is become profession front end developer. I always expect to have a job about web design.
                        Especially, i wanna make the best web products for customers with all passionate and complete project on  time.
                        
                        </p>
                    </div>
                    <div className="resume-content">
                        <div className="title-skill">Professional skillset</div>
                        <ul className="skill-list">
                            <li className="skill-item"><span className="square"></span>HTML, CSS</li>
                            <li className="skill-item"><span className="square"></span>JAVASCRIPT</li>
                            <li className="skill-item"><span className="square"></span>BOOTSTRAP</li>
                            <li className="skill-item"><span className="square"></span>REACT JS</li>
                        </ul>
                        <div className="title-skill">Languages</div>
                        <ul className="skill-list">
                            <li className="skill-item"><span className="square"></span>English</li>
                            <li className="skill-item"><span className="square"></span>Vietnamese</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
}
export default Resume;