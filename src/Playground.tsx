import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FishImg } from "./36102.svg";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0080ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// #1 도킹 애니메이션

// const Page1 = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: blue;
//   position: absolute;
//   /* animation: 5s;
//   animation-name: appear; */
//   /* animation-direction: alternate;
//   animation-iteration-count: infinite; */
// `;

// const Page2 = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: ${(props) => props.theme.focusBorder};
//   position: absolute;
//   /* animation: 5s;
//   animation-name: disappear; */
//   /* animation-direction: alternate;
//   animation-iteration-count: infinite; */
// `;

// const Frame = styled.div`
//   width: 200px;
//   height: 200px;
//   border: 40px solid ${(props) => props.theme.contrastBorder};
//   background-color: transparent;
//   position: absolute;
//   z-index: 10;
// `;

// const GumulContainer = styled.div`
//   width: 0px;
//   height: 2px;
//   background: linear-gradient(to right, black, white);
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   z-index: 10;
// `;
// const GumulContainer2 = styled.div`
//   width: 2px;
//   height: 0px;
//   background: linear-gradient(to bottom, black, white);
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   z-index: 10;
// `;
// const GumulContainer3 = styled.div`
//   width: 0px;
//   height: 2px;
//   background: linear-gradient(to left, black, white);
//   position: absolute;
//   bottom: 0px;
//   right: 0px;
//   z-index: 10;
// `;
// const GumulContainer4 = styled.div`
//   width: 2px;
//   height: 0px;
//   background: linear-gradient(to top, black, white);
//   position: absolute;
//   bottom: 0px;
//   left: 0px;
//   z-index: 10;
// `;

// const Button = styled.div`
//   width: 200px;
//   height: 100px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   background-color: gray;
//   font-size: 30px;
// `;
// const Button2 = styled.div`
//   width: 200px;
//   height: 100px;
//   position: absolute;
//   top: 100px;
//   right: 0;
//   background-color: whitesmoke;
//   font-size: 30px;
// `;

// interface PlaygroundProps {}

// const Playground: React.FC<PlaygroundProps> = () => {
//   const [page, setPage] = useState<number>(0);
//   const page1Ref = useRef<HTMLDivElement>(null);
//   const page2Ref = useRef<HTMLDivElement>(null);

//   const gu1Ref = useRef<HTMLDivElement>(null);
//   const gu2Ref = useRef<HTMLDivElement>(null);
//   const gu3Ref = useRef<HTMLDivElement>(null);
//   const gu4Ref = useRef<HTMLDivElement>(null);

//   const onClick = () => {
//     page1Ref.current!.style.animation = "5s appear";
//     page2Ref.current!.style.animation = "5s disappear";
//     page1Ref.current?.addEventListener("animationend", () => {
//       page1Ref.current!.style.zIndex = "2";
//       page1Ref.current!.style.animation = "none";
//     });
//     page2Ref.current?.addEventListener("animationend", () => {
//       page2Ref.current!.style.transform =
//         "transform: translateY(200%) scale(30%)";
//       page2Ref.current!.style.animation = "none";
//       gu1Ref.current!.style.animation = "0.5s gumul1 linear";
//       gu2Ref.current!.style.animation = "0.5s gumul2 linear 0.35s";
//       gu1Ref.current?.addEventListener("animationend", () => {
//         gu1Ref.current!.style.animation = "none";
//         gu1Ref.current!.style.width = "0px";
//       });
//       gu2Ref.current?.addEventListener("animationend", () => {
//         gu2Ref.current!.style.animation = "none";
//         gu2Ref.current!.style.height = "0px";
//       });
//       gu3Ref.current!.style.animation = "0.5s gumul3 linear 0.7s";
//       gu3Ref.current?.addEventListener("animationend", () => {
//         gu3Ref.current!.style.animation = "none";
//         gu3Ref.current!.style.width = "0px";
//       });
//       gu4Ref.current!.style.animation = "0.5s gumul4 linear 1.05s";
//       gu4Ref.current?.addEventListener("animationend", () => {
//         gu4Ref.current!.style.animation = "none";
//         gu4Ref.current!.style.height = "0px";
//       });
//     });
//   };

//   const onClick2 = () => {
//     gu1Ref.current!.style.animation = "1s gumul1 linear";
//     gu2Ref.current!.style.animation = "1s gumul2 linear 0.7s";
//     gu1Ref.current?.addEventListener("animationend", () => {
//       gu1Ref.current!.style.animation = "none";
//       gu1Ref.current!.style.width = "0px";
//     });
//     gu2Ref.current?.addEventListener("animationend", () => {
//       gu2Ref.current!.style.animation = "none";
//       gu2Ref.current!.style.height = "0px";
//     });
//     gu3Ref.current!.style.animation = "1s gumul3 linear 1.4s";
//     gu3Ref.current?.addEventListener("animationend", () => {
//       gu3Ref.current!.style.animation = "none";
//       gu3Ref.current!.style.width = "0px";
//     });
//     gu4Ref.current!.style.animation = "1s gumul4 linear 2.1s";
//     gu4Ref.current?.addEventListener("animationend", () => {
//       gu4Ref.current!.style.animation = "none";
//       gu4Ref.current!.style.height = "0px";
//     });
//   };

//   return (
//     <Body>
//       <Page1 ref={page1Ref}></Page1>
//       <Frame>
//         <GumulContainer ref={gu1Ref} />
//         <GumulContainer2 ref={gu2Ref} />
//         <GumulContainer3 ref={gu3Ref} />
//         <GumulContainer4 ref={gu4Ref} />
//       </Frame>
//       <Page2 ref={page2Ref}></Page2>
//       <Button onClick={onClick}>페이지 전환</Button>
//       <Button2 onClick={onClick2}>꼬물이소환</Button2>
//     </Body>
//   );
// };

// export default Playground;

const Box = styled.div`
  width: 120px;
  height: 120px;
  background-color: transparent;
  position: absolute;
  transition: all 1s ease-in;
`;

const Fishing = styled.div`
  width: 2px;
  height: 1px;
  background-color: black;
  transition: transform 1s ease-in;
  transform-origin: bottom;
`;

interface Coordinate {
  x: number;
  y: number;
}

const getDistance = (center: Coordinate, point: Coordinate) => {
  const result = Math.sqrt(
    Math.pow(center.x - point.x, 2) + Math.pow(center.y - point.y, 2)
  );
  return result;
};

const getAngle = (center: Coordinate, point: Coordinate) => {
  const dy = point.y - center.y;
  const dx = point.x - center.x;
  let result = Math.atan(dy / dx) * (180 / Math.PI);

  if (dx < 0) {
    result += 180;
  }
  return result + 90;
};
interface PlaygroundProps {}

const Playground: React.FC<PlaygroundProps> = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const fishRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const center: Coordinate = {
      x: boxRef.current!.getBoundingClientRect().x,
      y: boxRef.current!.getBoundingClientRect().y,
    };
    boxRef.current?.addEventListener("dragend", (e) => {
      let coord: Coordinate = {
        x: e.clientX - 30,
        y: e.clientY - 30,
      };
      boxRef.current!.style.top = coord.y + "px";
      boxRef.current!.style.left = coord.x + "px";
      rotateRef.current!.style.transform = `rotate(${getAngle(
        center,
        coord
      )}deg)`;
      setTimeout(() => {
        fishRef.current!.style.transform = `scaleY(${getDistance(
          center,
          coord
        )})`;
        setTimeout(() => {
          fishRef.current!.style.transform = "scaleY(1)";
          boxRef.current!.style.top = center.y + "px";
          boxRef.current!.style.left = center.x + "px";
        }, 1000);
      }, 1000);
    });
  });

  return (
    <Body>
      <Box ref={boxRef} draggable>
        <FishImg />
      </Box>
      <div ref={rotateRef}>
        🤗
        <Fishing ref={fishRef} />
      </div>
    </Body>
  );
};

export default Playground;
