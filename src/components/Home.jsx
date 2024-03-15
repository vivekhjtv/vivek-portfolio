import React, { useEffect } from 'react';
import Typed from 'typed.js';
import DownloadButton from '../store/Action';
import { useCallback } from 'react';
import Particles from 'react-particles';
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const pdfUrl = 'Vivek_Jethva_Technical_Resume.pdf';
  const fileName = 'Vivek_Jethva_Technical_Resume.pdf';

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

              <DownloadButton pdfUrl={pdfUrl} fileName={fileName} />
            </div>
          </div>
        </div>
      </section>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            // color: {
            //   value: '#0d47a1',
            // },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#1dbf73',
            },
            links: {
              color: '#1dbf73',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Home;
