import { useState, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState(86400000);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  return { time, setTime, timerOn, setTimerOn };
};

export default useTimer;
