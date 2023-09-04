import { useState } from "react";

const Events = () => {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");

  return (
    <div className="events">
      <div className="ongoing">
        <h2>Current</h2>
        <input
          placeholder=""
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
        />
      </div>
      <div className="next">
        <h2>Next</h2>
        <input
          placeholder=""
          value={next}
          onChange={(e) => {
            setNext(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Events;
