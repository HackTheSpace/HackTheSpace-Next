const loadP5 = async (p5ContainerRef) => {
  const p5 = await import("p5");
  new p5.default((sketch) => {
    let containerHeight = document.getElementById("myCanvas").offsetHeight;
    let containerWidth = document.getElementById("myCanvas").offsetWidth;

    let leftContainerTop =
      document.querySelector(".time-container-left").offsetTop + 80;
    let rightContainerTop =
      document.querySelector(".time-container-right").offsetTop + 80;
    let leftContainerLeft =
      document.querySelector(".time-container-left").offsetLeft + 50;

    let Height = rightContainerTop - leftContainerTop;
    let Width = document.querySelector(".time-container-left").offsetWidth;
    let noOfLeftToRight = 6;
    let noOfRightToLeft = 5;

    sketch.setup = () => {
      sketch.createCanvas(containerWidth, containerHeight);
      sketch.stroke(255);
      sketch.strokeWeight(2);
      sketch.noFill();
    };

    sketch.draw = () => {
      sketch.background(0);
      sketch.setLineDash([8, 8]);
      sketch.curve(
        leftContainerLeft,
        rightContainerTop,
        leftContainerLeft + 20,
        0,
        leftContainerLeft,
        leftContainerTop,
        Width,
        0
      );

      for (let i = 0, j = -1; i < noOfLeftToRight; i++, j += 2) {
        sketch.bezier(
          leftContainerLeft,
          rightContainerTop + Height * j,
          leftContainerLeft,
          rightContainerTop + Height * 2 * i,
          Width,
          rightContainerTop + Height * j,
          Width,
          rightContainerTop + Height * 2 * i
        );
      }

      for (let i = 0, j = -2; i < noOfRightToLeft; i++, j += 2) {
        sketch.bezier(
          Width,
          rightContainerTop + Height * 2 * i,
          Width,
          rightContainerTop + Height * (3 + j),
          leftContainerLeft,
          rightContainerTop + Height * 2 * i,
          leftContainerLeft,
          rightContainerTop + Height * (3 + j)
        );
      }

      sketch.curve(
        leftContainerLeft,
        rightContainerTop,
        Width,
        rightContainerTop + Height * 10,
        Width - 400,
        containerHeight,
        Width,
        0
      );
    };

    sketch.windowResized = () => {
      containerHeight = document.getElementById("myCanvas").offsetHeight;
      containerWidth = document.getElementById("myCanvas").offsetWidth;

      if (containerWidth > 653) {
        leftContainerTop =
          document.querySelector(".time-container-left").offsetTop + 80;
        rightContainerTop =
          document.querySelector(".time-container-right").offsetTop + 80;
        leftContainerLeft =
          document.querySelector(".time-container-left").offsetLeft + 50;
      } else {
        leftContainerTop =
          document.querySelector(".time-container-left").offsetTop + 60;
        rightContainerTop =
          document.querySelector(".time-container-right").offsetTop + 60;
        leftContainerLeft =
          document.querySelector(".time-container-left").offsetLeft + 35;
      }
      Height = rightContainerTop - leftContainerTop;
      Width = document.querySelector(".time-container-left").offsetWidth;

      sketch.resizeCanvas(containerWidth, containerHeight);
    };

    sketch.setLineDash = (list) => {
      sketch.drawingContext.setLineDash(list);
    };
  }, p5ContainerRef.current);
};

export default loadP5;
