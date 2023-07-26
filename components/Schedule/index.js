import SectionLayout from "../SectionLayout";
import Day from "./Day";
import TimeCont from "./TimeCont";
import { scheduleConfig } from "../../config/schedule";
import Canvas from "./Canvas";

const Schedule = () => {
  const { data } = scheduleConfig;

  return (
    <SectionLayout
      Classname={"schedule-section"}
      Title={"SCHEDULE"}
      id="schedule"
    >
      <div className="container">
        <Canvas />
        {data.map((d) => (
          <Day Day={d.Day} date={d.Date} key={d.Day}>
            {d.TimeCont.map((c) => (
              <TimeCont
                Direction={c.Direction}
                Img={c.Img}
                Time={c.Time}
                Description={c.Description}
                key={c.id}
              />
            ))}
          </Day>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Schedule;
