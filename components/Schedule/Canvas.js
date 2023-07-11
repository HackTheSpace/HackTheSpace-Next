import { useEffect, useRef } from "react";
import loadP5 from "../../utils/loadP5";

const Canvas = () => {
  const p5ContainerRef = useRef(null);

  useEffect(() => {
    loadP5(p5ContainerRef);
  }, []);

  return <div id="myCanvas" ref={p5ContainerRef} />;
};

export default Canvas;
