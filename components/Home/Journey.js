import Image from "next/image";
import SectionLayout from "../SectionLayout";

const Journey = () => {
  return (
    <SectionLayout
      Title={"JOURNEY OF HTS"}
      Classname={"venue-section-container built-section"}
    >
      <div className="super-outer-circle">
        <div className="text text-1">
          <h2>25+</h2>
          <p>Successful Events</p>
        </div>
        <div className="outer-outer-circle">
          <div className="text text-2">
            <h2>72+</h2>
            <p>Hack Hours</p>
          </div>
          <div className="text text-3">
            <h2>300+</h2>
            <p>Projects</p>
          </div>
          <div className="outer-circle">
            <div className="text text-4">
              <h2>300+</h2>
              <p>Avg. Footfall</p>
            </div>
            <div className="text text-5">
              <h2>6000+</h2>
              <p>Participants Across Events</p>
            </div>
            <div className="inner-circle">
              <div className="center-circle">
                <div className="planet">
                  <Image
                    src={"/images/built/planet.svg"}
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

      <Image
        className="cloud cloudOne"
        src={"/images/built/cloudOne.svg"}
        alt="Hack the space"
        width={80}
        height={50}
      />
      <Image
        className="cloud cloudTwo"
        src={"/images/built/cloudTwo.svg"}
        alt="Hack the space"
        width={50}
        height={40}
      />
      <div className="stars">
        <Image
          src="/images/stars.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <div className="pattern3">
        <Image
          src="/images/pattern3.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
      <div className="pattern4">
        <Image
          src="/images/pattern4.svg"
          alt="hack the space const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </SectionLayout>
  );
};

export default Journey;
