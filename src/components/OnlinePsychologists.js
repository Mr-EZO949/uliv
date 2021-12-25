import React from 'react';
import './OnlinePsychologists.css';
import onlinePsychologistIcon1 from '../img/icon3.png';
import onlinePsychologistIcon2 from '../img/icon2.png';
import onlinePsychologistIcon3 from '../img/icon1.png';

import onlinePsychologist1 from '../img/Rectangle 249 (2).png';
import onlinePsychologist2 from '../img/Rectangle 249.png';
import onlinePsychologist3 from '../img/Rectangle 250.png';
import onlinePsychologist4 from '../img/Rectangle 249 (1).png';
import onlinePsychologist5 from '../img/Rectangle 251.png';
import alertIcon from '../img/alert-circle.png';

import Button from './Button.js';

function OnlinePsychologists() {
  return (
    <div className="online-psychologists-container">
      <h1 className="main-heading online-psychologists-heading">Онлайн Психологи Uliv</h1>
      <ul className="online-psychologists-advantages">
        <li className="online-psychologists-item">
          <div className="img-wrapper">
            <img className="online-psychologists-img-icon" src={onlinePsychologistIcon1} alt="online-psychologists-icon"/>
          </div>
          <h5 className="psychologists-advantages-heading" style={{maxWidth: '121px'}}>Имеют высшее профильное образование</h5>
        </li>
        <li className="online-psychologists-item">
          <div className="img-wrapper">
            <img className="online-psychologists-img-icon" src={onlinePsychologistIcon2} alt="online-psychologists-icon"/>
          </div>
          <h5 className="psychologists-advantages-heading" style={{maxWidth: '102px'}}>Имеют опыт работы от 3х лет</h5>
        </li>
        <li className="online-psychologists-item">
          <div className="img-wrapper">
            <img className="online-psychologists-img-icon" src={onlinePsychologistIcon3} alt="online-psychologists-icon"/>
          </div>
          <h5 className="psychologists-advantages-heading" style={{maxWidth: '131px'}}>Рекомендации от коллег и клиентов</h5>
        </li>
      </ul>
      <div className="find-online-psychologist-wrapper">
        <ul className="online-psychologists-list">
          <li className="online-psychologist-item">
            <img className="online-psychologists-img" src={onlinePsychologist1} alt="psychologist"/>
          </li>
          <li className="online-psychologist-item">
            <img className="online-psychologists-img" src={onlinePsychologist2} alt="psychologist"/>
          </li>
          <li className="online-psychologist-item">
            <img className="online-psychologists-img" src={onlinePsychologist3} alt="psychologist"/>
          </li>
          <li className="online-psychologist-item">
            <img className="online-psychologists-img" src={onlinePsychologist4} alt="psychologist"/>
          </li>
          <li className="online-psychologist-item">
            <img className="online-psychologists-img" src={onlinePsychologist5} alt="psychologist"/>
          </li>
          <li className="online-psychologist-item">
            <h3 className="online-psychologist-amount">+40</h3>
            <p className="online-psychologist-amount-text">психологов</p>
          </li>
        </ul>
        <Button>Подобрать психолога</Button>
        <p className="subheading online-psychologists-list-subheading"><img className="alert-icon" src={alertIcon} alt="Alert Icon"/>Также у Вас есть возможность выбрать психолога вручную</p>
      </div>
      
    </div>
  )
}

export default OnlinePsychologists
