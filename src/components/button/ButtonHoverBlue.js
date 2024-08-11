import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion"
export default function ButtonHoverBlue({ label, isFlex = false, click = false, isStat = false }) {

  const handleClick = () => {
    isStat(true);
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={click ? handleClick : null}
      className={`${
        isFlex ? "justify-center items-center flex md:py-4 px-8 md:gap-2 mb-2" : ""
      } m-auto w-2/3 md:w-full font-semibold rounded-full border-solid border-2 px-4 py-1 text-blue border-blue hover:bg-blue hover:text-white  hover:font-semibold`}
    >
      <p>{label}</p>
      {isFlex && <HiOutlineArrowUpRight className="my-auto" />}
    </motion.button>
  );
}
