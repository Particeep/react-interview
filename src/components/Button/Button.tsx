import React from "react";
import "./Button.scss";

interface ButtonProps {
  label?: string | number;
  primary?: boolean;
  active?: boolean;
  withCrossIcon?: boolean;
  paginationNext?: boolean;
  paginationPrevious?: boolean;
  heartShape?: boolean;
  delete?: boolean;
  handleClick?: () => void;
}

const ArrowIcon = ({ isNext }: { isNext?: boolean }) => {
  return (
    <svg
      className={`button__icon-arrow ${
        isNext ? "button__icon-arrow--next" : "button__icon-arrow--prev"
      }`}
      width="10"
      height="15"
      viewBox="0 0 11 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.17972 0.375989L10.7212 8.79815C10.8226 8.89842 10.8945 9.00704 10.9371 9.12401C10.9797 9.24099 11.0007 9.36631 11 9.5C11 9.63369 10.979 9.75902 10.9371 9.87599C10.8952 9.99296 10.8232 10.1016 10.7212 10.2018L2.17972 18.6491C1.94316 18.883 1.64746 19 1.29262 19C0.937786 19 0.63364 18.8747 0.380184 18.624C0.126728 18.3733 8.0349e-08 18.0809 1.09567e-07 17.7467C1.38785e-07 17.4125 0.126728 17.1201 0.380184 16.8694L7.83179 9.5L0.380186 2.13061C0.143627 1.89666 0.0253464 1.60823 0.0253464 1.26533C0.0253464 0.922428 0.152075 0.62598 0.405531 0.375989C0.658987 0.125329 0.954685 -8.78189e-07 1.29263 -8.48646e-07C1.63057 -8.19102e-07 1.92627 0.12533 2.17972 0.375989Z"
        fill="white"
      />
    </svg>
  );
};

const CrossIcon = () => {
  return (
    <svg
      className="button__icon-cross"
      width="10"
      height="10"
      viewBox="0 0 9 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 5.45817L1.14639 8.81179C1.02091 8.93726 0.861217 9 0.6673 9C0.473384 9 0.313688 8.93726 0.188213 8.81179C0.0627374 8.68631 0 8.52662 0 8.3327C0 8.13878 0.0627374 7.97909 0.188213 7.85361L3.54183 4.5L0.188213 1.14639C0.0627374 1.02091 0 0.861217 0 0.6673C0 0.473384 0.0627374 0.313688 0.188213 0.188213C0.313688 0.0627374 0.473384 0 0.6673 0C0.861217 0 1.02091 0.0627374 1.14639 0.188213L4.5 3.54183L7.85361 0.188213C7.97909 0.0627374 8.13878 0 8.3327 0C8.52662 0 8.68631 0.0627374 8.81179 0.188213C8.93726 0.313688 9 0.473384 9 0.6673C9 0.861217 8.93726 1.02091 8.81179 1.14639L5.45817 4.5L8.81179 7.85361C8.93726 7.97909 9 8.13878 9 8.3327C9 8.52662 8.93726 8.68631 8.81179 8.81179C8.68631 8.93726 8.52662 9 8.3327 9C8.13878 9 7.97909 8.93726 7.85361 8.81179L4.5 5.45817Z"
        fill="#080816"
      />
    </svg>
  );
};



export default function Button({
  label,
  primary,
  active,
  withCrossIcon,
  paginationNext,
  paginationPrevious,
  heartShape,
  handleClick
}: ButtonProps) {
  return (
    <button
      className={`button 
    ${primary ? "button--primary" : "button--secondary"}
    ${active ? "button--active" : ""}
    ${withCrossIcon ? "button--with-cross-icon" : ""}
    ${paginationNext ? "button--pagination-next" : ""}
    ${paginationPrevious ? "button--pagination-prev" : ""}
    ${heartShape ? "button--heart-shape" : ""}
    `}

    onClick={(e: any) => {
      e.preventDefault();
      if(handleClick){
        handleClick()
      }
    }}
    >
      {primary && <div className="button__background" />}

      {!paginationNext && !paginationPrevious && label && (
        <span className="button__label">{label}</span>
      )}

      {withCrossIcon && <CrossIcon />}

      {(paginationNext || paginationPrevious) && (
        <ArrowIcon isNext={paginationNext} />
      )}


    </button>
  );
}
