import React from "react";
import Profile from "../../assets/NewProfile.jpg";
import ButtonHoverBlue from "../button/ButtonHoverBlue";

export default function Header() {
  return (
    <div className="mt-28 px-4 sm:px-6 lg:px-8">
      <div className="lg:flex justify-center lg:grid grid-cols-12">
        <img
          src={Profile}
          alt=""
          className="col-start-2 col-end-5 row-end-2 h-40 w-ful rounded-full mx-auto"
        />
        <p className="lg:mx-8 col-start-5 col-end-9 text-5xl lg:text-[80px] font-bold my-auto text-center text-blue">
          Muhammad
        </p>
      </div>
      <div className="flex justify-center lg:grid grid-cols-10">
        <div className="col-start-4 col-end-10">
          <p className="text-5xl lg:text-[80px] font-bold text-blue">
            Rizky Firdaus
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="lg:flex lg:justify-end w-fit">
          <img src={Profile} alt="" className=" w-auto mx-auto"/>
          <p className="lg:mx-8 text-5xl lg:text-[148px] font-bold my-auto text-blue">Muhammad</p>
        </div>
      </div>
      <div className="lg:flex lg:justify-end">
        <div className="lg:flex mx-auto w-fit">
          <p className="lg:mx-8 text-5xl lg:text-[148px] font-bold text-blue">
            Rizky Firdaus
          </p>
        </div>
      </div> */}
      <div className="mt-10 md:mt-16">
        <div className="flex justify-center lg:justify-start">
          <p className="text-3xl lg:text-[40px] font-bold my-auto text-blue mb-[32px]">
            Full Stack Developer
          </p>
        </div>
        <div className="lg:flex gap-4">
          <a
            href="https://github.com/rizkyfirds"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <ButtonHoverBlue label={"View Github"} isFlex={true} />
          </a>
          <a
            href="https://drive.google.com/file/d/1h_VJLLP82hfcGiygZqCkzkOnxMzEOldw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonHoverBlue label={"Resume"} isFlex={true} />
          </a>
        </div>
      </div>
    </div>
  );
}
