import SectionLayout from "../SectionLayout";
import Image from "next/image";
import cloudinaryLoader from "../../utils/cloudinaryLoader";
import { glimpseConfig } from "../../config/glimpse";

const ImageCard = ({ src1, src2, src3, className, content, content2 }) => {
  const numbers = content.match(/\d+/g);
  const text = content.replace(numbers, "");
  content = (
    <div className="content">
      <h2>{numbers[0]}+</h2>
      <p>{text}</p>
    </div>
  );

  const numbers2 = content2.match(/\d+/g);
  const text2 = content2.replace(numbers2, "");
  content2 = (
    <div className="content">
      <h2>{numbers2[0]}+</h2>
      <p>{text2}</p>
    </div>
  );

  return (
    <div className="image-card" style={{ flexFlow: `${className}` }}>
      <div
        className="left-container"
        style={{ flexFlow: `${className ? "column-reverse" : ""}` }}
      >
        <div className="image-container">
          <Image src={src1} height={270} width={570} quality={100} alt="HTS" />
          {content}
        </div>
        <div className="image-container">
          {content2}
          <Image src={src3} height={270} width={570} quality={100} alt="HTS" />
        </div>
      </div>
      <div className="right-container">
        <Image src={src2} height={600} width={262} quality={100} alt="HTS" />
      </div>
    </div>
  );
};

const Glimpse = () => {
  return (
    <SectionLayout Title={"PREVIOUS EVENTS"} id="Glimpse">
      <div className="glimpse-container">
        {glimpseConfig.map((item) => (
          <ImageCard
            key={item.id}
            src1={item.src1}
            src2={item.src2}
            src3={item.src3}
            content={item.content}
            content2={item.content2}
            className={item.className}
          />
        ))}
        <div className="bottom-container">
          <Image
            src={"/images/glimpse/glimpse_6.jpg"}
            width={850}
            height={270}
            quality={100}
          />
          <div className="content">
            <h2>50+</h2>
            <p>Community Events</p>
          </div>
          <Image
            src={"/images/glimpse/glimpse_1.jpg"}
            width={450}
            height={270}
            quality={100}
          />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Glimpse;
