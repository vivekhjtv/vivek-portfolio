import React from 'react';

function Experience() {
  return (
    <div className="portfolio">
      <div className="container">
        <header className="section-header text-focus-in">
          <h3 className="section-title">Experience</h3>
          {/* <p style={{ paddingBottom: 0, marginBottom: 0 }}>
            {'< '}Code certified, problem-solving amplified - bringing tech
            visions to life{' />'}
          </p> */}
        </header>
        <div className="row align-items-center about-row text-focus-in pt-3">
          <div className="col-md-12 exp_div">
            <h3 className="mb-2 font-weight-bold company_name">
              Web Developer at Meetanshi - Magento Development Company
            </h3>
            <p className="exp_para mb-4">
              I joined the team of Meetanshi in November 2020 to September 2022
              as a web developer. My role is to created a dynamic, multi-page
              website using HTML, CSS, and JavaScript for a seamless user
              experience. Enhanced website interactivity and design with
              Bootstrap for a visually appealing interface. Delivered innovative
              web solutions meeting both client and user expectations,
              showcasing a fusion of technical proficiency and creativity. I
              joined the team of a renowned eCommerce business in India as a web
              developer.
            </p>
          </div>

          {/* <div className="col-md-4">
            <div className="card h-100" style={{ marginBottom: 24 }}>
              <img
                src="./TopsCertificate.png"
                className="card-img-top"
                alt="certificate"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100" style={{ marginBottom: 24 }}>
              <img
                src="./MeetanshiCertificate.png"
                className="card-img-top"
                alt="certificate"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100" style={{ marginBottom: 24 }}>
              <img
                src="./TopsCertificate1.png"
                className="card-img-top"
                alt="certificate"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
