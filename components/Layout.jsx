import React, { useEffect } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ThreeScene from "./ThreeScene";
import BackToTop from "./Home/BackToTop";

import Lenis from "@studio-freight/lenis";

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="mask-icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />

        <link rel="canonical" href="https://hackthespace.co/" key="canonical" />

        <title>Hack The Space</title>
        <meta
          name="description"
          content="A 24-hour immersive hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀"
        />
        <meta
          name="image"
          content="https://res.cloudinary.com/dmwxnrn8o/image/upload/b_rgb:000000/v1686922356/hackthespace/logo-main_lrdsjp.webp"
        />
        <meta name="author" content="Hack The Space" />

        <meta property="og:title" name="og:title" content="Hack The Space" />
        <meta
          property="og:description"
          name="og:description"
          content="A 24-hour immersive hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀"
        />
        <meta
          property="og:image"
          name="og:image"
          content="https://res.cloudinary.com/dmwxnrn8o/image/upload/b_rgb:000000/v1686922356/hackthespace/logo-main_lrdsjp.webp"
        />

        <meta property="og:type" name="og:type" content="website" />
        <meta
          property="og:url"
          name="og:url"
          content="https://hackthespace.co/"
        />

        <meta name="twitter:title" content="Hack The Space" />
        <meta
          name="twitter:description"
          content="A 24-hour immersive hackathon for all the nerds out there✨. Empowering young minds😇. Turn Ideas into Impact!🚀"
        />
        <meta name="twitter:site" content="https://hackthespace.co" />
        <meta name="twitter:domain" content="https://hackthespace.co" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmwxnrn8o/image/upload/b_rgb:000000/v1686922356/hackthespace/logo-main_lrdsjp.webp"
        />
        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dmwxnrn8o/image/upload/b_rgb:000000/v1686922356/hackthespace/logo-main_lrdsjp.webp"
        />
        <meta name="twitter:card" content="Hack The Space" />
      </Head>

      <Navbar />
      <ThreeScene />
      <BackToTop />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
