import Image from "next/image";

const SponsorContainer = ({ Name, Img, Type, children, wid }) => {
  return (
    <div className={`sponsor ${Name}`}>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default SponsorContainer;
