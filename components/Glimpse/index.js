import SectionLayout from "../SectionLayout";
import Image from "next/image";
import cloudinaryLoader from "../../utils/cloudinaryLoader";
import { glimpseConfig } from "../../config/glimpse";

const ImageCard = ({ src1, src2, className }) => {
  return (
    <div className="image-card" style={{ flexFlow: `${className}` }}>
      <div className="image-container" style={{ flexFlow: `${className}` }}>
        <Image
          loader={cloudinaryLoader}
          src={src1}
          height={150}
          width={260}
          quality={100}
          alt="HTS"
        />
        {/* <h2>content</h2> */}
        <hr />
      </div>
      <Image
        loader={cloudinaryLoader}
        src={src2}
        height={250}
        width={260}
        quality={100}
        alt="HTS"
      />
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
