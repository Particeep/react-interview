import React from 'react';
import Button from './button';
const Item = props=>{
  
  return(
  <div className="item">
   <h3>{ props.title }</h3> 
   <p> { props.category } </p> 
   <progress 
   min={0} max={100}
   value={
     props.likes - props.dislikes /
     props.likes + props.dislikes
   }></progress>
   { props.children }
  </div>
)};

export default Item;