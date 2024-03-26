import { useEffect, useState, useMemo } from "react";
import rocket from "../../utils/Rocket/rocket.json";
import Lottie from "react-lottie-player";

const Countdown = () => {
  return (
    <>
      <div className="countdown">
        <Lottie play loop animationData={rocket} className="rocket" speed={1} />
      </div>
    </>
  );
};

export default Countdown;
