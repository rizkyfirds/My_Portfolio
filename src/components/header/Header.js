import React from "react";
import Profile from "../../assets/Profile.png";
import ButtonHoverBlue from "../button/ButtonHoverBlue";

export default function Header() {
  return (
    <div className="h-full w-full px-16">
      <div className="flex h-1/3">
        <div className="flex w-2/3 justify-end">
          <img src={Profile} alt="" />
          <p className="px-8 text-8xl font-bold my-auto text-blue">Muhammad</p>
        </div>
      </div>
      <div className="flex h-1/3 justify-end">
        <div className="flex w-2/3">
          <p className="px-8 text-8xl font-bold my-auto text-blue">
            Rizky Firdaus
          </p>
        </div>
      </div>
      <div className="h-1/3 pt-4">
        <div>
          <p className="text-4xl font-bold my-auto text-blue mb-5">
            Front-end Developer
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/rizkyfirds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonHoverBlue label={"View Github"} isFlex={true} />
          </a>
          <a
            href="https://drive.google.com/file/d/1Igw9OgEFiEuUAf7M-x8aWUFECyZxrCPq/view?usp=sharing"
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
