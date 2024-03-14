import React from 'react';
import profile from '../assets/images/profile.png';
import html from '../assets/images/html.png';
import cssImage from '../assets/images/css.webp';
import javascript from '../assets/images/javascript.png';
import mongodb from '../assets/images/mongodb.png';
import reactImage from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs.png';
import tailwind from '../assets/images/tailwind.png';
import express from '../assets/images/express.png';


const skillsData = [
    { image: html, title: 'HTML' },
    { image: cssImage, title: 'CSS' },
    { image: javascript, title: 'JavaScript' },
    { image: mongodb, title: 'MongoDB' },
    { image: reactImage, title: 'React JS' },
    { image: nodejs, title: 'Node JS' },
    { image: tailwind, title: 'TailwindCss' },
    { image: express, title: 'Express JS' },
  ];

  const SkillCard = ({ image, title }) => (
    <div className="inline-block p-8 rounded-lg bg-gradient-to-br from-gray-200 via-white to-gray-200 shadow-md m-4 transition-transform hover:scale-105">
      <img className="w-20 h-20 rounded-full mb-4" src={image} alt={title} />
      <h3 className="text-center">{title}</h3>
    </div>
  );


const About = () => {

  
  return (
    <section id="about" className="main py-16">
      {/* About Me */}
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl  font-bold">About</h2>
          <p className="italic text-gray-600">Learn more about me</p>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/3">
            <img src={profile} className="w-[75%] rounded-lg" alt="Profile" />
          </div>
          <div className="lg:w-2/3 pt-4 lg:pt-0 ">
            <h3 className="text-2xl font-semibold">Web Developer</h3>
            <p className="italic text-gray-700 leading-7">
             I am passionate developer with skills in web application.I am very passionate to learn new things and implementing them to the projects.
            </p>

            {/* Personal Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              <div>
                <ul >
                  <li className='mt-5'><strong>Birthday:</strong> <span>23 december 1999</span></li>
                  <li className='mt-5'><strong>Website:</strong> <span>www.example.com</span></li>
                  <li className='mt-5'><strong>Phone:</strong> <span>+91 7025014084</span></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className='mt-5'><strong>Age:</strong> <span>24</span></li>
                  <li className='mt-5'><strong>Degree:</strong> <span>B.tech in computer science</span></li>
                  <li className='mt-5'><strong>Email:</strong> <span>salimanchu2@gmail.com</span></li>
                </ul>
              </div>
            </div>

            {/* Additional Information */}
            <p className="mt-4  text-gray-700 leading-7">
             
            </p>
          </div>
        </div>
      </div>
      {/* My Skills */}
      <div className="text-center mb-10 mt-10">
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="italic text-gray-600">Learn more about me</p>
        </div>
<div className="flex flex-wrap  text-black font-bold justify-evenly">
      {skillsData.map((skill, index) => (
        <SkillCard key={index} image={skill.image} title={skill.title} />
      ))}
    </div>
    </section>
  );
};

export default About;
