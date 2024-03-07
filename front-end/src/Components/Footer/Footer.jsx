import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import insta_icon from '../Assets/instagram_icon.png'
import pinta_icon from '../Assets/pintester_icon.png'
import what_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinta_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={what_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyrignt @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
