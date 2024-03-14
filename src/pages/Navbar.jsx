import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const SocialLink = ({ icon, href, className }) => (
  <a href={href} className={className}>
    <FontAwesomeIcon icon={icon} />
  </a>
);

const MenuItem = ({ href, label, isActive }) => (
  <li>
    <a className={isActive ? 'active' : ''} href={href}>
      {label}
    </a>
  </li>
);

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const socialLinks = [
    { icon: faGithub, href: 'https://github.com/Salim-fayis', className: 'github' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/salim-fayis-55584b247/', className: 'linkedin' },
    { icon: faInstagram, href: 'https://www.instagram.com/salimfayis?igsh=MXh6Zm9jZXBqZGw4cw==', className: 'instagram' },
    // Add other social icons here
  ];

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header id="header" className="top-0 mx-5 rounded-lg bg-[#0d141a] text-white relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <span className="logo text-xl md:text-2xl lg:text-3xl font-bold">
          <a href="/">Salim Fayis</a>
        </span>

        <div className="header-social-links flex space-x-7 lg:hidden">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>

        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <button>
            {isMenuOpen ? (
              <FontAwesomeIcon className='hidden' icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        {/* Display menu items below the navbar on smaller screens */}
        {isMenuOpen && (
          <div className="fixed top-0 right-5 my-[50px] h-[80%]  lg:w-1/3 w-1/2 bg-black text-white z-50 flex flex-col justify-center items-center">
            <div className="p-6">
              <div className="absolute top-4 right-4">
                <button onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <ul className="flex flex-col gap-[30px] space-y-5">
                {menuItems.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </ul>
            </div>
          </div>
        )}

        <nav className={`lg:flex  lg:items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          {/* Menu items for larger screens */}
          <ul className={`flex flex-col  lg:flex-row space-y-6 lg:space-y-0 lg:space-x-7 ${isMenuOpen ? 'hidden' : 'lg:flex'}`}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </ul>
        </nav>

          <div className="header-social-links space-x-7 hidden lg:flex">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
        </div>
      </header>
   
  );
};

export default Navbar;
