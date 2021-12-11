import React from 'react'
import './PsychologyCardItem.css';

function PsychologyCardItem(props) {
  return (
    <>
      <li className="psychologists-card">
        <img className="icon" src={props.src} alt="icon"/>
        <h2 className="psychologists-subheading" style={props.styleHeading}>{props.heading}</h2>
        <p style={props.styleText} className="psychologists-content">{props.content}</p>
      </li>
    </>
  )
}

export default PsychologyCardItem
