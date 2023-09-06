import Image from "next/image";
import { useEffect, useState } from "react";

const Media = () => {
  const [imgNum, setImgNum] = useState(randomNumberInRange(1, 790));
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const a = randomNumberInRange(1, 790);
      setImgNum(a);
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="media">
      <Image
        src={`/images/meme/(${imgNum}).png`}
        alt="planet"
        width={600}
        height={500}
        quality={100}
      />
    </div>
  );
};

export default Media;
