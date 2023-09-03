import { useEffect } from "react";
import Count from "./Count";
import useTimer from "../../hooks/useTimer";

const Countdown = () => {
  const { time, setTime, timerOn, setTimerOn } = useTimer();

  useEffect(() => {
    if (time === 0) {
      setTimerOn(false);
    }
  }, [time]);

  const set = async (time) => {
    try {
      const res = await fetch("/api/timer/setTime", {
        method: "POST",
        body: JSON.stringify({ time }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("db req");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getTime = async () => {
      try {
        const res = await fetch("/api/timer/getTime");
        const time = await res.json();
        console.log("db req");
        setTime(time);
      } catch (e) {
        console.log(e);
      }
    };
    getTime();
  }, []);

  return (
    <div className="Timer">
      <Count time={time} />
      {/* <h2 className="quotes">
        “No one in the brief history of computing has ever written a piece of
        perfect software”
      </h2> */}
      <div className="controls-cont">
        <button
          className="cont-btn"
          onClick={() => {
            setTimerOn(true);
            set(time);
          }}
        >
          Start
        </button>
        <button
          className="cont-btn"
          onClick={() => {
            setTimerOn(false);
            set(time);
          }}
        >
          Stop
        </button>
        <button
          className="cont-btn"
          onClick={() => {
            setTime(86400000);
            set(86400000);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Countdown;
