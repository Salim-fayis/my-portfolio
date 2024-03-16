import React from 'react';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from 'lottie-react';
import contact from '../assets/json/contact.json';

const SocialLink = ({ icon, href, className }) => (
  <a href={href} className={className}>
    <FontAwesomeIcon icon={icon} />
  </a>
);

const Contact = () => {
  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/Salim-fayis', className: 'github' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/salim-fayis-55584b247/', className: 'linkedin' },
    { icon: faInstagram, href: 'https://www.instagram.com/salimfayis?igsh=MXh6Zm9jZXBqZGw4cw==', className: 'instagram' },
    // Add other social icons here
  ];
;

  return (
    <section id="contact" className="contact main">
      <div className="container mx-auto">
        <div className="text-center mb-10 section-title">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="info-box hover:bg-gray-800 bg-opacity-25 p-6 rounded-lg shadow-2xl flex-grow transition-colors">
              <Lottie animationData={contact} />
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2 grid grid-cols-1 gap-4">
          <div className="info-box hover:bg-gray-800 bg-opacity-25 p-6 rounded-lg shadow-2xl flex-grow transition-colors">
    <a href="mailto:salimanchu2@gmail.com">
        <i className="bx bx-envelope text-3xl"></i>
        <h3 className="text-xl font-semibold">Email Me</h3>
        <p className="text-green-300">salimanchu2@gmail.com</p>
    </a>
</div>


            <div className="info-box hover:bg-gray-800 bg-opacity-25 p-6 rounded-lg shadow-2xl flex-grow transition-colors  ">
              <i className="bx bx-phone-call text-3xl"></i>
              <h3 className="text-xl font-semibold">Call Me</h3>
              <p className="text-green-300">+91 7025014084</p>
            </div>

            <div className="info-box hover:bg-gray-800 bg-opacity-25 p-6 rounded-lg shadow-2xl flex-grow transition-colors">
              <i className="bx bx-share-alt text-3xl"></i>
              <h3 className="text-xl font-semibold">Social Profiles</h3>
              <div className="social-links flex mt-2 gap-5 text-green-300">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
