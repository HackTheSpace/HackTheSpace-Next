import SectionLayout from "../SectionLayout";
import { sponsorConfig } from "../../config/sponsor";
import SponsorContainer from "./SponsorContainer";
import Image from "next/image";

const SponsorWrapper = ({ Img, Name, Link }) => {
  return (
    <a href={Link || "#"} target="_blank">
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
    </a>
  );
};

const Sponsor = () => {
  const { gold, silver, bronze, inkind, hiringPartner, mediaPartner } =
    sponsorConfig;

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
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={silver.Name}
          Img={silver.Img}
          Type={silver.Type}
          Link={Sponsor.Link}
        >
          {silver.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={bronze.Name}
          Img={bronze.Img}
          Type={bronze.Type}
          // Link={sponsor.Link}
        >
          {bronze.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
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
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>

        <div className="hiring-and-media">
          <SponsorContainer
            Name={hiringPartner.Name}
            Img={hiringPartner.Img}
            Type={hiringPartner.Type}
            wid={hiringPartner.wid}
            Link={hiringPartner.Link}
          >
            {hiringPartner.Partner.map((partner) => (
              <SponsorWrapper
                key={partner.id}
                Name={partner.Name}
                Img={partner.Img}
                Link={partner.Link}
              />
            ))}
          </SponsorContainer>
          <SponsorContainer
            Name={mediaPartner.Name}
            Img={mediaPartner.Img}
            Type={mediaPartner.Type}
            wid={mediaPartner.wid}
            Link={mediaPartner.Link}
          >
            {mediaPartner.Partner.map((partner) => (
              <SponsorWrapper
                key={partner.id}
                Name={partner.Name}
                Img={partner.Img}
                Link={partner.Link}
              />
            ))}
          </SponsorContainer>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Sponsor;
