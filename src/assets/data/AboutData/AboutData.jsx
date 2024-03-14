import React from 'react';
import About from './About';
import profile1 from '../assets/profile1.png';

const AboutData = () => {
    const aboutData = {
    title: 'About Me',
    subtitle: 'Learn more about me',
    profileImage: profile1,
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personalInfo: [
      { label: 'Birthday', value: '23 December 1999' },
      { label: 'Website', value: 'www.example.com' },
      { label: 'Phone', value: '+91 7025014084' },
    ],
    additionalInfo: 'Officiis eligendi itaque labore et dolorum mollitia...',
  };
  return (
    <div>AboutData</div>
  )
}

export default AboutData