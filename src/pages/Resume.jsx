import React from 'react';
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="resume main ">
      <div className="container mx-auto  ">
        <div className="section-title">
          <h2 className="text-4xl font-bold">Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">


            <ResumeSection
              title="Education"
              items={[

                {
                  title: 'Bachelor of computer science and technology',
                  date: '2018 - 2022',
                  location: 'Perinthalmanna',
                  description:
                    'I obtained my B.Tech degree from MEA Engineering College, Perinthalmanna, with a CGPA of 6.98.',
                },
                {
                  title: 'Marthoma Higher Secondary School',
                  date: '2016 - 2018',
                  location: 'Chungathra',
                  description:
                    'I completed my higher with a percentage of 80  from Marthoma Higher Secondary School,Chungathra.',
                },
                {
                  title: 'OEMS Palad',
                  date: '2015 - 2016',
                  location: 'Palad',
                  description:
                    'I completed my high school with 100% grade from OEMS Palad.',
                },
              ]}
            />
          </div>

          <div className="lg:col-span-1">
            <ResumeSection
              title="Professional Experience"
              items={[
                {
                  title: 'Full stack developer intern',
                  date: '2022 - 2023',
                  location: 'Kochi',
                  description:
                    'I have completed a six month training program in MERN stack from Luminar Technolab in kochi. Where i build my knowledge in the full stack development.',
                },

              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ResumeSection = ({ title, items }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="resume-item relative pl-8 mb-6 ">
          <div className="resume-item-dot"></div>
          <div className="resume-item-content">
            <h4 className="text-xl font-semibold mt-8">{item.title}</h4>
            {item.date && <h5 className="bg-white bg-opacity-15 p-1 inline-block font-semibold mb-2">{item.date}</h5>}
            <p className="mb-2">
              <em>{item.location}</em>
            </p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resume;
