import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import ProjectText from "./ProjectText";
import ReactPlayer from "react-player/youtube";
import Port from "../../assets/projectPort.png";
import Drink from "../../assets/drink.png";

export default function ProjectBody() {
  return (
    <div className="m-4">
      <div className="flex text-blue justify-between mb-6 md:mb-20">
        <p className="text-3xl md:text-6xl lg:text-9xl font-bold">Project</p>
        <BsArrowDownRightCircle className="hidden md:text-6xl lg:text-8xl my-auto" />
      </div>
      <div className="md:mb-9">
        <div className="mb-12">
          <ProjectText
            label={
              "Administration Website of SD Islam Terpadu INSPIRATIF Bojongsari"
            }
            desc={
              "This website was created to facilitate the school of SD Islam Terpadu INSPIRATIF Bojongsari in administration. This website was built using React.js, TailwindCss, and RESTful API. The following is documentation of activities during socialization and website training."
            }
          />
          <div className="md:hidden">
            <ReactPlayer
              url={"https://youtu.be/1jsyqwGLNMw?si=pyD_3FPNyACT6j2W"}
              width="100%"
              className="md:w-auto w-full h-full"
            />
          </div>
          <div className="hidden md:flex">
            <ReactPlayer
              url={"https://youtu.be/1jsyqwGLNMw?si=pyD_3FPNyACT6j2W"}
              className="md:w-auto w-full h-full border-2"
            />
          </div>
        </div>
        <div className="mb-12">
        <ProjectText
            label={
              "My Portfolio"
            }
            desc={
              "This portfolio was built using React.js and TailwindCSS."
            }
            gitLogo={true}
            linkSite={"https://mrizkyfirdaus-portfolio.vercel.app/"}
            linkGit={"https://github.com/rizkyfirds/My_Portfolio"}
          />
          <img src={Port} alt="" className="rounded-xl border-blue p-1 border-4" />
        </div>
        <div className="mb-12">
          <ProjectText
            label={
              "Drink RL"
            }
            desc={
              "This project Drink RL was built using React.js and TailwindCSS."
            }
            gitLogo={true}
            linkSite={"https://drink-rl.vercel.app/"}
            linkGit={"https://github.com/rizkyfirds/drinkRL-vercel.git"}
          />
          <img src={Drink} alt="" className="rounded-xl border-blue p-1 border-4" />
        </div>
      </div>
    </div>
  );
}
