import Countdown from "./Countdown";
import Lottie from "react-lottie-player";
import rocket from "../../utils/rocket.json";

const Timer = () => {
  return (
    <div className="timer">
      <Lottie
        loop
        animationData={rocket}
        play
        style={{ width: "100%", height: "100%", opacity: "0.5" }}
      />

      <Countdown />
    </div>
  );
};

export default Timer;
