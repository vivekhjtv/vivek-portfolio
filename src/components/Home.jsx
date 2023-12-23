import React, { useEffect } from 'react';
import Typed from 'typed.js';
function Home() {
  useEffect(() => {
    const options = {
      strings: [' Web Developer', ' Post Grad Student'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    };

    const typed = new Typed('#auto_type', options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <section className="home">
        <div className="item">
          <div className="background"></div>
          <div className="container">
            <div className="content tracking-in-expand">
              <h2 className="tracking-in-expand index_h2">
                <span>
                  I<span style={{ color: '#1dbf73' }}>'</span>m{' '}
                  <span id="auto_type"></span>
                </span>
                <br /> Welcome to my Website
              </h2>
              <p className="index_para">
                I'm Post Grad Student At Humber College In Canada, A Web
                Developer & Learning New Concept Of Web Development.
              </p>
              <a
                href="Vivek Jethva Technical Resume.pdf"
                className="btn-get-started tracking-in-expand vibrate-1"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
