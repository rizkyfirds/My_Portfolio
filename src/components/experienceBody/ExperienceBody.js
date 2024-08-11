import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import TextExperience from "./TextExperience";
export default function ExperienceBody() {
  return (
    <div className="flex h-full gap-4 overflow-y-auto">
      <div className="hidden md:flex w-1/6 md:w-1/5 justify-end">
        <IoArrowForwardCircleOutline className="text-3xl md:text-6xl lg:text-[70px] text-white mt-1"/>
      </div>
      <div className="md:w-4/5 sm:mx-4  md:mx-4 lg:mr-64">
        <p className="text-3xl md:text-6xl lg:text-[80px] mb-6 md:mb-14 text-white font-bold">Experience</p>
        <div className="gap-y-10">
          <TextExperience
            date={"Aug 2023 - Dec 2023"}
            company={"MSIB Batch 5 at PT Len Industri (Persero)"}
            details={
              "In The Kampus Merdeka program I interned as a Frontend Developer at PT. Len Industri (Persero). At this internship, the technologies used are React JS, Tailwind CSS, Redux, WebSocket, Micro Frontend, and Scrum. During the internship, I worked on assigned tasks with the team and was guided by a mentor."
            }
          />
          <TextExperience
            date={"Sep 2023 - Dec 2023"}
            company={"SD Islam Terpadu INSPIRATIF Bojongsari"}
            details={"Joined a team with other lecturers and students. In this team, I am a frontend developer who uses React JS and Tailwind CSS. The program created is the student and teacher administration website of SD Islam Terpadu INSPIRATIF Bojongsari."}
          />
        </div>
      </div>
    </div>
  );
}
