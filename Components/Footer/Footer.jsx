import React from 'react';
import './Footer.css';
import ft_logo from '../../assets/logo.svg';
import us_ic from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="ft-top">
            <div className="ft-top-left">
                <img src={ft_logo}/>
                <p>ncoiwefjos ieahfesoghjerg earjiowejig erijgiajgosiejrg eiosgjsnrghweg eirhjgoierg </p>
            </div>
            <div className="ft-top-right">
                <div className="ft-email-ip">
                    <img src={us_ic}/>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="ft-subscribe">
                    Subscibe
                </div>
            </div>
        </div>
        <hr />
        <div className="ft-btm">
            <p className="ft-btm-left">
                &#169; 2024 Deepak Prajapati. All rights reserved
            </p>
            <div className="ft-btm-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer