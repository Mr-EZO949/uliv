import React, { Component } from 'react'
import Button from './Button';
import './HeroSection.css';

export class HeroSection extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="main-info">
          <h1 className="main-heading">Онлайн-психологи Uliv - <p className="main-heading main-heading_colored">Мы рядом</p></h1>
          <p className="subheading main-heading_subh">Подберём психолога, соответсвующего вашим запросам</p>
          <div className="button-wrapper"><Button>Подобрать психолога</Button></div>
          <div className="subheading price">Первый сеанс: <p className="subheading first-price">14 000тг</p> - 8 990 тг ~ 60 минут</div>
        </div>
        <div className="images-contanier">
          <div className="img1-wrapper"></div>
          <div className="img2-wrapper"></div>
        </div>
      </div>
    )
  }
}

export default HeroSection
