import React, { useState } from 'react';
import Project from './Project';

import FilterCard from './FilterCard';

function Projects() {
  const Info = [
    {
      card_title: 'My Portfolio Site',
      card_subTitle: 'HTML, CSS, Bootstrap & JavaScript',
      card_paragraph: `A portfolio website is a unique way to showcase your work
        and let others know about yourself. It's like an evergreen
        platform for your projects, case studies, and information
        about you. I made portfolio website for improve my Front-end skills
        and improve my knowledge and also I am open to freelance
        opportunities, particularly those involving challenging or
        extensive projects.`,
      card_image: 'portfolio.png',
      category: 'html/css',
    },
    {
      card_title: 'La Pinoz Pizza',
      card_subTitle: 'HTML, CSS, Bootstrap & JavaScript',
      card_paragraph: `A portfolio website is a unique way to showcase your work
        and let others know about yourself. It's like an evergreen
        platform for your projects, case studies, and information
        about you. I made portfolio website for improve my Front-end skills
        and improve my knowledge and also I am open to freelance
        opportunities, particularly those involving challenging or
        extensive projects.`,
      card_image: 'Lapino.png',
      category: 'react',
    },
    {
      card_title: 'One Plus',
      card_subTitle: 'HTML, CSS, Bootstrap & JavaScript',
      card_paragraph: `A portfolio website is a unique way to showcase your work
        and let others know about yourself. It's like an evergreen
        platform for your projects, case studies, and information
        about you. I made portfolio website for improve my Front-end skills
        and improve my knowledge and also I am open to freelance
        opportunities, particularly those involving challenging or
        extensive projects.`,
      card_image: 'oneplus.png',
      category: 'bootstrap',
    },
    {
      card_title: 'Todo App',
      card_subTitle: 'HTML, CSS, Bootstrap & JavaScript',
      card_paragraph: `A portfolio website is a unique way to showcase your work
        and let others know about yourself. It's like an evergreen
        platform for your projects, case studies, and information
        about you. I made portfolio website for improve my Front-end skills
        and improve my knowledge and also I am open to freelance
        opportunities, particularly those involving challenging or
        extensive projects.`,
      card_image: 'Lapino.png',
      category: 'react',
    },
  ];
  const [cardsInfo, setCardsInfo] = useState(Info);

  const filterItem = (item) => {
    if (item === 'all') {
      setCardsInfo(Info);
    } else {
      const updatedItem = Info.filter((curItem) => curItem.category === item);
      setCardsInfo(updatedItem);
    }
  };
  return (
    <div>
      <div className="portfolio">
        <div className="container">
          <header className="section-header text-focus-in">
            <h3 className="section-title">My Project</h3>
            <p style={{ paddingBottom: 0 }}>
              I'm Post Grad Student At Humber College In Canada, A Web Developer
              & Learning New Concepts Of Web Development.
            </p>
          </header>

          <FilterCard filterItem={filterItem} />

          <div className="row card_row">
            {cardsInfo.map((card) => (
              <div
                key={card.card_title}
                className="col-sm-4 card-column text-focus-in"
              >
                <Project card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
