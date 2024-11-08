import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { BiSolidToTop } from "react-icons/bi";
import Header from "../src/components/header/Header.js";
import Headbar from "./components/headbar/Headbar.js";
import ExperienceBody from "./components/experienceBody/ExperienceBody.js";
import ProjectBody from "./components/project/ProjectBody.js";
import CertificateBody from "./components/certificateBody/CertificateBody.js";
import FooterBody from "./components/footer/FooterBody.js";
import "./index.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true); // New loading state
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
      setShowScrollButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    if (experienceStat) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
      isExperienceStat(false);
    } else if (projectStat) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
      isProjectStat(false);
    } else if (certificateeStat) {
      certificateRef.current.scrollIntoView({ behavior: "smooth" });
      isCertificateeStat(false);
    } else if (contactStat) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
      isContactStat(false);
    }
  }, [experienceStat, projectStat, certificateeStat, contactStat]);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ParallaxProvider>
      {loading ? (
        <div className="flex items-center justify-center h-screen ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue"></div>
        </div>
      ) : (
        <div className="h-full w-full font-inter relative bg-custom-white bg-whiteMain">
          <div className="fixed top-0 z-20 w-full h-14 bg-custom-white bg-whiteMain">
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
          <Parallax speed={20} translateY={["-200px", "180px"]} className="z-0">
            <div className="h-fit md:mx-[80px] py-12 lg:py-[84px]">
              <Header />
            </div>
          </Parallax>
          <div
            className="h-fit w-full bg-custom-blue bg-blueBackground px-[15px] md:px-[30px] py-12 lg:py-[84px] z-10 relative"
            ref={experienceRef}
          >
            <ExperienceBody />
          </div>
          <div className="h-fit md:mx-[80px] py-12 lg:py-[64px]" ref={projectRef}>
            <ProjectBody />
          </div>
          <div
            className="h-fit md:mx-[80px] py-12 lg:pb-[64px] lg:pt-[20px]"
            ref={certificateRef}
          >
            <CertificateBody />
          </div>
          <div
            className="h-fit bg-custom-blue bg-blueBackground md:px-10 py-12 lg:py-[84px]"
            ref={contactRef}
          >
            <FooterBody />
          </div>
          {showScrollButton && (
            <button
              className="fixed bottom-8 right-8 z-10 bg-blue rounded-full shadow-xl p-4 text-white animate-bounce"
              onClick={handleMoveToTop}
            >
              <BiSolidToTop className="text-xl " />
            </button>
          )}
        </div>
      )}
    </ParallaxProvider>
  );
}

export default App;
