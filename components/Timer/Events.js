import { useEffect, useState } from "react";

const Events = () => {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");

  const setEvents = async () => {
    try {
      const res = await fetch("/api/timer/events", {
        method: "POST",
        body: JSON.stringify({ currentEvent: current, nextEvent: next }),
        headers: { "Content-Type": "application/json" },
      });
      console.log("Api called");
    } catch (e) {
      console.log(e);
    }
  };

  const getEvents = async () => {
    try {
      const res = await fetch("/api/timer/events");
      const data = await res.json();
      console.log("Api called");
      setCurrent(data.currentEvent);
      setNext(data.nextEvent);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="events">
      <div className="ongoing">
        <h2>Current Event</h2>
        <input
          placeholder=""
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEvents();
            }
          }}
        />
      </div>
      <div className="next">
        <h2>Next Event</h2>
        <input
          placeholder=""
          value={next}
          onChange={(e) => {
            setNext(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEvents();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Events;
