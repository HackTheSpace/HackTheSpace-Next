// What is Hack The Space -> WIHTS
import { infoConfig } from "../../config/info";
import React from "react";
import Image from "next/image";

const Wihts = () => {
  const { wihts } = infoConfig;
  return (
    <section
      className="section about-section wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
    >
      <div className="abbox">
        <h2 className="section-title">What is HackTheSpace?</h2>
        <div className="paraDiv">
          {wihts.map((d, index) => (
            <React.Fragment key={d.id}>
              <br key={index} />
              <p key={d.id}>{d.data}</p>
            </React.Fragment>
          ))}
          <div className="frm">
            <img
              src="/images/images/greenplanet.png"
              alt="Hack the space Hackathon planet"
            />
          </div>
          <div className="asrt">
            <img
              src="/images/images/astronaut.png"
              alt="Hack the space Hackathon planet"
            />
          </div>
        </div>
      </div>
      <div className="aconst1">
        <Image
          src="/images/aconst5.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <div className="pattern2">
        <Image
          src="/images/pattern6.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Wihts;
