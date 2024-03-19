import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function ButtonHoverBlue({ label, isFlex = false }) {
  return (
    <button
      className={`${
        isFlex ? "flex py-2 gap-2" : ""
      } my-auto font-semibold rounded-full border-solid border-2 px-4 text-blue border-blue hover:bg-blue hover:text-white hover:scale-110 transition-transform hover:text-lg hover:font-semibold`}
    >
      <p>{label}</p>
      {isFlex && <HiOutlineArrowUpRight className="my-auto" />}
    </button>
  );
}
