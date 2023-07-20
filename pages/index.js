import React from "react";
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

const index = () => {
  return (
    <Layout>
      <Preloader />
      <Landing />
      <About />
      <Wihts />
      <Journey />
      <Venue />
      <Schedule />
      <Sponsor />
      <WhySponsor/>
      <FAQS />
    </Layout>
  );
};

export default index;
