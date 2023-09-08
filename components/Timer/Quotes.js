import { quoteConfig } from "../../config/quotes";
import { useContext, useEffect, useState } from "react";
import { QuoteContext, HourContext } from "../../hooks/useQuotes";

const Quotes = () => {
  const { showQuote, setShowQuote } = useContext(QuoteContext);
  const { hour } = useContext(HourContext);
  const [quote, setQuote] = useState(hour);

  // show quote for 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote((prev) => {
        if (prev === 0) {
          setShowQuote(false);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 120000);

    return () => clearInterval(interval);
  }, [showQuote, setShowQuote]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        setShowQuote(false);
      }
    };
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [setShowQuote]);

  useEffect(() => {
    const audioElement = document.getElementById("clockAudio");

    if (showQuote && audioElement) {
      audioElement.play();

      setTimeout(() => {
        audioElement.pause();
      }, 10000);
    } else if (!showQuote && audioElement) {
      audioElement.pause();
    }
  }, [showQuote]);

  return (
    <>
      <h2 className="quotes">{showQuote ? quoteConfig[quote].quote : " "}</h2>
      <h3 className="author">~{showQuote ? quoteConfig[quote].author : " "}</h3>
      <audio id="clockAudio" src="./sound/Clock.mp3" autoPlay loop />
    </>
  );
};

export default Quotes;
