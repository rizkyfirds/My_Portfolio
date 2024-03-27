import React, { useState } from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import msib from "../../assets/msib.jpg";
import magenta from "../../assets/magenta.jpg";

export default function HoverImg({
  company,
  desc,
  titleImg
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClickImg = () => {
    window.open(titleImg, "_blank");
  };

  return (
    <div className="max-h-96 w-1/3">
      <h1 className="text-sm md:text-4xl text-blue font-bold">{company}</h1>
      <h1 className="text-sm md:text-xl text-blue font-semibold  mb-2">
        {desc}
      </h1>

      <div
        className={`flex md:h-1/2 w-fit border-4 border-blue rounded-xl relative ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={titleImg} alt="" className=" p-1 h-full" />
        <button
          onClick={handleClickImg}
          className={`flex h-full w-full text-2xl z-10 absolute transition-opacity  ${
            isHovered ? "bg-opacity-70 bg-white rounded-xl" : "opacity-0"
          }`}
        >
          <BiSolidRightTopArrowCircle className="m-auto text-blue font-bold" />
        </button>
      </div>
    </div>
  );
}
