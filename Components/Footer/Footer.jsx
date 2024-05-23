import React from 'react';
import './Footer.css';
import ft_logo from '../../assets/logo.svg';
import us_ic from '../../assets/user_icon.svg';

const Footer = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "840fc58b-1c75-4afd-bc02-7bc109a525bd");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
        }
      };

  return (
    <div className='footer'>
        <div className="ft-top">
            <div className="ft-top-left">
                <p>Stay updated! Subscribe to my newsletter for the latest updates on my projects and blog posts. </p>
            </div>
            <div className="ft-top-right">
                <div className="ft-email-ip">
                    <img src={us_ic}/>
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="ft-subscribe" onSubmit={onSubmit}>
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