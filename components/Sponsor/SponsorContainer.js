const SponsorContainer = ({ Name, Img, Type, children }) => {
  return (
    <div className={`sponsor ${Name}`}>
      <div className="Sponsor-name-container">
        <hr className="left-hr" />
        <img
          src={Img}
          alt={Name}
          style={Name === "inkind" ? { opacity: "0" } : {}}
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
