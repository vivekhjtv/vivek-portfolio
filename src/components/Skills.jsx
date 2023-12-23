import React from 'react';
import Skill from './Skill';

function Skills() {
  const SkillsInfo = [
    {
      title: 'HTML',
      percent: 90,
      classPercent: 'html',
    },
    {
      title: 'CSS',
      percent: 80,
      classPercent: 'css',
    },
    {
      title: 'Bootstrap',
      percent: 80,
      classPercent: 'bootstrap',
    },
    {
      title: 'JavaScript',
      percent: 75,
      classPercent: 'javaScript',
    },
    {
      title: 'React',
      percent: 70,
      classPercent: 'react',
    },
    {
      title: 'Java',
      percent: 65,
      classPercent: 'java',
    },
    {
      title: 'PHP',
      percent: 70,
      classPercent: 'php',
    },
    {
      title: 'Material UI',
      percent: 70,
      classPercent: 'metrial',
    },
  ];
  return (
    <div>
      <div className="about">
        <div className="container">
          <div id="skills" className="container skills_section text-focus-in">
            <header className="section-header">
              <h3>My Skills</h3>
            </header>

            <div className="skill-main">
              {SkillsInfo.map((item) => (
                <Skill
                  key={item.title}
                  title={item.title}
                  percent={item.percent}
                  classPercent={item.classPercent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
