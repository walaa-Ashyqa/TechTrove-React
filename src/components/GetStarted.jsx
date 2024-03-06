import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px]
   rounded-full bg-gradient-to-r from-[#33BBCF] to-[#DEF9FA]  p-[4px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full  bg-black`}
      >
        <div className={`${styles.flexCenter} flex-row`}>
          <p className=" font-poppins  font-bold text-[18px] leading-[32px]">
            <span className="mr-2 bg-gradient-to-r  from-[#33BBCF] to-[#DEF9FA] text-transparent bg-clip-text ">
              Get
            </span>
          </p>
          <img
              src={arrowUp}
              alt="arrow Up img"
              className=" object-contain w-[23px] h-[23px]"
            />
        </div>
        <span className="font-bold bg-gradient-to-r  from-[#33BBCF] to-[#DEF9FA] text-transparent bg-clip-text ">
           Started
            </span>
       </div>
    </div>
  );
}

export default GetStarted;
