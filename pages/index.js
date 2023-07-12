import React from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";
import About from "../components/Home/About";
import Wihts from "../components/Home/Wihts";
import Journey from "../components/Home/Journey";

const index = () => {
  return (
    <Layout>
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
