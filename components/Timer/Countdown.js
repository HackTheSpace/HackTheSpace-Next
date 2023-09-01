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
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getTime = async () => {
      try {
        const res = await fetch("/api/timer/getTime");
        const time = await res.json();
        setTime(time);
      } catch (e) {
        console.log(e);
      }
    };
    getTime();
  }, []);

  return (
    <div>
      <Count time={time} />
      <div>
        <button
          onClick={() => {
            setTimerOn(true);
            set(time);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setTimerOn(false);
            set(time);
          }}
        >
          Stop
        </button>
        <button
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
