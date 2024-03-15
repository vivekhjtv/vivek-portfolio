import React, { useEffect } from 'react';
import Projects from './Projects';
import Footer from './Footer';

function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Projects />
      <Footer />
    </div>
  );
}

export default ProjectPage;
