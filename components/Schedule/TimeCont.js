import Image from "next/image";

const TimeCont = ({ Direction, Img, Time, Description }) => {
  return (
    <div className={`time-container-${Direction}`}>
      <div className="planet">
        <Image src={Img} alt="planet" width={100} height={100} loading="lazy" />
      </div>
      <div className="time">
        <p className="time-text">{Time}</p>
        <p className="time-text">{Description}</p>
      </div>
    </div>
  );
};

export default TimeCont;
