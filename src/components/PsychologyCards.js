import React from 'react'
import './PsychologyCards.css';
import PsychologyCardItem from './PsychologyCardItem';
import icon1 from "../img/consultation.png";
import icon2 from "../img/keys.png";
import icon3 from "../img/puzzle.png";
import icon4 from "../img/records.png";

function PsychologyCards() {
  return (
    <div className="psychology-cards-wrapper">
      <ul className="psychology-cards-list">
        <PsychologyCardItem 
          src={icon1}
          styleHeading={{ marginBottom: '56px', maxWidth: '169px' }}
          styleText={{maxWidth: '232px', minWidth: '232px'}}
          heading="Онлайн - Удобно"
          content="Вы можете связаться со специалистом в удобном для вас месте и времени"
        />
        <PsychologyCardItem 
          src={icon2}
          styleHeading={{marginBottom: '28px', maxWidth: '198px'}}
          styleText={{maxWidth: '248px', minWidth: '248px'}}
          heading="Конфиденциально /
          безопасно"
          content="Вы можете быть спокойны: наши специалисты подписывают соглашение о неразглашении информации"
        />
        <PsychologyCardItem 
          src={icon3}
          styleHeading={ {marginBottom: '28px', maxWidth:'258px'}}
          styleText={{maxWidth: '257px', minWidth: '257px'}}
          heading="Подбор специалиста под ваш запрос"
          content="Мы подберем специалиста исходя из ваших требовании"
        />
        <PsychologyCardItem 
          src={icon4}
          styleHeading={{marginBottom: '28px', maxWidth: '195px'}}
          styleText={{maxWidth: '213px', minWidth: '213px'}}
          heading="Тщательный отбор психологов"
          content="Мы проверяем сертификаты, дипломы специалиста, и берём рекомендации коллег"
        />
      </ul>
      
    </div>
  )
}

export default PsychologyCards
