import React from "react";

export const ChevronLeftIcon = ({ fill = "currentColor", filled, size, height, width, label, ...props }) => {
  return (
    <svg width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" fill={filled ? fill : "none"} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15.5 19L8.5 12L15.5 5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
