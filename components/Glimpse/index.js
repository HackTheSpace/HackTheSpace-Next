import SectionLayout from "../SectionLayout";
import Image from "next/image";
import cloudinaryLoader from "../../utils/cloudinaryLoader";
import { glimpseConfig } from "../../config/glimpse";

const ImageCard = ({ src1, src2, className, content ,className1}) => {
  const numbers = content.match(/\d+/g);
  const text = content.replace(numbers, "");
  content = (
    <div className="content">
      <h2>{numbers[0]}+</h2>
      <p>{text}</p>
    </div>
  );

  return (
    <div className="image-card" style={{ flexFlow: `${className1}` }}>
      <div className="image-container" style={{ flexFlow: `${className}` }}>
        <Image src={src1} height={150} width={228} quality={100} alt="HTS" />
        {content}

        {/* <hr /> */}
      </div>
      <Image src={src2} height={250} width={228} quality={100} alt="HTS" />
    </div>
  );
};

const Glimpse = () => {
  return (
    <SectionLayout Title={"GLIMPSE OF PREVIOUS SEASON"} id="Glimpse">
      <div className="glimpse-container">
        {/* <ImageCard />
        <ImageCard className={"column-reverse"} />
        <ImageCard />
        <ImageCard className={"column-reverse"} /> */}
        {glimpseConfig.map((item) => (
          <ImageCard key={item.id} {...item} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Glimpse;
