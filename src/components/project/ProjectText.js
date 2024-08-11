import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectText({
  label,
  desc,
  gitLogo = false,
  linkGit,
  linkSite,
}) {
  return (
    <div className="my-2 text-white ">
      <div
        className={`${
          gitLogo ? "flex justify-between" : ""
        } font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-[16px]`}
      >
        <p className="my-auto leading-tight">{label}</p>
        <div className="gap-x-4 flex">
          <a
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              gitLogo ? "relative h-fit p-2 rounded-full border-2 hover:bg-white hover:text-blue md:hover:scale-110 transition-transform hover:font-semibold" : "hidden"
            }`}
          >
            <FaExternalLinkAlt className="text-sm md:text-base lg:text-lg" />
          </a>
          <a
            href={linkGit}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              gitLogo
                ? "relative h-fit p-2 rounded-full border-2 hover:bg-white hover:text-blue md:hover:scale-110 transition-transform hover:font-semibold"
                : "hidden"
            }`}
          >
            <FiGithub className="text-sm md:text-base lg:text-lg " />
          </a>
        </div>
      </div>
      <p className="text-sm md:text-base lg:text-lg  text-justify leading-6 lg:leading-8">
        {desc}
      </p>
    </div>
  );
}
