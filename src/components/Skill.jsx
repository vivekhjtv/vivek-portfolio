import React from 'react';

function Skill({ title, percent, classPercent }) {
  return (
    <div>
      <div className="skill-bar">
        <div className="info">
          <p className="title">{title}</p>
          <p className="percent">{percent}%</p>
        </div>
        <div className="bar">
          <span className={classPercent}></span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
