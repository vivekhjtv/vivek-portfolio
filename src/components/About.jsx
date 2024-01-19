import React from 'react';
import InfoTitle from './InfoTitle';
import AboutMe from './AboutMe';
import Skills from './Skills';
import AboutEducation from './AboutEducation';
import Certificate from './Certificate';

function About() {
  return (
    <div>
      <InfoTitle />
      <AboutMe />
      <AboutEducation />
      <Certificate />
      <Skills />
    </div>
  );
}

export default About;
