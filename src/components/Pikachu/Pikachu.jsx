import "./Pikachu.css";
import {useRef} from "react";

const Pikachu = () => {
  const pikaRef = useRef(null);
  const pikaTranslateX = useRef(0);
  const pikaTranslateY = useRef(0);
  const pikaFaceDirection = useRef("left");

  const navigatePikachu = (e) => {
    console.log(e.key);
    if (pikaFaceDirection.current === "left") {
      if (e.key === "ArrowDown") {
        if (pikaTranslateY.current < 340) {
          pikaTranslateY.current += 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        }
      } else if (e.key === "ArrowUp") {
        if (pikaTranslateY.current > -380) {
          pikaTranslateY.current -= 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        }
      } else if (e.key === "ArrowRight") {
        pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        pikaFaceDirection.current = "right";
      } else if (e.key === "ArrowLeft") {
        if (pikaTranslateX.current > -380) {
          pikaTranslateX.current -= 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        }
      } else if (e.key === " ") {
        // 점프시키기
      }
    } else {
      if (e.key === "ArrowDown") {
        if (pikaTranslateY.current < 340) {
          pikaTranslateY.current += 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        }
      } else if (e.key === "ArrowUp") {
        if (pikaTranslateY.current > -380) {
          pikaTranslateY.current -= 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        }
      } else if (e.key === "ArrowRight") {
        if (pikaTranslateX.current < 340) {
          pikaTranslateX.current += 20;
          pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(-1)`;
        }
      } else if (e.key === "ArrowLeft") {
        pikaRef.current.style.transform = `translate(${pikaTranslateX.current}px, ${pikaTranslateY.current}px) scaleX(1)`;
        pikaFaceDirection.current = "left";
      } else if (e.key === " ") {
        // 점프시키기
      }
    }
  };

  window.addEventListener("keydown", navigatePikachu);

  return <div className="Pikachu" ref={pikaRef}></div>;
};

export default Pikachu;
