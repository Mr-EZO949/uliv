import React from 'react'
import './Psychologists.css';
import PsychologyCards from './PsychologyCards';

function Psychologists() {
  return (
    <div className="psychologists-container">
      <h1 className="main-heading psychologists-heading">Психологи Uliv - это:</h1>
      <PsychologyCards/>
    </div>
  )
}

export default Psychologists
