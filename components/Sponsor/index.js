import SectionLayout from "../SectionLayout";
import { sponsorConfig } from "../../config/sponsor";
import { Allsponsor } from "../../config/Allsponsor";
import SponsorContainer from "./SponsorContainer";
import Image from "next/image";

const SponsorWrapper = ({ Img, Name, Link, Type }) => {
  return (
    <a href={Link || "#"} target="_blank">
      <div
        className={Type == "communityPartner" ? "card_nonPadding card" : "card"}
      >
        <div className={Type == "communityPartner" ? Type : "pic"}>
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
  const {
    diamond,
    specialsponsor,
    gold,
    silver,
    bronze,
    inkind,
    hiringPartner,
    mediaPartner,
    communityPartner,
  } = sponsorConfig;

  return (
    <>
      <SectionLayout
        Classname={"sponsor-section"}
        Title={"PAST SPONSORS"}
        id="sponsors"
      >
        <div className="sponsor-container">
          {/* <SponsorContainer
          Name={diamond.Name}
          Img={diamond.Img}
          Type={diamond.Type}
        >
          {diamond.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>

        <SponsorContainer
          Name={specialsponsor.Name}
          Img={specialsponsor.Img}
          Type={specialsponsor.Type}
        >
          {specialsponsor.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>


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
          <SponsorContainer
            Name={communityPartner.Name}
            Img={communityPartner.Img}
            Type={communityPartner.Type}
            wid={communityPartner.wid}
          >
            {communityPartner.Partner.map((partner) => (
              <SponsorWrapper
                key={partner.id}
                Name={partner.Name}
                Img={partner.Img}
                Link={partner.Link}
                Type={communityPartner.Name}
              />
            ))}
          </SponsorContainer>
        </div> */}
          <SponsorContainer
            Name={"inkind"}
            Img={communityPartner.Img}
            Type={"PAST SPONSORS"}
          >
            {Allsponsor.SPNSR.map((sponsor) => (
              <SponsorWrapper
                key={sponsor.id}
                Name={sponsor.Name}
                Img={sponsor.Img}
                Link={sponsor.Link}
              />
            ))}
          </SponsorContainer>
        </div>
      </SectionLayout>
      <SectionLayout Classname={"sponsor-section"} Title={"COMMUNITY PARTNERS"}>
        <SponsorContainer
          Name={"inkind"}
          Img={communityPartner.Img}
          Type={"PARTNERS"}
        >
          {Allsponsor.PRTNR.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
              Link={sponsor.Link}
            />
          ))}
        </SponsorContainer>
      </SectionLayout>
    </>
  );
};

export default Sponsor;
