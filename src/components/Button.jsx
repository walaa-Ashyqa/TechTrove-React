import React from "react";

const Button = ({ styles,title,onClick,type,disabled }) => (
  <button
    type={type}
    onClick={onClick}
    className={` font-poppins font-medium text-[18px] bg-white text-primary   rounded-[10px] outline-none ${styles}`}
  disabled={disabled}
  >
   {title}
  </button>
);

export default Button;
