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
                    <p>cjoicmrsj iejfieojr ierjgiosejrgi jgiojserjerwj er9ujerjgv erjfpjve nahoa</p>
                    <p>klsdniov ivnoirehoisdh oiviohewih jeiionvjperj verojpojrfvnepi vnoajpjfzpoefjpawoe </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML CSS </p> <hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>HTML CSS JS </p> <hr style={{width: "70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>HTML & SQL</p> <hr style={{width: "60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p> JS BACKENED</p> <hr style={{width: "50%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achs">
            <div className="about-ach">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-ach">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-ach">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About