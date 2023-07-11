import React from "react";
import Layout from "../components/Layout";
import Landing from "../components/Home/Landing";
import Schedule from "../components/Schedule";

const index = () => {
  return (
    <Layout>
      <Landing />
      <Schedule />
    </Layout>
  );
};

export default index;
