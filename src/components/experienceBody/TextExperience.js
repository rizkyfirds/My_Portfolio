import React from "react";

export default function TextExperience({date, company, details}) {
  return (
      <div className="md:flex gap-4 text-white font-bold text-lg md:text-xl lg:text-2xl mb-6">
        <div className="flex font-normal md:w-1/4 md:justify-end">{date}</div>
        <div className="md:w-3/4">
          <p className="mb-2 lg:mb-4 focus:bg-white">{company}</p>
          <p className="font-normal text-sm md:text-lg lg:text-xl text-justify leading-6 lg:leading-8">
            {details}
          </p>
        </div>
      </div>
  );
}
