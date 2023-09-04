import { quoteConfig } from "../../config/quotes";
import { useContext, useEffect, useState } from "react";
import { QuoteContext } from "../../hooks/useQuotes";

const Quotes = () => {
  const { showQuote, setShowQuote } = useContext(QuoteContext);
  const [quote, setQuote] = useState(0);

  useEffect(() => {
    if (showQuote) {
      const intvl = setInterval(() => {
        setQuote((prev) => {
          if (prev === quoteConfig.length - 1) {
            setShowQuote(false);
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 120000);
      return () => {
        clearInterval(intvl);
      };
    }
  }, [showQuote]);

  return (
    <h2 className="quotes">{showQuote ? quoteConfig[quote].quote : " "}</h2>
  );
};

export default Quotes;
