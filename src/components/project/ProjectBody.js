import React from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import ProjectText from "./ProjectText";
import ReactPlayer from "react-player/youtube";

export default function ProjectBody() {
  return (
    <div className="py-14">
      <div className="flex text-blue justify-between">
        <p className="text-9xl font-bold">Project</p>
        <BsArrowDownRightCircle className="text-8xl my-auto" />
      </div>
      <div className="pb-9">
        <div>
          <ProjectText
            label={
              "Administration Website of SD Islam Terpadu INSPIRATIF Bojongsari"
            }
            desc={
              "This website was created to facilitate the school of SD Islam Terpadu INSPIRATIF Bojongsari in administration. This website was built using React.js, TailwindCss, and RESTful API. The following is documentation of activities during socialization and website training."
            }
          />
          <div className="h-1/3">
            <ReactPlayer
              url={"https://youtu.be/1jsyqwGLNMw?si=pyD_3FPNyACT6j2W"}
              className="h-full w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
