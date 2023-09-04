import Countdown from "./Countdown";
import Lottie from "react-lottie-player";
import rocket from "../../utils/rocket.json";
import Events from "./Events";
import Media from "./Media";
import { QuoteContext } from "../../hooks/useQuotes";
import { useState } from "react";
import Quotes from "./Quotes";

const Timer = () => {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <QuoteContext.Provider value={{ showQuote, setShowQuote }}>
      <div className="timer">
        {/* <Lottie
        loop
        animationData={rocket}
        play
        style={{ width: "100%", height: "100%", opacity: "0.5" }}
      /> */}

        <Countdown />
        {!showQuote ? (
          <div className="bottomSection">
            <Events />
            <Media />
          </div>
        ) : (
          <Quotes />
        )}
      </div>
    </QuoteContext.Provider>
  );
};

export default Timer;
