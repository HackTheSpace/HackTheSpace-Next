import { useEffect, useMemo, useState, useContext } from "react";
import Count from "./Count";

const Countdown = () => {
  const date = useMemo(() => new Date("Sept 9, 2023 12:00:00").getTime(), []);
  const [endDate, setEndDate] = useState(date);
  const [currentTime, setCurrentTime] = useState(86400000);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      try {
        fetch("/api/timer/time", {
          method: "POST",
          body: JSON.stringify({ type: "time", time: currentTime }),
          headers: { "Content-Type": "application/json" },
        });
        console.log("Api called");
      } catch (e) {
        console.log(e);
      }
    }
  }, [toggle]);

  const getTime = async () => {
    try {
      const now = new Date().getTime();
      const res = await fetch("/api/timer/time");
      const time = await res.json();
      console.log("Api called");
      const distance = now - time;
      setEndDate(endDate + distance);

      const res2 = await fetch("/api/timer/time", {
        method: "POST",
        body: JSON.stringify({ type: "endDate", time: endDate + distance }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const setDate = async () => {
    try {
      const res = await fetch("/api/timer/time", {
        method: "POST",
        body: JSON.stringify({ type: "endDate", time: date }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Api called");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      fetch("/api/timer/getDate")
        .then((res) => res.json())
        .then((data) => {
          console.log("Api called");
          if (data === "nil") {
            setEndDate(date);
          } else {
            setEndDate(data);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="Timer">
      <Count
        endDate={endDate}
        setCurrentTime={setCurrentTime}
        toggle={toggle}
      />
      <div className="controls-cont">
        <button
          className="cont-btn"
          onClick={() => {
            getTime();
            setToggle(false);
          }}
        >
          Start
        </button>
        <button
          className="cont-btn"
          onClick={() => {
            setToggle(true);
          }}
        >
          Stop
        </button>
        <button
          className="cont-btn"
          onClick={() => {
            setEndDate(date);
            setToggle(false);
            setDate();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Countdown;
