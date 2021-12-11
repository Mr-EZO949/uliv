import React, {useEffect} from 'react'
import logo from '../img/Logo Ulive.png'
import Button from './Button.js';
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 70 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['navbar-container'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
  return (
    <> 
      <header className={navbarClasses.join(" ")}>
        <nav className="navbar">
          <img className="logo" src={logo} alt="logo"/>
          <ul className="navbar-list">
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">Новости</a></li>
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">Вакансии</a></li>
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">FAQ</a></li>
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">Психологи</a></li>
            <li className="navbar-list-element "><Button buttonSize="btn-medium">Записаться на сеанс</Button></li>
          </ul>
          
        </nav>
      </header>
    </>
  )
}

export default Navbar;
