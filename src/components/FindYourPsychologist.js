import React, {useState} from 'react'
import './FindYourPsychologist.css';
import Example1 from '../img/Example1.png';
import Example2 from '../img/Example2.png';
import Example3 from '../img/Example3.png';
// import Button from './Button.js';

function FindYourPsychologist() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="find-your-psychologist-container">
      <h1 className="main-heading find-heading">Подберём подходящего специалиста всего <p className="colored-fragment">за 3 шага</p></h1>
      <div className="steps-wrapper">
        <div className="steps">
          <div className="steps-button-wrapper">
            <button className={toggleState === 1 ? "tab-button active-button" : "tab-button"} onClick={() => toggleTab(1)}>1</button>
            <button className={toggleState === 2 ? "tab-button active-button" : "tab-button"} onClick={() => toggleTab(2)}>2</button>
            <button className={toggleState === 3 ? "tab-button active-button" : "tab-button"} onClick={() => toggleTab(3)}>3</button>
          </div>
          <div className="steps-info-wrapper">
            <p style={{maxWidth: "189px"}} className={toggleState === 1 ? "steps-content active-content" : "steps-content"} onClick={() => toggleTab(1)}>Оставьте заявку или свяжитесь с нами</p>
            <p style={{maxWidth: "239px"}} className={toggleState === 2 ? "steps-content active-content" : "steps-content"} onClick={() => toggleTab(2)}>Наш менеджер свяжется с вами и запишет на сеанс</p>
            <p style={{maxWidth: "206px"}} className={toggleState === 3 ? "steps-content active-content" : "steps-content"} onClick={() => toggleTab(3)}>Вы консультируетесь с психологом</p>
          </div>
        </div>
        <div className="examples">
          <img className={toggleState === 1 ? "example active-example" : "example"} onClick={() => toggleTab(1)} src={Example1}alt="Visual Example"/>
          <img className={toggleState === 2 ? "example active-example" : "example"} onClick={() => toggleTab(2)} src={Example2}alt="Visual Example"/>
          <img className={toggleState === 3 ? "example active-example" : "example"} onClick={() => toggleTab(3)} src={Example3}alt="Visual Example"/>
        </div>
        
      </div>
    </div>
  )
}

export default FindYourPsychologist
