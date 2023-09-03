import Countdown from "./Countdown";
import Lottie from "react-lottie-player";
import rocket from "../../utils/rocket.json";
import Events from "./Events";
import Media from "./media";
import { QuoteContext } from "../../hooks/useQuotes";
import { useContext } from "react";
import Quotes from "./Quotes";

const Timer = () => {
  const quote = useContext(QuoteContext);

  return (
    <div className="timer">
      {/* <Lottie
        loop
        animationData={rocket}
        play
        style={{ width: "100%", height: "100%", opacity: "0.5" }}
      /> */}

      <Countdown />
      {quote === "show" ? (
        <div className="bottomSection">
          <Events />
          {/* <Media /> */}
        </div>
      ) : (
        <Quotes />
      )}
    </div>
  );
};

export default Timer;
