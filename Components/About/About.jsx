import React from 'react';
import './About.css';
import theme_pat from '../../assets/theme_pattern.svg';
import prf_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pat} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={prf_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a passionate web developer with a strong desire to create user-friendly and visually appealing web experiences. I bring 1.5 years of experience to the table, proficient in various web tools and frameworks.</p>
                    <p>I'm always eager to learn and take on new challenges. Let's connect and discuss your project!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML CSS JS</p> <hr style={{width: "90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>NODEJS</p> <hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>MONGODB </p> <hr style={{width: "69%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>EXPRESS </p> <hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p> REACTJS</p> <hr style={{width: "90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p> GITHUB</p> <hr style={{width: "90%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achs">
            <div className="about-ach">
                <h1>1.5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-ach">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-ach">
                <h1>10+</h1>
                <p>REQUIRED SKILLS</p>
            </div>
        </div>
    </div>
  )
}

export default About