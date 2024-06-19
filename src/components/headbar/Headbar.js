import React, { useState } from "react";
import Profile from "../../assets/NewProfile.jpg";
import ButtonHoverBlue from "../button/ButtonHoverBlue";
import { HiBars2 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

export default function Headbar({
  exp,
  isExp,
  pro,
  isPro,
  certif,
  isCertif,
  cont,
  isCont,
}) {
  const [menuBar, setMenuBar] = useState(false);

  const handleClick = () => {
    setMenuBar(!menuBar);
  };

  return (
    <div className="w-full h-full relative z-30">
      <div className="h-full px-4 md:px-16 flex h-1/2">
        <div className="flex w-1/2 h-1/2 my-auto">
          <div className="flex h-full">
            <img src={Profile} alt="" className="rounded-full h-full my-auto" />
            <p className="px-3 my-auto font-bold text-sm md:text-lg text-blue">
              Muhammad Rizky Firdaus
            </p>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <div className="hidden lg:flex h-full justify-end gap-x-4 text-lg ">
            <ButtonHoverBlue label={"Experience"} click={true} isStat={isExp} />
            <ButtonHoverBlue label={"Project"} click={true} isStat={isPro} />
            <ButtonHoverBlue
              label={"Certificate"}
              click={true}
              isStat={isCertif}
            />
            <ButtonHoverBlue label={"Contact"} click={true} isStat={isCont} />
          </div>
          <div className="lg:hidden relative">
            <div className="flex justify-end">
              <button onClick={handleClick}>
                {menuBar ? (
                  <IoClose className="my-auto text-blue text-2xl rounded-full border border-2 hover:bg-blue hover:text-white" />
                ) : (
                  <HiBars2 className="my-auto text-blue text-2xl rounded-full border border-2 hover:bg-blue hover:text-white" />
                )}
              </button>
            </div>
            {menuBar ? (
              <div className="absolute max-w-full right-0 text-sm bg-white rounded-xl border-solid border-2 border-blue mt-2 top-5">
                <button
                  onClick={() => {isExp(true); setMenuBar(!menuBar);}}
                  className="w-full font-semibold px-4 py-2 text-blue hover:bg-blue hover:text-white hover:font-semibold hover:rounded-t-xl"
                >
                  Experience
                </button>
                <button
                  onClick={() => {isPro(true);setMenuBar(!menuBar);}}
                  className="w-full font-semibold px-4 py-2 text-blue hover:bg-blue hover:text-white hover:font-semibold"
                >
                  Project
                </button>
                <button
                  onClick={() => {isCertif(true);setMenuBar(!menuBar);}}
                  className="w-full font-semibold px-4 py-2 text-blue hover:bg-blue hover:text-white hover:font-semibold"
                >
                  Certificate
                </button>
                <button
                  onClick={() => {isCont(true);setMenuBar(!menuBar);}}
                  className="w-full font-semibold px-4 py-2 text-blue hover:bg-blue hover:text-white hover:font-semibold hover:rounded-b-xl"
                >
                  Contact
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
