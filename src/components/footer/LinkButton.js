import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function LinkButton({link, Icon}) {
  return (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative p-2 lg:p-4 rounded-full border-2 hover:bg-white hover:text-blue md:hover:scale-110 transition-transform hover:font-semibold"
    >
        <Icon className="text:lg lg:text-xl" />
    </a>
  )
}
