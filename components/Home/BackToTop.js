import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

import fire from "../../utils/Rocket/fire.json";
import smoke from "../../utils/Rocket/smoke.json";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const [showFire, setShowFire] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
        setShowFire(false);
      } else {
        setShow(false);
      }
    };
  }, [show]);

  return (
    <div>
      <button
        type="button"
        className={`go-to-top-btn ${show ? "show" : ""}`}
        onClick={() => {
          setShow(true);
          setShowFire(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Lottie
          play
          loop
          animationData={fire}
          className={`rocketFire ${showFire ? "show" : "hidden"}`}
          style={{ height: "100px", width: "100px", rotate: "46deg" }}
          speed={1}
        />
        <Lottie
          play
          loop
          animationData={smoke}
          className={`rocketSmoke ${showFire ? "hidden" : "show"}`}
          style={{ height: "100px", width: "100px", rotate: "46deg" }}
          speed={1}
        />
      </button>
    </div>
  );
};

export default BackToTop;
