import React, {useEffect} from 'react'
import logo from '../img/Logo Ulive.png'
import Button from './Button.js';
import Modal from 'react-modal';
import "./Navbar.css";
import burger from '../img/burger.png';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

function Navbar() {
  let subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }
  const [scrolled, setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 10 ){
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
          <button className="navbar-burger">
            <img className="burger-img" alt="Burger" src={burger}></img>
          </button>
          <img className="logo" src={logo} alt="logo"/>
          <ul className="navbar-list">
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">Новости</a></li>
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">Вакансии</a></li>
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">FAQ</a></li>
            <li className="navbar-list-element"><a className="navbar-list-link" href="/">Психологи</a></li>
            <li className="navbar-list-element "><Button onClick={openModal} buttonSize="btn-medium">Записаться на сеанс</Button></li>
          </ul>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">

            <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </nav>
      </header>
    </>
  )
}

export default Navbar;
