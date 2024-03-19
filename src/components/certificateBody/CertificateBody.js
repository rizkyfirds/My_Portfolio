import React from 'react'
import { BsArrowDownRightCircle } from "react-icons/bs";
import msib from "../../assets/msib.jpg";

export default function CertificateBody() {
  return (
    <div className="h-screen pb-14">
      <div className="flex text-blue justify-between">
        <p className="text-9xl font-bold">Certificate</p>
        <BsArrowDownRightCircle className="text-8xl my-auto" />
      </div>
      <div className="flex h-full pt-16 pb-4">
        <div className=''>
          <h1 className='text-3xl text-blue font-bold'>PT. Len Industri (Persero)</h1>
          <h1 className='text-1xl text-blue font-bold  pb-5'>MSIB Batch 5 as Frontend Developer</h1>
          <img src={msib} alt="" className='h-2/3 rounded-xl'/>
        </div>
      </div>
    </div>
  )
}
