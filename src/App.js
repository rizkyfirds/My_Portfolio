import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import './App.css';
import { BiSolidToTop } from "react-icons/bi";
import Header from '../src/components/header/Header.js';
import Headbar from './components/headbar/Headbar.js';
import ExperienceBdoy from './components/experienceBody/ExperienceBody.js';
import ProjectBody from './components/project/ProjectBody.js';
import CertificateBody from './components/certificateBody/CertificateBody.js';
import FooterBody from './components/footer/FooterBody.js';

function App() {
  const [experienceStat, isExperienceStat] = useState(false);
  const [projectStat, isProjectStat] = useState(false);
  const [certificateeStat, isCertificateeStat] = useState(false);
  const [contactStat, isContactStat] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const certificateRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY === 0 ? false : true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (experienceStat) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
      isExperienceStat(false);
    } else if (projectStat) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
      isProjectStat(false);
    } else if (certificateeStat) {
      certificateRef.current.scrollIntoView({ behavior: 'smooth' });
      isCertificateeStat(false);
    } else if (contactStat) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
      isContactStat(false);
    }
  }, [experienceStat, projectStat, certificateeStat, contactStat]);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='h-screen w-full font-inter relative'>
      <div className='h-1/6 py-[24px]'>
        <Headbar 
          exp={experienceStat} 
          isExp={isExperienceStat} 
          pro={projectStat} 
          isPro={isProjectStat} 
          certif={certificateeStat} 
          isCertif={isCertificateeStat} 
          cont={contactStat} 
          isCont={isContactStat}
        />
      </div>
      <div className='h-fit md:mx-[80px] py-12 lg:py-[64px]'>
        <Header/>
      </div>
      <div className='h-fit w-full bg-blue md:px-[80px] py-12 lg:py-[64px]' ref={experienceRef}>
        <ExperienceBdoy/>
      </div>
      <div className='h-fit md:mx-[80px] py-12 lg:py-[64px]' ref={projectRef}>
        <ProjectBody/>
      </div>
      <div className='h-fit md:mx-[80px] py-12 lg:py-[64px]' ref={certificateRef}>
        <CertificateBody/>
      </div>
      <div className='h-fit bg-blue md:px-14 py-12 lg:py-[64px]' ref={contactRef}>
        <FooterBody/>
      </div>
      {showScrollButton && (
        <button
          className="fixed bottom-8 right-8 z-10 bg-blue rounded-full shadow-xl p-4 text-white animate-bounce"
          onClick={handleMoveToTop}
        >
          <BiSolidToTop className='text-xl ' />
        </button>
      )}
    </div>
  );
}

export default App;
