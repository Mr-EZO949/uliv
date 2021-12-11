import React from 'react'
import './AdvantageCard.css';

function AdvantageCard(props) {
  return (
    <>
      <li className="advantage-card">
        {/* <img className="advantage-card-num" src={props.bgSrc} alt="Nomer"/> */}
        <img className="advantage-card-icon" src={props.src} alt="advantage icon"/>
        <p className="advantage-card-content">{props.content}</p>
      </li>
    </>
  )
}

export default AdvantageCard
