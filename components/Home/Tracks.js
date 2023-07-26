import React from "react";
import SectionLayout from "../SectionLayout";
import { trackConfig } from "../../config/tracks";
import Link from "next/link";

const TrackCard = ({ logo, data, link }) => {
  return (
    <div className="Track-Card">
      <div>
        <div className="logo">
          <img src={logo} />
        </div>
        <ul>
          {data.map((pt, ind) => (
            <li key={ind}>{pt}</li>
          ))}
        </ul>
      </div>
      <Link target="_blank" href={link}>
        View more
      </Link>
    </div>
  );
};

const Tracks = () => {
  return (
    <SectionLayout id="tracks" Title={"TRACKS"} Classname={"track-section"}>
      <div className="track-container">
        {trackConfig.map((track) => (
          <TrackCard {...track} key={track.id} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Tracks;
