import React from 'react';

function Certificate() {
  return (
    <div>
      <div className="portfolio">
        <div className="container">
          <header className="section-header text-focus-in">
            <h3 className="section-title">Certificate</h3>
            <p style={{ paddingBottom: 0, marginBottom: 0 }}>
              {'< '}Code certified, problem-solving amplified - bringing tech
              visions to life{' />'}
            </p>
          </header>
          <div className="row align-items-center about-row text-focus-in pt-5">
            <div className="col-md-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
