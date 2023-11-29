import React from "react";
import SectionLayout from "../SectionLayout";
import { trackConfig } from "../../config/tracks";
import Link from "next/link";

const TrackCard = ({ id, logo, teamName, data, link }) => {
  return (
    <div className="Track-Card">
      <div>
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="data" style={{ textAlign: "center" }}>
          <h2>{teamName}</h2>
          <p>{data}</p>
        </div>
        {/* <ul>
          {data.map((pt, ind) => (
            <li key={ind}>{pt}</li>
          ))}
        </ul> */}
      </div>
      {link ? (
        <Link target="_blank" href={link}>
          {/* View more */}
          View Project
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

const Tracks = () => {
  const { SponsorTrack } = trackConfig;
  return (
    <SectionLayout
      id="winners"
      Classname={"track-section"}
      Title={"PREVIOUS WINNERS"}
    >
      <div className="track-container">
        {SponsorTrack.map((track) => (
          <TrackCard {...track} key={track.id} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Tracks;
