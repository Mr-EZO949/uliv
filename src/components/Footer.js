import React from 'react'
import './Footer.css';
import logo from '../img/Logo Ulive.png';
import footerInstagramLogo from '../img/instagram.png'
import footerMailLogo from '../img/mail.png';
import phoneIcon from '../img/phone.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo" src={logo} alt="logo"/>
        <div className="footer-navbar">
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <ul className="footer-links">
                <li className="footer-links-item">
                  <a href="/" className="footer-link">Главная</a>
                </li>
                <li className="footer-links-item">
                  <a href="/" className="footer-link">Записаться к психологу</a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-item">
              <ul className="footer-socials">
                <li className="footer-socials-item">
                  <a href="/" className="footer-socials-link">
                    <img className="footer-social-icon" src={footerMailLogo} alt="Mail"></img>
                    <p style={{display:"inline", marginBottom:"37px"}}>help@uliv.io</p>
                  </a>
                </li>
                <li className="footer-socials-item">
                  <a href="/" className="footer-socials-link">
                    <img className="footer-social-icon" src={footerInstagramLogo} alt="instagram"></img>
                    @uliv.world
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer-nav-item">
              <ul className="footer-social-networks-list">
                <a className="footer-social-network-link" href="/">Telegram</a>
                <a className="footer-social-network-link" href="/">Whatsapp</a>
                <a className="footer-social-network-link" href="/">Messenger</a>
              </ul>
            </li>
          </ul>
        </div>
        <div className="phone-number">
          <img className="phone-icon" alt="phone icon" src={phoneIcon}/>
          <h3 className="phone-number-text">+7 747 841 4436</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
