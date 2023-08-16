import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";
import About from "../components/Home/About";
import Wihts from "../components/Home/Wihts";
import Journey from "../components/Home/Journey";
import Preloader from "../components/Home/Preloader";
import Venue from "../components/Home/Venue";
import Sponsor from "../components/Sponsor";
import WhySponsor from "../components/Home/WhySponsor";
import Organiser from "../components/Home/Organiser";
import "animate.css";
import Tracks from "../components/Home/Tracks";

const index = () => {
  useEffect(() => {
    import("wow.js").then((WOW) => {
      new WOW.default().init();
    });
  }, []);

  return (
    <Layout>
      {/* <Preloader /> */}
      <Landing />
      <About />
      <Wihts />
      <Journey />
      <Venue />
      <Schedule />
      <Tracks />
      <Sponsor />
      <WhySponsor />
      <Organiser />
      <FAQS />
    </Layout>
  );
};

export default index;
