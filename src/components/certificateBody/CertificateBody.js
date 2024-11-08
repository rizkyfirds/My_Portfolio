import React, { useEffect } from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import msib from "../../assets/msib.jpg";
import magenta from "../../assets/magenta.jpg";
import sertif_fullstack from "../../assets/sertif_fullstack.jpg";
import HoverImg from "../button/HoverImg";

export default function CertificateBody() {
  return (
    <div className="m-4">
      <div className="flex text-blue justify-between mb-6 md:mb-12">
        <p className="text-3xl md:text-6xl lg:text-[90px] font-bold ">Certificate</p>
        <BsArrowDownRightCircle className="hidden lg:flex md:text-4xl lg:text-7xl my-auto" />
      </div>
      <div className="h-full w-full overflow-x-auto snap-x mt-2 md:mt-6 md:mb-9 bg-scroll-blue">
        <div className="flex gap-x-9 w-max">
        <HoverImg
          company={"PT. Len Industri (Persero)"}
          desc={"MSIB Batch 5 as Frontend Developer. This certificate is obtained from the MSIB platform."}
          titleImg={msib}
        />
        <HoverImg
          company={"PT. Len Industri (Persero)"}
          desc={"MSIB Batch 5 as Frontend Developer. This certificate is obtained from the Magentaku platform."}
          titleImg={magenta}
        />
        <HoverImg
          company={"Udemy"}
          desc={"Web Development Bootcamp 2024"}
          titleImg={sertif_fullstack}
        />
        </div>
      </div>
    </div>
  );
}
