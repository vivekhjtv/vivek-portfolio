import React from 'react';
import Footer from './Footer';
import { Form, redirect } from 'react-router-dom';
import { sendDataToApi } from '../api';

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
                <span>+1 437-599-3574</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="contact-email">
                <i className="far fa-envelope"></i>
                <h3>Email</h3>

                <span href="mailto:info@example.com">
                  vivekhjtv18@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form">
                <Form method="POST" id="myForm" className="contactForm">
                  <div className="form-row row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        id="name"
                        name="fullName"
                        className="form-control form_style"
                        placeholder="John Wick"
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
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export async function contactInfo(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  // console.log(postData);
  sendDataToApi(postData);
  return redirect('/contact');
}
export default ContactPage;
