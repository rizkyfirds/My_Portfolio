import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function ButtonHoverBlue({ label, isFlex = false, click = false, isStat = false }) {

  const handleClick = () => {
    isStat(true);
  };

  return (
    <button 
      onClick={click ? handleClick : null}
      className={`${
        isFlex ? "justify-center items-center flex md:py-2 md:gap-2 mb-2" : ""
      } my-auto w-full font-semibold rounded-full border-solid border-2 px-4 text-blue border-blue hover:bg-blue hover:text-white md:hover:scale-110 transition-transform hover:font-semibold`}
    >
      <p>{label}</p>
      {isFlex && <HiOutlineArrowUpRight className="my-auto" />}
    </button>
  );
}
