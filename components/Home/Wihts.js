// What is Hack The Space -> WIHTS
import { infoConfig } from "../../config/info";
import React from "react";

const Wihts = () => {
  const { wihts } = infoConfig;
  return (
    <section className="section about-section">
      <div className="abbox wow animate__fadeInUp">
        <h2 className="section-title">What is HackTheSpace?</h2>
        {wihts.map((d, index) => (
          <React.Fragment key={d.id}>
            <br key={index} />
            <p key={d.id}>{d.data}</p>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Wihts;
