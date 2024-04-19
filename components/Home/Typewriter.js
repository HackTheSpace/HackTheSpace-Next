import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [title, setTitle] = useState("THINK. BUILD. LAUNCH.");
  let idx = 0;
  let direction = 1;
  let animationDelay = 100; // milliseconds
  let pauseDelay = 2000; // milliseconds
  function writeText() {
    if (direction === 1) {
      setTitle(title.slice(0, idx));
      idx++;
      if (idx > title.length) {
        direction = -1;
        idx = title.length;
        setTimeout(writeText, pauseDelay);
        return;
      }
    } else if (direction === -1) {
      setTitle(title.slice(0, idx));
      idx--;
      if (idx < 0) {
        direction = 1;
        idx = 0;
        setTimeout(writeText, pauseDelay);
        return;
      }
    }

    setTimeout(writeText, animationDelay);
  }
  useEffect(() => writeText(), []);

  return (
    <>
      <p className="title" id="title">
        {title}
      </p>
      <p style={{ marginTop: "0" }}>27 - 28th SEPTEMBER, 2024</p>
      <p className="venue-text">
          Shri Shankaracharya Technical Campus
          <br />
          Bhilai, India
      </p>
    </>
  );
};

export default Typewriter;
