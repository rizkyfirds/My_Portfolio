import React from "react";
import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function FooterBody() {
  //   const redirectToInstagram = () => {
  //     window.location.href = "https://www.instagram.com/rizkyfirds/";
  //   };
  return (
    <div className="h-full bg-blue">
      <div className="text-9xl font-bold text-white pb-10">
        <p>Let's Work</p>
        <p className="pl-60">Together</p>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <div className="my-auto">
            <p className="text-3xl font-semibold text-white">
              Connect Social Media
            </p>
            <div className="flex gap-x-5 text-white py-4">
              <a
                href="https://www.instagram.com/rizkyfirds/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 rounded-full border-2"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammadrizkyfirdaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 rounded-full border-2"
              >
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a
                href="https://github.com/rizkyfirds"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 rounded-full border-2"
              >
                <FiGithub className="text-2xl" />
              </a>
            </div>
            <p className="text-xl font-semibold text-white">
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
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
