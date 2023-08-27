import { useEffect, useState, useMemo } from "react";

const Countdown = () => {
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const launchDate = useMemo(
    () => new Date("Sept 9, 2023 11:00:00").getTime(),
    []
  );

  useEffect(() => {
    const intvl = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours =
        days * 24 +
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intvl);
      } else {
        setHours(hours);
        setMins(mins);
        setSeconds(seconds);
      }
    }, 1000);

    return () => {
      clearInterval(intvl);
    };
  }, []);

  return (
    <>
      <div className="Timer">
        <div className="timerDiv">
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
      </div>
    </>
  );
};

export default Countdown;
