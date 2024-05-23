import React from 'react';
import './Contacts.css';
import thm_img from '../../assets/theme_pattern.svg';
import ml_ic from '../../assets/mail_icon.svg';
import lc_ic from '../../assets/location_icon.svg';
import cl_ic from '../../assets/call_icon.svg';

const Contacts = () => {

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
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={thm_img} />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Welcome to my "Get in touch" section! I’m excited to connect with you. Whether you have a question about my work, a project proposal, or simply want to say hello, please don’t hesitate to reach out. 
                    <br />Stay informed about my latest projects and updates by subscribing to my newsletter. This section provides a simple form where you can enter your email address to receive regular updates directly in your inbox.
                </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={lc_ic} alt="" />
                        <p>dp2512811@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={cl_ic} alt="" />
                        <p>+91-7985099366</p>
                    </div>
                    <div className="contact-detail">
                        <img src={cl_ic} alt="" />
                        <p>Bhopal, Madhya Pradesh</p>
                    </div>
                </div>
            </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter you msg here'></textarea>
            <button className="contact-submit">Submit now</button>
        </form>
        </div>
    </div>
  )
}

export default Contacts