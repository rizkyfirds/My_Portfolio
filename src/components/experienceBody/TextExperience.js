import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function TextExperience({date, company, details}) {
  return (
      <div className="flex gap-4 text-white font-bold text-2xl mb-6">
        <div className="flex w-1/4 justify-end">{date}</div>
        <div className="w-3/4">
          <p>{company}</p>
          <p className="font-normal text-xl">
            {details}
          </p>
        </div>
      </div>
  );
}
