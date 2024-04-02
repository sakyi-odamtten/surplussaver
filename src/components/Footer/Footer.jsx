import React from "react";
import "./Footer.css";
import logo from './logo.svg';
import Vector from '../shots/Vector.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Vector} alt="a cloud pic" />
      <div className="footer-inner-div">
          <img src={logo} />
          <div className="footer-content">
            <div className="footer-impact">
              Surplus saver alleviate food 
              insecurity by connecting surplus
              food donors with those in need. 
              reducing food waste and 
              creating a positive social impact
            </div>
            <div className="footer-links">
              <p>Links</p>
              <div>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Our Stand</a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-links-info">
              <p className="footer-links-info-heading">Contact</p>
              <p>Email: contact@surplussaver.com </p>
              <p>Phone: 841-89261892689</p>
              <p>Address: </p>
            </div>
          </div>        
      </div>
      <img src={Vector} alt="a cloud pic"  className='cloud'/>
    </div>
  );
};

export default Footer;
