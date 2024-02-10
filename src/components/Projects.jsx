import React, { useState } from 'react';
import Project from './Project';

import FilterCard from './FilterCard';

function Projects() {
  const Info = [
    {
      card_title: 'My Portfolio Site',
      card_subTitle: 'React JS, React Router, JavaScript, Bootstrap, HTML/CSS',
      card_paragraph: `A portfolio website is a unique way to showcase your work
        and let others know about yourself. It's like an evergreen
        platform for your projects, case studies, and information
        about you. I made portfolio website for improve my Front-end skills
        and improve my knowledge and also I am open to freelance
        opportunities, particularly those involving challenging or
        extensive projects.`,
      card_image: 'portfolio.png',
      category: 'react',
      link: 'https://github.com/vivekhjtv/vivek-portfolio',
    },
    {
      card_title: 'La Pinoz Pizza',
      card_subTitle: 'HTML, CSS, Bootstrap & JavaScript',
      card_paragraph: `Introducing my Lapinoz Pizza Clone Project! 🍕🖥️ Built to elevate my front-end skills, this clone mirrors the user experience of the original website using HTML, CSS, Bootstrap, and JavaScript. Open to freelance opportunities, this project showcases my proficiency in web development. Explore the clone and connect for inquiries or collaborations!`,
      card_image: 'Lapino.png',
      category: 'html/css',
      link: 'https://github.com/vivekhjtv/vivek-portfolio',
    },
    {
      card_title: 'One Plus',
      card_subTitle: 'HTML, CSS, Bootstrap & JavaScript',
      card_paragraph: `Introducing my OnePlus Clone Project! 📱🖥️ Crafted to refine my front-end skills, this clone replicates the sleek design and functionality of the OnePlus website. Developed using HTML, CSS, Bootstrap, and JavaScript, it's a showcase of my web development prowess. Open to freelance opportunities, this project reflects my commitment to delivering high-quality projects. Explore the clone and connect for inquiries or collaborations!`,
      card_image: 'oneplus.png',
      category: 'bootstrap',
      link: 'https://github.com/vivekhjtv/vivek-portfolio',
    },
    {
      card_title: 'Todo App',
      card_subTitle: 'React JS, JavaScript, Bootstrap, HTML/CSS',
      card_paragraph: `Presenting my React Todo App! ✅🖥️ Developed to showcase my proficiency in React, this Todo App combines functionality and a clean user interface. Seamlessly managing tasks using state-of-the-art React components, this project demonstrates my skills in modern web development.`,
      card_image: 'TodoApp.png',
      category: 'react',
      link: 'https://github.com/vivekhjtv/v_react/tree/main/07reactTodoContext',
    },
    {
      card_title: 'Calculator App',
      card_subTitle: 'React JS, JavaScript, Bootstrap, HTML/CSS',
      card_paragraph: `Check out my React Calculator App! 🧮 Built with React, it offers a modern and interactive calculator experience. Open to freelancing, this project highlights my skills in dynamic web development. `,
      card_image: 'Calculator.png',
      category: 'react',
      link: 'https://github.com/vivekhjtv/v_react/tree/main/react-calculator',
    },
    {
      card_title: 'Password Generator App',
      card_subTitle: 'React JS, JavaScript, Bootstrap, HTML/CSS',
      card_paragraph: `Introducing my React Password Generator App! 🔐🚀 Crafted with React, it provides a secure and customizable solution for generating robust passwords. Open to freelancing, this app showcases my commitment to enhancing digital security. `,
      card_image: 'PasswordGen.png',
      category: 'react',
      link: 'https://github.com/vivekhjtv/v_react/tree/main/04PasswordGenerator',
    },
    {
      card_title: 'Global Currency Converter App',
      card_subTitle: 'React JS, JavaScript, Bootstrap, HTML/CSS',
      card_paragraph: `Discover the React Global Currency Converter App - a dynamic solution for swift currency conversions. Developed using React, this application seamlessly integrates real-time exchange rates, offering a user-friendly interface. Fueled by HTML, CSS, and React components, it stands as a testament to my technical expertise in web development.`,
      card_image: 'CurrencyConverter.png',
      category: 'react',
      link: 'https://github.com/vivekhjtv/v_react/tree/main/05currencyChangeApp',
    },
    {
      card_title: 'Blog Post App',
      card_subTitle: 'React JS, React Router, JavaScript, Bootstrap, HTML/CSS',
      card_paragraph: `Explore the capabilities of my React Blog Post App, a dynamic platform built to empower creators. Developed with React, it integrates modern UI components, state management, and responsive design for an optimal writing and reading experience. As I delve into the world of React, I'm excited to share this project and welcome freelance opportunities.`,
      card_image: 'Blog.png',
      category: 'react',
      link: 'https://github.com/vivekhjtv/v_react/tree/main/13react-social-media-app',
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
                className="col-lg-3 col-md-4 col-sm-6 card-column text-focus-in"
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
