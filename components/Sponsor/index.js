import SectionLayout from "../SectionLayout";
import { sponsorConfig } from "../../config/sponsor";
import SponsorContainer from "./SponsorContainer";
import Image from "next/image";

const SponsorWrapper = ({ Img, Name }) => {
  return (
    <div className="card">
      <div className="pic">
        <Image
          src={Img}
          alt={`${Name.toUpperCase()} LOGO`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const Sponsor = () => {
  const { gold, silver, bronze, inkind } = sponsorConfig;

  return (
    <SectionLayout
      Classname={"sponsor-section"}
      Title={"SPONSORS & PARTNERS"}
      id="sponsors"
    >
      <div className="sponsor-container">
        <SponsorContainer Name={gold.Name} Img={gold.Img} Type={gold.Type}>
          {gold.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={silver.Name}
          Img={silver.Img}
          Type={silver.Type}
        >
          {silver.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={bronze.Name}
          Img={bronze.Img}
          Type={bronze.Type}
        >
          {bronze.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={inkind.Name}
          Img={inkind.Img}
          Type={inkind.Type}
        >
          {inkind.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer>
      </div>
    </SectionLayout>
  );
};

export default Sponsor;
