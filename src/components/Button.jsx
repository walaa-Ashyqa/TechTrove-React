import React from "react";

const Button = ({ styles,title,onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={` font-poppins font-medium text-[18px] bg-white text-primary   rounded-[10px] outline-none ${styles}`}
  >
   {title}
  </button>
);

export default Button;
