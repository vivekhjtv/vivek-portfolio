import React, { useEffect } from 'react';
import InfoTitle from './InfoTitle';
import AboutMe from './AboutMe';
import Skills from './Skills';
import AboutEducation from './AboutEducation';
import Certificate from './Certificate';
import Experience from './Experience';
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <InfoTitle />
      <AboutMe />
      <Experience />
      <AboutEducation />
      <Certificate />
      <Skills />
    </div>
  );
}

export default About;
