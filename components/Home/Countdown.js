import { useEffect, useState } from "react";
import rocket from "../../utils/Rocket/rocket.json";
import Lottie from "react-lottie-player";

const Countdown = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countdown = document.querySelector(".countdown");
    const launchDate = new Date("Sept 8, 2023 11:00:00").getTime();

    const intvl = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intvl);
        countdown.style.display = "none";
      } else {
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSeconds(seconds);
      }
    }, 1000);

    return () => {
      clearInterval(intvl);
    };
  }, []);

  useEffect(() => {
    const secondsTop = document.querySelector(".seconds");

    secondsTop.classList.add("flip");

    const flipTime = setTimeout(() => {
      secondsTop.classList.remove("flip");
    }, 550);

    return () => {
      clearTimeout(flipTime);
    };
  }, [seconds]);

  useEffect(() => {
    const minsTop = document.querySelector(".mins");

    minsTop.classList.add("flip");

    const flipTime = setTimeout(() => {
      minsTop.classList.remove("flip");
    }, 550);

    return () => {
      clearTimeout(flipTime);
    };
  }, [mins]);

  useEffect(() => {
    const hoursTop = document.querySelector(".hours");

    hoursTop.classList.add("flip");

    const flipTime = setTimeout(() => {
      hoursTop.classList.remove("flip");
    }, 550);

    return () => {
      clearTimeout(flipTime);
    };
  }, [hours]);

  useEffect(() => {
    const daysTop = document.querySelector(".days");

    daysTop.classList.add("flip");

    const flipTime = setTimeout(() => {
      daysTop.classList.remove("flip");
    }, 550);

    return () => {
      clearTimeout(flipTime);
    };
  }, [days]);

  return (
    <>
      <div className="countdown">
        <h3 className="venue-heading">
          8th-9th September | Bhilai, Chhattisgarh
        </h3>

        <Lottie play loop animationData={rocket} className="rocket" speed={1} />
        <div className="timerDiv">
          <div className="countdown__item">
            <span className="countdown__item--number days">{days}</span>
            <span className="countdown__item--text">Days</span>
          </div>

          <div className="countdown__item">
            <span className="countdown__item--number hours">{hours}</span>
            <span className="countdown__item--text">Hours</span>
          </div>

          <div className="countdown__item">
            <span className="countdown__item--number mins">{mins}</span>
            <span className="countdown__item--text">Mins</span>
          </div>

          <div className="countdown__item">
            <span className="countdown__item--number seconds">{seconds}</span>
            <span className="countdown__item--text">Seconds</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
