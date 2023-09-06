import Countdown from "./Countdown";
import Events from "./Events";
import Media from "./Media";
import { QuoteContext, HourContext } from "../../hooks/useQuotes";
import { useState } from "react";
import Quotes from "./Quotes";

const Timer = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [hour, setHour] = useState(0);

  return (
    <QuoteContext.Provider value={{ showQuote, setShowQuote }}>
      <HourContext.Provider value={{ hour, setHour }}>
        <div className="timer">
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
      </HourContext.Provider>
    </QuoteContext.Provider>
  );
};

export default Timer;
