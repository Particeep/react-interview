import React from "react";
import "./ButtonLike.scss";

interface LikeButtonProps {
  active?: boolean;
  onClick?: () => void;
}

const HeartIcon = ({ isActive }: { isActive: boolean | undefined }) => {
  return (
    <svg
      className={`like-btn ${isActive ? "like-btn--active" : ""}`}
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21L9.8325 19.4894C3.91 14.145 0 10.6087 0 6.29428C0 2.75804 2.783 0 6.325 0C8.326 0 10.2465 0.926975 11.5 2.38038C12.7535 0.926975 14.674 0 16.675 0C20.217 0 23 2.75804 23 6.29428C23 10.6087 19.09 14.145 13.1675 19.4894L11.5 21Z"
        fill="#25C9FF"
      />
    </svg>
  );
};
export default function LikesButton({ active }: LikeButtonProps) {
  return <HeartIcon isActive={active} />;
}
