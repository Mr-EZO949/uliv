import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import HeroSection from './components/HeroSection';
import Psychologists from './components/Psychologists';
import OnlinePsychologists from './components/OnlinePsychologists';
import CardsAdvantages from './components/CardsAdvantages';
import FindYourPsychologist from './components/FindYourPsychologist';
import FinalSection from './components/FinalSection';
import QuestionsSection from './components/QuestionsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Psychologists/>
      <OnlinePsychologists/>
      <CardsAdvantages/>
      <FindYourPsychologist/>
      <FinalSection/>
      <QuestionsSection/>
      <Footer/>
    </div>
  );
}

export default App;
