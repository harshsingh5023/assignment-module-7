import React, { useState } from "react";
import "./footer.css";
import { ReactComponent as Facebook } from "../resources/fb.svg";
import { ReactComponent as Twitter } from "../resources/twitter.svg";
import { ReactComponent as Instagram } from "../resources/insta.svg";

function Footer() {
  const [email, setEmail] = useState('');

  const handleInput = (e) => {
    setEmail(e.target.value);
  }
  const sendEmail = async (e) => {
    e.preventDefault();
    fetch('https://assignment-module-7-default-rtdb.asia-southeast1.firebasedatabase.app/user-emails.json',
    {
      method:'POST',
      Headers:{
        'Content-Type':'application/json'
      },body: JSON.stringify({email})
    });
    setEmail('');
  }

  return (
    <div className="f-wrapper">
      <div className="f-head">
        <p>AccioJob</p>
        <div className="f-h-media">
          <Facebook className="sm"/>
          <Twitter className="sm"/>
          <Instagram className="sm"/>
        </div>
      </div>
      <hr/>
      <div className="f-content">
        
        <div className="f-c-1">
            <div className="f-c-main">
                <p className="f-c-main-head">Company Info</p>
                <p className="f-c-main-body">About Us</p>
                <p className="f-c-main-body">Carrier</p>
                <p className="f-c-main-body">We are Hiring</p>
                <p className="f-c-main-body">Blog</p>
            </div>
            <div className="f-c-main">

                <p className="f-c-main-head">Legal</p>
                <p className="f-c-main-body">About Us</p>
                <p className="f-c-main-body">Carrier</p>
                <p className="f-c-main-body">We are Hiring</p>
                <p className="f-c-main-body">Blog</p>
            </div>
            <div className="f-c-main">
                <p className="f-c-main-head">Features</p>
                <p className="f-c-main-body">Business Marketing</p>
                <p className="f-c-main-body">User Analytic</p>
                <p className="f-c-main-body">Live Chat</p>
                <p className="f-c-main-body">Unlimited Support</p>
            </div>
            <div className="f-c-main">
                <p className="f-c-main-head">Resources</p>
                <p className="f-c-main-body">IOS & Android</p>
                <p className="f-c-main-body">Watch a Demo</p>
                <p className="f-c-main-body">Customers</p>
                <p className="f-c-main-body">API</p>
            </div>
            
        </div>
        <div className="f-c-2">
            <p>Get In Touch</p>
            <form onSubmit={sendEmail} className="form">
            <input type="email" placeholder="Your Email" onChange={handleInput} value={email} required />
            <button>Subscribe</button>
            <p>Lorem impsum dolor amit</p>
            </form>
            
        </div>
      </div>
      <div className="f-credit">
        Made With ❤️ at AccioJob
      </div>
    </div>
  );
}

export default Footer;
