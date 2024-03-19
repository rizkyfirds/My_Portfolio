import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import TextExperience from "./TextExperience";
export default function ExperienceBdoy() {
  return (
    <div className="flex h-full pt-14 gap-4 overflow-y-auto">
      <div className="flex w-1/4 justify-end">
        <IoArrowForwardCircleOutline className="text-9xl text-white font-bold" />
      </div>
      <div className="w-3/4">
        <p className="text-9xl pb-14 text-white font-bold">Experience</p>
        <div className="gap-y-10">
          <TextExperience
            date={"Aug 2023- Dec 2023"}
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
