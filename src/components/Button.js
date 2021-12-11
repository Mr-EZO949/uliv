import React from "react";
import './Button.css';

const SIZES = ['btn-large', 'btn-medium'];

export const Button = ({
  children, type, onClick, buttonSize
}) =>{
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return(
    <button className={`btn ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;