import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import Countdown from "./Countdown";
import Typewriter from "./Typewriter";
import LinksBtn from "./LinksBtn";

const Landing = () => {
  return (
    <section
      id="home"
      className="home"
      style={{ minHeight: "100vh", color: "#fff" }}
    >
      <div className="cost1">
        <img
          src="/images/home/constellation1.png"
          alt="Hack the space Hackathon Constellation"
        />
      </div>
      <div className="logo-div">
        <div className="logo-home">
          <Image
            src="/images/logo-main.webp"
            alt="Hack the space Hackathon Constellation"
            priority={true}
            sizes="100%"
            width={100}
            height={100}
          />
        </div>
        <Typewriter />
        <Countdown />

        <LinksBtn />
      </div>
      <div className="cost2">
        <img
          src="/images/home/constellation2.png"
          alt="Hack the space Hackathon Constellation"
        />
      </div>
    </section>
  );
};

export default Landing;
