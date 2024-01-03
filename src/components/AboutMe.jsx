import React from 'react';

function AboutMe() {
  return (
    <div>
      <div className="about">
        <div className="container">
          <div className="row align-items-center about-row text-focus-in">
            <div className="col-md-6">
              <img
                src="/profile_pic Large.png"
                alt=""
                className="img-thumbnail"
              />
            </div>
            <div className="col-md-6">
              <h2 className="title">Why Hire Me?</h2>

              <p className="hire-para">
                Post Grad : Information Technology Solutions
              </p>

              <p className="hire-para">
                Bachelor's Degree : Computer Engineering
              </p>

              <p className="hire-para">
                With my extensive experience in software engineering, I am
                confident that I have the technical expertise and
                problem-solving abilities required to excel in Front-end
                development role. Throughout my career, I have demonstrated a
                strong commitment to writing clean, efficient code that delivers
                exceptional performance and user experience. I possess an
                in-depth understanding of a wide range of programming languages
                and platforms, enabling me to design and implement software
                systems that meet the needs of diverse stakeholders.
                Additionally, I am a skilled communicator who is able to work
                collaboratively with cross-functional teams to deliver
                high-quality products on time and within budget. With my passion
                for staying up-to-date with the latest industry trends and my
                strong analytical skills, I am confident that I can make a
                significant contribution to any software development team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
