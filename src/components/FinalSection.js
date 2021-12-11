import React from 'react'
import './FinalSection.css';
import Button from './Button.js';
import sleepingManIcon from '../img/transistor-sleeping-man 1.png';

function FinalSection() {
  return (
    <div className="final-section-container">
      <h1 className="main-heading final-section-heading">Даже одна сессия может изменить Вашу жизнь</h1>
      <div className="final-section-button">
        <img className="button-icon" src={sleepingManIcon} alt="sleeping man icon"/>
        <Button >Подобрать психолога</Button>
      </div>
    </div>
  )
}

export default FinalSection
