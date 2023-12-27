import React from 'react';
import Footer from './Footer';

function ContactPage() {
  return (
    <div>
      <section className="contact">
        <div className="container text-focus-in">
          <div className="section-header">
            <h3 className="section-title">Contact Me</h3>
            <p>
              Here is My Contact Section to Increase Interaction with Me. I am
              open to freelance opportunities, particularly those involving
              challenging or extensive projects. However, if you have any other
              inquiries or requests, please feel free to submit them using the
              form.
            </p>
          </div>

          <div className="row contact-info">
            <div className="col-md-4">
              <div className="contact-address">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Address</h3>
                <address>Mississauga, Ontario, Canada</address>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-phone">
                <i className="fas fa-phone"></i>
                <h3>Phone Number</h3>
                <p>
                  <p>+1 437-599-3574</p>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-email">
                <i className="far fa-envelope"></i>
                <h3>Email</h3>
                <p>
                  <p href="mailto:info@example.com">vivekhjtv18@gmail.com</p>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5764.297552950904!2d-79.60409089999999!3d43.749007200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1703713462159!5m2!1sen!2sca"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form">
                <form id="myForm" className="contactForm">
                  <div className="form-row row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control form_style"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form_style"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control form_style"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form_style"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactPage;
