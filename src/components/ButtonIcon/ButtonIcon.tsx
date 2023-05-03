import React from "react";
import "./ButtonIcon.scss";
import { act } from "react-dom/test-utils";

function ButtonClose({srcIcon, active, handleClick}: {srcIcon:string, active?: boolean, handleClick?: () => void}) {
  return (
    <button 
    className={`button-icon ${active? 'button-icon--active':''}`}
    onClick = {
      (e: any) =>{e.preventDefault();
      if(handleClick){
        handleClick()
      }
   }}
    >
      <img src={srcIcon} alt="icon btn"/>
    </button>
  );
}

export default ButtonClose;
