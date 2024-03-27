import React from 'react'
import { FiGithub } from "react-icons/fi";

export default function ProjectText({label, desc, gitLogo = false}) {
  return (
    <div className='mt-2 md:mt-6 lg:mt-14 mb-8 text-blue'>
        <div className={`${gitLogo? "flex justify-between": ""} font-bold text-lg md:text-2xl lg:text-4xl`}>
          <p>{label}</p>
          <a
                href="https://github.com/rizkyfirds/My_Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className={`${gitLogo?"relative p-1 md:p-2 rounded-full border-2":"hidden"}`}
              >
                <FiGithub className="text-lg md:text-xl lg:text-2xl" />
              </a>
        </div>
        <p className='text-sm md:text-lg lg:text-xl font-semibold text-justify'>{desc}</p>
    </div>
  )
}
