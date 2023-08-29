import SectionLayout from "../SectionLayout";
import Image from "next/image";
import { trackConfig } from "../../config/tracks";

const cardStyle = {
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  width: "250px",
  height: "200px",
};
const headingStyle = {
  fontSize: "1.5rem",
  marginBottom: "10px",
};

const TrackCard = ({ logo, title }) => {
  return (
    <div className="tracks-card" style={cardStyle}>
      <div className="centered-icon">
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
    <SectionLayout Title="TRACKS" Classname={"why-sponsor-section tracks"}>
    <h3>Though HackTheSpace is an open innovation event! Here are a few fields you can work on for your awesome hackathon projects!</h3>
      <div className="tracks-container">
        {Track.map((track) => (
          <TrackCard {...track} key={track.id} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Trakcs;
