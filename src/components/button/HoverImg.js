import React, { useState, useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import msib from "../../assets/msib.jpg";
import magenta from "../../assets/magenta.jpg";

export default function HoverImg({ company, desc, titleImg }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickImg = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current &&!modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  }

  useEffect(()=> {
    if (isModalOpen){
      document.addEventListener('mousedown', handleClickOutside)
    }else{
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalOpen])

  return (
    <div className="snap-start h-fit min-w-72 max-w-full mb-4">
      <h1 className="text-lg md:text-xl lg:text-3xl text-blue font-bold mb-2 lg:mb-4">
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue/50">
          <div ref={modalRef} className="relative flex items-center justify-center bg-blue/90 border-white border-2 rounded-xl p-4 w-4/5 lg:w-fit h-fit lg:h-3/4">
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 m-2 text-xl font-bold text-blue bg-white hover:bg-blue hover:text-white rounded-full"
            >
              <IoClose className=" text-2xl"/>
            </button>
            <img src={titleImg} alt="" className="w-fit h-full" />
          </div>
        </div>
      )}
    </div>
  );
}
