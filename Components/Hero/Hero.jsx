import React from 'react';
import './Hero.css';
import prf_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={prf_img} alt="" />
        <h1> <span>Myself Deepak Prajapati</span>, a passionate fullstack developer</h1>
        <p>iercbiecbebcouercbo      3wucehouch c c0u ccuewiioc dfvhjvjdiovuovnohsoh ovhssshiugfh guhaeuhyfaeriu </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='al' offset={50} href='#contact'>
                <p onClick={()=> setMenu("contact")}></p>
              </AnchorLink> Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero