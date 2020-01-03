import React from "react";
import "./Button.styles.css";

const Button = props => (
  <button
    className={`
    button 
    ${props.operation ? "operation" : ""} 
    ${props.double ? "double" : ""} 
    ${props.triple ? "triple" : ""}
    `}
    onClick = {e => props.click && props.click(props.label)}
  >
    {props.label}
  </button>
);

export default Button;
