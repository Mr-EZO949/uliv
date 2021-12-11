import React from 'react'
import AdvantageCard from './AdvantageCard';
import './CardsAdvantages.css';
import advantageIcon1 from '../img/transistor-guard 1.png';
import advantageIcon2 from '../img/transistor-no-connection-2 1.png';
import advantageIcon3 from '../img/transistor-ghost-man 1.png';
import advantageIcon4 from '../img/transistor-spooky-halloween 1.png';
import advantageIcon5 from '../img/transistor-security 1.png';
import advantageIcon6 from '../img/transistor-message-sent 1.png';

import advantageNum1 from '../img/1.png';

function CardsAdvantages() {
  return (
    <div className="advantages-container">
      <div className="advantages-wrapper">
        <h1 className="main-heading advantages-heading">Консультации с онлайн-психологом помогут:</h1>
        <ul className="advantages-list">
          <AdvantageCard bgSrc={advantageNum1} src={advantageIcon1} content="Справиться с депрессиейи аппатией"/>
          <AdvantageCard  src={advantageIcon2} content="Построить гармоничные отношения с близкими"/>
          <AdvantageCard  src={advantageIcon3} content="Справиться с выгоранием"/>
          <AdvantageCard  src={advantageIcon4} content="Проработать негативные установки / снять блоки / избавиться от фобии"/>
          <AdvantageCard style={{width: '234px'}} src={advantageIcon5} content="Справиться со страхами и тревогами"/>
          <AdvantageCard  src={advantageIcon6} content="Вернуться в ресурсное состояние"/>
        </ul>
      </div>
    </div>
  )
}

export default CardsAdvantages
