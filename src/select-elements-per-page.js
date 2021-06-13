import React from 'react';

const ElementsAmountSelector =props=>(
  <div id="input">
  <input type='number'
  min={1}
  max={props.max}
  value={props.value}
  onChange={props.onChange}/>
  </div>
);

export default ElementsAmountSelector;