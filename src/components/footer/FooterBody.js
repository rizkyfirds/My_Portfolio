import React from "react";
import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import LinkButton from "./LinkButton";

export default function FooterBody() {

  return (
    <div className="lg:flex lg:justify-between gap-4 mx-4 lg:mx-20 my-2 ">
      <div className="text-4xl md:text-6xl lg:text-[90px] font-bold text-white mb-8">
        <p>Let's Work</p>
        <p className="">Together</p>
      </div>
      <div className="p-4 rounded-lg bg-navy bg-opacity-20 ">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
            Connect Social Media
          </p>
          <div className="mx-auto">
            <div className="flex lg:justify-center gap-x-2 lg:gap-x-5 text-white py-4">
              <LinkButton link={"https://www.instagram.com/rizkyfirds/"} Icon={FaInstagram}/>
              <LinkButton link={"https://www.linkedin.com/in/muhammadrizkyfirdaus/"} Icon={FaLinkedinIn}/>
              <LinkButton link={"https://github.com/rizkyfirds"} Icon={FiGithub}/>
            </div>
            <p className="text-base lg:text-lg font-semibold text-white">
              Call Us: +62 812-1448-8382
            </p>
            <div className="flex gap-x-2 py-1">
              <FaRegCopyright className="text-white my-auto text-sm " />
              <p className="text-sm font-semibold text-white">
                2024 Muhammad Rizky Firdaus
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
