import React from 'react';

const Button = props=>(
  <button
  id={props.id}
  className={props.className}
  onClick={props.onClick}
  >{props.name}</button>
);

export default Button;