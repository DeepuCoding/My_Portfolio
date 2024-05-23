import React from 'react';
import './Hero.css';
import prf_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={prf_img} alt="" />
        <h1> <span>Myself Deepak Prajapati</span>, a passionate fullstack developer</h1>
        <p> looking forward to work with professionals work driven environment where I can utilize best of my knowledge and skills ,and become part of organization’s growth. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='al' offset={50} href='#contact'>
                <p onClick={()=> setMenu("contact")}>Connect</p>
              </AnchorLink> </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero