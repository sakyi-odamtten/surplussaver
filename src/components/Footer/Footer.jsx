import React from "react";
import "./Footer.css";
import logo from './logo.svg';
import Vector from '../shots/Vector.svg';
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Vector} alt="a cloud pic" />
      <div className="footer-inner-div">
          <img src={logo} alt="a cloud pic" />
          <div className="footer-content">
            <p className="footer-impact">
             Surplus saver alleviate food 
              insecurity by connecting surplus
              food donors with those in need. 
              reducing food waste and 
              creating a positive social impact
            </p>
            <div className="footer-links">
              <p>Links</p>
              <div>
                <ul>
                    <li ><Link to='/' >HOME</Link></li>
                    <li>ABOUT US </li>
                    <li>CONTACT US </li>
                    <li > <Link to= '/faq'>FAQ</Link> </li>
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
      <Outlet />
    </div>
  );
};

export default Footer;
