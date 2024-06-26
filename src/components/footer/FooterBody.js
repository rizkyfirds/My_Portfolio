import React from "react";
import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function FooterBody() {

  return (
    <div className="lg:flex lg:justify-between gap-4 mx-4 lg:mx-40 my-2 bg-blue">
      <div className="text-4xl md:text-6xl lg:text-[100px] font-bold text-white mb-8">
        <p>Let's Work</p>
        <p className="">Together</p>
      </div>
      <div className="p-4 rounded-lg bg-navy bg-opacity-20 ">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
            Connect Social Media
          </p>
          <div className="mx-auto">
            <div className="flex lg:justify-center gap-x-2 lg:gap-x-5 text-white py-4">
              <a
                href="https://www.instagram.com/rizkyfirds/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 lg:p-4 rounded-full border-2"
              >
                <FaInstagram className="text:xl lg:text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadrizkyfirdaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 lg:p-4 rounded-full border-2"
              >
                <FaLinkedinIn className="text:xl lg:text-2xl" />
              </a>
              <a
                href="https://github.com/rizkyfirds"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2 lg:p-4 rounded-full border-2"
              >
                <FiGithub className="text:xl lg:text-2xl" />
              </a>
            </div>
            <p className="text-lg lg:text-xl font-semibold text-white">
              Call Us: +62 812-1448-8382
            </p>
            <div className="flex gap-x-2 py-1">
              <FaRegCopyright className="text-white my-auto text-sm " />
              <p className="text-sm font-semibold text-white">
                Muhammad Rizky Firdaus
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
