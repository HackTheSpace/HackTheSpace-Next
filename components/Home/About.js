import { infoConfig } from "../../config/info";
import React from "react";

const About = () => {
  const { about } = infoConfig;
  return (
    <section id="about" className="section about-section">
      <div className="wow animate__fadeInUp abbox">
        <h2 className="section-title">About Us</h2>
        {about.map((d) => (
          <React.Fragment key={d.id}>
            <p>{d.data}</p>
            <br />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default About;
