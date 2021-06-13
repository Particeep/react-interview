import React from 'react';
const Categories = props=>(
  <div id="categories">
  <select name="select" 
    onChange={props.onChange}>
    <option>All</option>
  {
  
    props.categories ?
    props.categories.map((element,index)=>(
      <option key={index}>{element}</option>
    ))
    :
    null
  }

  </select>
  </div> 
);

export default Categories;