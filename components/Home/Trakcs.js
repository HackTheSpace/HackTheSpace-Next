import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { trackConfig } from "../../config/tracks";

const cardStyle = {
  justifyContent: "center",
  padding: "20px",
  width: "250px",
  height: "200px",
};
const headingStyle = {
  fontSize: "1.5rem",
  marginBottom: "10px",
  position: "absolute",
  bottom: "5px",
};

const TrackCard = ({ logo, title }) => {
  return (
    <div className="tracks-card" style={cardStyle}>
      <div className="centered-icon" style={{ margin: "30px 0" }}>
        <Image
          src={logo}
          alt="Hack the space Hackathon Constellation"
          priority={true}
          sizes="100%"
          width={150}
          height={150}
        />
      </div>
      <h2 style={headingStyle}>{title}</h2>
    </div>
  );
};

const Trakcs = () => {
  const { Track } = trackConfig;

  return (
    <SectionLayout Title="TRACKS" Classname={"why-sponsor-section"}>
      <div className=" tracks-container">
        {Track.map((track) => (
          <TrackCard {...track} key={track.id} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Trakcs;
