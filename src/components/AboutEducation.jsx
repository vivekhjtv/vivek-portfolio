import React from 'react';

function AboutEducation() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center about-row text-focus-in pt-5">
          <div className="col-md-6">
            <h2 className="title">EDUCATION</h2>
            <h4 className="hire-para education_title">
              Post Grad : Information Technology Solutions
            </h4>
            <p className="hire-para">Humber college, Etobicoke, Ontario</p>

            <h4 className="hire-para education_title">
              Bachelor's degree : Computer Engineering
            </h4>
            <p className="hire-para">LDRP - ITR, Gandhinagar, Gujarat</p>
          </div>
          <div className="col-md-6">
            <img src="/humberClg.jpg" alt="" className="img-thumbnail" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEducation;
