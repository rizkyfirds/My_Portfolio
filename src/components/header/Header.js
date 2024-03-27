import React from "react";
import Profile from "../../assets/Profile.png";
import ButtonHoverBlue from "../button/ButtonHoverBlue";

export default function Header() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:flex h-1/3">
        <div className="mx-auto lg:flex lg:justify-end">
          <img src={Profile} alt="" className="w-1/3 lg:w-auto"/>
          <p className="lg:mx-8 text-5xl lg:text-8xl font-bold my-auto text-blue">Muhammad</p>
        </div>
      </div>
      <div className="lg:flex h-1/3 lg:justify-end">
        <div className="lg:flex mx-auto">
          <p className="lg:mx-8 text-5xl lg:text-8xl font-bold my-auto text-blue">
            Rizky Firdaus
          </p>
        </div>
      </div>
      <div className="h-1/3 mt-4">
        <div>
          <p className="text-3xl lg:text-4xl font-bold my-auto text-blue mb-5">
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
