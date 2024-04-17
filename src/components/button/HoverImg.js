import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import msib from "../../assets/msib.jpg";
import magenta from "../../assets/magenta.jpg";

export default function HoverImg({ company, desc, titleImg }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClickImg = () => {
    window.open(titleImg, "_blank");
  };

  return (
    <div className="snap-start h-fit min-w-72 max-w-full mb-4">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-blue font-bold mb-2 lg:mb-4">
        {company}
      </h1>
      <h1 className="text-sm md:text-lg lg::text-xl text-blue font-semibold mb-4 leading-6 lg:leading-8">
        {desc}
      </h1>
      <div
        className={`flex w-fit border-4 border-blue rounded-xl relative ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={titleImg} alt="" className=" p-1 h-48 md:h-60 lg:h-80" />
        <button
          onClick={handleClickImg}
          className={`flex h-full w-full text-2xl z-10 absolute transition-opacity cursor-alias  ${
            isHovered ? "bg-opacity-70 bg-white rounded-xl" : "opacity-0"
          }`}
        >
          <div className="flex m-auto bg-blue text-white rounded-3xl py-2 px-4 gap-x-2">

          <MdArrowOutward className="text-xl my-auto font-bold" />
          <p className="text-sm font-semibold">View</p>
          </div>
        </button>
      </div>
    </div>
  );
}
