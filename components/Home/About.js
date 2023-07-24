import { infoConfig } from "../../config/info";
import React from "react";
import Image from "next/image";

const About = () => {
  const { about } = infoConfig;
  return (
    <section
      id="about"
      className="section about-section wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
    >
      <div className="abbox">
        <h2 className="section-title">About Us</h2>
        <div className="paraDiv">
          {about.map((d) => (
            <React.Fragment key={d.id}>
              <p>{d.data}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="aconst1">
        <Image
          src="/images/aconst1.webp"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>

      <div className="aconst3">
        <Image
          src="/images/aconst3.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>

      <div className="pattern7">
        <Image
          src="/images/pattern4.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default About;
