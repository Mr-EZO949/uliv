import React from 'react'
import './QuestionsSection.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import telegram from '../img/telegram.png';
import whatsapp from '../img/whatsup.png';
import messenger from '../img/messenger.png';

function Questions() {
  // const addClassName = (className) =>{
  //   className="faq-question-button faq-question-button-active";
  // }
  return (
    <div className="questions-container">
      <p className="questions-paragraph">Остались вопросы? Напишите нам, мы поможем</p>
      <div className="social-medias-wrapper">
        <div className="social-media">
          <a className="social-media-text" href="/">
            <img className="social-media-icon" src={telegram} alt="telegram"/>
            <p>Telegram</p>
          </a>
        </div>
        <div className="social-media">
          <a className="social-media-text" href="/">
            <img className="social-media-icon" src={whatsapp} alt="whatsapp"/>
            <p>Whatsapp</p>
          </a>
        </div>
        <div className="social-media">
          <a className="social-media-text" href="/">
            <img className="social-media-icon" src={messenger} alt="messenger"/>
            <p>Messenger</p>
          </a>
        </div>
      </div>
      <h2 className="main-heading faq-heading">Часто задаваемые вопросы</h2>
      <ul className="faq-list">
        <li className="faq-list-item"><Accordion className="faq-question-button">
        <AccordionSummary style={{border: 'none', padding: '0px', minHeight: '0px'}}
          aria-controls="panel1a-content"
        >
          <Typography className="question-text">Эффективно ли онлайн консультирование?</Typography>
        </AccordionSummary>
        <AccordionDetails className="answer-wrapper">
          <Typography className="answer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion></li>
        <li className="faq-list-item">
        <Accordion className="faq-question-button">
        <AccordionSummary style={{border: 'none', padding: '0px', minHeight: '0px'}}
          aria-controls="panel1a-content"
        >
          <Typography className="question-text">Эффективно ли онлайн консультирование?</Typography>
        </AccordionSummary>
        <AccordionDetails className="answer-wrapper">
          <Typography className="answer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className="faq-list-item">
          <Accordion className="faq-question-button">
        <AccordionSummary style={{border: 'none', padding: '0px', minHeight: '0px'}}
          aria-controls="panel1a-content"
        >
          <Typography className="question-text">Эффективно ли онлайн консультирование?</Typography>
        </AccordionSummary>
        <AccordionDetails className="answer-wrapper">
          <Typography className="answer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className="faq-list-item">
          <Accordion className="faq-question-button">
        <AccordionSummary style={{border: 'none', padding: '0px', minHeight: '0px'}}
          aria-controls="panel1a-content"
        >
          <Typography className="question-text">Эффективно ли онлайн консультирование?</Typography>
        </AccordionSummary>
        <AccordionDetails className="answer-wrapper">
          <Typography className="answer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className="faq-list-item">
          <Accordion className="faq-question-button">
        <AccordionSummary style={{border: 'none', padding: '0px', minHeight: '0px'}}
          aria-controls="panel1a-content"
        >
          <Typography className="question-text">Эффективно ли онлайн консультирование?</Typography>
        </AccordionSummary>
        <AccordionDetails className="answer-wrapper">
          <Typography className="answer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className="faq-list-item">
          <Accordion className="faq-question-button">
        <AccordionSummary style={{border: 'none', padding: '0px', minHeight: '0px'}}
          aria-controls="panel1a-content"
        >
          <Typography className="question-text">Эффективно ли онлайн консультирование?</Typography>
        </AccordionSummary>
        <AccordionDetails className="answer-wrapper">
          <Typography className="answer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
        <li className="faq-list-item">
          <Accordion className="faq-question-button">
        <AccordionSummary style={{border: 'none', padding: '0px', minHeight: '0px'}}
          aria-controls="panel1a-content"
        >
          <Typography className="question-text">Эффективно ли онлайн консультирование?</Typography>
        </AccordionSummary>
        <AccordionDetails className="answer-wrapper">
          <Typography className="answer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </li>
      </ul>
    </div>
  )
}

export default Questions
