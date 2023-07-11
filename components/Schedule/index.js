import Day from "./Day";
import TimeCont from "./TimeCont";
import { scheduleConfig } from "../../config/schedule";
import Canvas from "./Canvas";

const Schedule = () => {
  const { day } = scheduleConfig;

  return (
    <div className="section schedule-section">
      <h2 className="section-title">SCHEDULE</h2>
      <div className="container">
        <Canvas />
        {day.map((d) => (
          <Day Day={d.Day} date={d.Date} key={d.Day}>
            {d.TimeCont.map((c) => (
              <TimeCont
                Direction={c.Direction}
                Img={c.Img}
                Time={c.Time}
                Description={c.Description}
                key={c.Time}
              />
            ))}
          </Day>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
