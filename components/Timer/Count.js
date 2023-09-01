import { useState, useEffect } from "react";

const Count = ({ time }) => {
  const [hours, setHours] = useState("24");
  const [mins, setMins] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    setHours(hours < 10 ? "0" + hours : hours);
    setMins(mins < 10 ? "0" + mins : mins);
    setSeconds(seconds < 10 ? "0" + seconds : seconds);
  }, [time]);

  return (
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
  );
};

export default Count;
