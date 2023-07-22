import Image from "next/image";
import SectionLayout from "../SectionLayout";

const Journey = () => {
  return (
    <SectionLayout
      Title={"Journey of HTF"}
      Classname={"venue-section-container built-section"}
    >
      <div className="wow animate__fadeInUp">
        <div className="super-outer-circle">
          <div className="text text-1">
            <h2>20+</h2>
            <p>Successful Events</p>
          </div>
          <div className="outer-outer-circle">
            <div className="text text-2">
              <h2>48+</h2>
              <p>Hack Hours</p>
            </div>
            <div className="text text-3">
              <h2>150+</h2>
              <p>Projects</p>
            </div>
            <div className="outer-circle">
              <div className="text text-4">
                <h2>200+</h2>
                <p>Avg. Footfall</p>
              </div>
              <div className="text text-5">
                <h2>5000+</h2>
                <p>Participants Across Events</p>
              </div>
              <div className="inner-circle">
                <div className="center-circle">
                  <div className="planet">
                    <Image
                      src={"/images/built/planet.png"}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Journey;
