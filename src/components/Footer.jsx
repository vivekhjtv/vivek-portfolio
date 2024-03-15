import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-info">
                <h3>vivek.io</h3>
                <p>
                  I'm Post Grad Student At Humber College In Canada,
                  <br />A Web Developer & Learning New Concept Of Web
                  Development.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <strong>Address:</strong>Etobicoke, Ontario, Canada. <br />
                  <strong>Phone:</strong> +1 437-599-3574
                  <br />
                  <strong>Email:</strong> vivekhjtv18@gmail.com
                  <br />
                </p>

                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/vivekhjtv/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>

                  <a
                    href="https://github.com/vivekhjtv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Let's Talk</h4>
                <p>
                  <strong> Seeking Front-End Opportunities:</strong> <br />
                  Currently specializing in front-end development with a strong
                  proficiency in React. Open to exciting opportunities to
                  contribute my skills and creativity to innovative projects.
                  Let's collaborate and build exceptional user experiences! 🌐
                  🚀
                </p>

                <Link to="/contact" className="connect-button">
                  {' '}
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{' '}
            <span className="copyright-span"> Vivek Jethva</span>. All Rights
            Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
