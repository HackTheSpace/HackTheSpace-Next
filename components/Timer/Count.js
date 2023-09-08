import { useState, useEffect, useContext } from "react";
import { QuoteContext, HourContext } from "../../hooks/useQuotes";

const Count = ({ endDate, setCurrentTime, toggle }) => {
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const { setShowQuote } = useContext(QuoteContext);
  const { setHour } = useContext(HourContext);

  useEffect(() => {
    if (!toggle) {
      const intvl = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // const hours =
        //   days * 24 +
        //   Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (mins === 0 && seconds === 0) {
          setHour(hours);
          setShowQuote(true);
          setTimeout(() => {
            setShowQuote(false);
          }, 120000);
        }

        if (distance < 0) {
          clearInterval(intvl);
        } else {
          setHours(hours < 10 ? "0" + hours : hours);
          setMins(mins < 10 ? "0" + mins : mins);
          setSeconds(seconds < 10 ? "0" + seconds : seconds);
        }
      }, 1000);

      return () => {
        clearInterval(intvl);
      };
    } else {
      setHours("00");
      setMins("00");
      setSeconds("00");
    }
  }, [, endDate, toggle]);

  useEffect(() => {
    const now = new Date().getTime();
    setCurrentTime(now);
  }, [toggle]);

  return (
    <div className="timerDiv">
      <h1 className="timerHeading">Ends In...</h1>
      {hours > 0 ? (
        <div className="timer__item">
          <span className="timer__item--number hours">{hours}</span>
          <span className="timer__item--text">Hours</span>
        </div>
      ) : null}

      {mins > 0 || hours > 0 ? (
        <div className="timer__item">
          <span className="timer__item--number mins">{mins}</span>
          <span className="timer__item--text">Mins</span>
        </div>
      ) : null}

      <div className="timer__item">
        <span className="timer__item--number seconds">{seconds}</span>
        <span className="timer__item--text">Seconds</span>
      </div>
    </div>
  );
};

export default Count;
