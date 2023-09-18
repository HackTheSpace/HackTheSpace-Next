import { useEffect, useState, useMemo } from "react";
import rocket from "../../utils/Rocket/rocket.json";
import Lottie from "react-lottie-player";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const launchDate = useMemo(
    () => new Date("Sept 8, 2023 11:00:00").getTime(),
    []
  );

  useEffect(() => {
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

  const animateFlip = (className) => {
    const element = document.querySelector(className);
    element.classList.add("flip");

    setTimeout(() => {
      element.classList.remove("flip");
    }, 550);
  };

  useEffect(() => {
    if (days === 0 && hours === 0 && mins === 0 && seconds === 0) return;
    animateFlip(".seconds");
  }, [seconds]);

  useEffect(() => {
    if (days === 0 && hours === 0 && mins === 0 && seconds === 0) return;
    animateFlip(".mins");
  }, [mins]);

  useEffect(() => {
    if (days === 0 && hours === 0 && mins === 0 && seconds === 0) return;
    animateFlip(".hours");
  }, [hours]);

  useEffect(() => {
    if (days === 0 && hours === 0 && mins === 0 && seconds === 0) return;
    animateFlip(".days");
  }, [days]);

  return (
    <>
      <div className="countdown">
        <h3 className="venue-heading">Registrations Closed</h3>

        <Lottie play loop animationData={rocket} className="rocket" speed={1} />
        {days === 0 && hours === 0 && mins === 0 && seconds === 0 ? null : (
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
        )}
      </div>
    </>
  );
};

export default Countdown;
