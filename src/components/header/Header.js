import React from "react";
import Profile from "../../assets/Profile.png";
import ButtonHoverBlue from "../button/ButtonHoverBlue";

export default function Header() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
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
      </div>
      <div className="my-20">
        <div className="flex justify-center lg:justify-start">
          <p className="text-3xl lg:text-[72px] font-bold my-auto text-blue mb-[32px]">
            Front-end Developer
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
            href="https://drive.google.com/file/d/1jyfXH2v8eAfBX2A0N6gaDxlOdGE3cW0m/view?usp=sharing"
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
