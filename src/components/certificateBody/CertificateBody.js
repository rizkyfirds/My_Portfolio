import React, { useState } from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
// import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import msib from "../../assets/msib.jpg";
import magenta from "../../assets/magenta.jpg";
import HoverImg from "../button/HoverImg";

export default function CertificateBody() {
  return (
    <div className="m-4 md:my-10">
      <div className="flex text-blue justify-between">
        <p className="text-3xl md:text-9xl font-bold">Certificate</p>
        <BsArrowDownRightCircle className="hidden md:text-8xl my-auto" />
      </div>
      <div className="flex mt-4 md:mb-9 gap-x-6">
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
      </div>
    </div>
  );
}
