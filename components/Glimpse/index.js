import SectionLayout from "../SectionLayout";
import Image from "next/image";

const ImageCard = ({ className }) => {
  return (
    <div className="image-card" style={{ flexFlow: `${className}` }}>
      <div className="image-container"style={{ flexFlow: `${className}` }} >
        <Image
          src="/images/HTSTEST.jpg"
          height={150}
          width={240}
          quality={100}
        />
        {/* <h2>content</h2> */}
        <hr/>
      </div>
      <Image src="/images/HTSTEST.jpg" height={250} width={250} quality={100}/>
    </div>
  );
};

const Glimpse = () => {
  return (
    <SectionLayout Title={"GLIMPSE OF PREVIOUS SEASON"} id="Glimpse">
      <div className="glimpse-container">
        <ImageCard />
        <ImageCard className={"column-reverse"} />
        <ImageCard />
        <ImageCard className={"column-reverse"} />
      </div>
    </SectionLayout>
  );
};

export default Glimpse;
