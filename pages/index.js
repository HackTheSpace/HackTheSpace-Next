import React from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";
import FAQS from "../components/FAQS";

const index = () => {
  return (
    <Layout>
      <Landing />
      <Schedule />
      <FAQS />
    </Layout>
  );
};

export default index;
