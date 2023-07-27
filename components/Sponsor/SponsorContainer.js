import Image from "next/image";

const SponsorContainer = ({ Name, Img, Type, children }) => {
  return (
    <div className={`sponsor ${Name}`}>
      <div className="Sponsor-name-container">
        <hr className="left-hr" />
        <Image
          src={Img}
          alt={Name}
          style={
            Name === "inkind" || Name === "hiringPartner"
              ? { opacity: "0" }
              : {}
          }
          width={100}
          height={Name === "gold" ? 130 : 100}
        />
        <h2
          className={`sponsor-name name-${Type} ${
            Name === "inkind" ? "name-inkind" : ""
          }`}
        >
          {Type}
        </h2>
        <hr className="right-hr" />
      </div>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default SponsorContainer;
