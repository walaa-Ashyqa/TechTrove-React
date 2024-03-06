import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import {
  discount,
  robot,
  heroLaptope,
  herolaptope2,
  unsplash_laptope,
} from "../assets";
function Hero() {
  return (
    <section
      id="home"
      className={` w-full flex md:flex-row flex-col justify-between items-center  bg-black     `}
    >
      <div className={`flex-1 flex-col  ${styles.paddingY}`}>
        {/* discount */}
        <div
          className={`flex flex-row  items-center py-[6px]   bg-gradient-to-r  from-gray-900 to-black `}
        >
          <img src={discount} alt="discount" className={`w-[32px] h-[32px]`} />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">First</span> Purchase
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold
          ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]"
          >
            {" "}
            The Next <br className="sm:block hidden" />{" "}
            <span className=" bg-gradient-to-r   from-[#33BBCF] to-[#DEF9FA] text-transparent bg-clip-text inline-block">
              Generation
            </span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1
          className="font-poppins  pb-10 font-semibold
          ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full"
        >
          Laptops
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] `}>
        At TechTrove, we're dedicated to bringing you the latest in cutting-edge technology, 
        offering a curated selection of high-performance laptops tailored to meet your every need. 
        </p>
      </div>

      <div className={` flex-1 ${styles.flexCenter}  justify-end `}>
        <img src={herolaptope2} alt="billing" className="  w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default Hero;
