
import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import cartoonAnimation from '../assets/json/about.json';
import { motion, useAnimation } from 'framer-motion';
import cv from '../assets/pdf/Salim_Fayis_resume.pdf';

const titles = ['Web Developer', 'React Developer'];

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const controls = useAnimation();

  const cvDownloadLink = useRef(null);

  useEffect(() => {
    const changeTitle = async () => {
      await controls.start({ opacity: 0 });

      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);

      await controls.start({ opacity: 1 });
    };

    const intervalId = setInterval(() => {
      changeTitle();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [titleIndex, controls]);

  const downloadCV = () => {
    document.getElementById('cv-download-link').click();
  };

  return (
    <>
      <section id='home' className="hero main md:flex md:items-center md:justify-center md:space-x-8">
        <div className="md:w-2/5 mb-1 md:mb-0 md:mr-8 relative z-9">
          <h1 className="text-5xl font-bold ">
            Hi, I'm <span className="text-pink-500">Salim Fayis</span>
          </h1>
          <h2 className="text-3xl font-bold mb-4">
            a{' '}
            <motion.span animate={controls} className="text-pink-500">
              {titles[titleIndex]}
            </motion.span>
          </h2>
          <div>
            <button
              className="border border-gray-300 bg-[#0d141a] py-2 px-4 rounded-md shadow-md hover:shadow-lg mt-4"
              onClick={downloadCV}
            >
              Download CV
            </button>

            <a
              id="cv-download-link"
              href={cv} // Directly provide the CV file path or URL
              download="Salim_Fayis_resume.pdf" // Use the actual CV filename
              className="hidden"
            >
              Download CV (hidden link)
            </a>
          </div>
        </div>
        <div className="right md:w-2/5 overflow-hidden">
          {/* Replace with the path to your animated character JSON file */}
          <Lottie animationData={cartoonAnimation} loop autoplay />
        </div>
      </section>
    </>
  );
};

export default Home;
