import React from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";
import About from "../components/Home/About";
import Wihts from "../components/Home/Wihts";
import Journey from "../components/Home/Journey";
import Preloader from "../components/Home/Preloader";

const index = () => {
  return (
    <Layout>
      <Preloader />
      <Landing />
      <About />
      <Wihts />
      <Journey />
      <Schedule />
      <FAQS />
    </Layout>
  );
};

export default index;
