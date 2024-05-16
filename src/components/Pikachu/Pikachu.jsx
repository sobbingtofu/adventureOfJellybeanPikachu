import "./Pikachu.css";
import {useRef} from "react";

const Pikachu = () => {
  const pikaRef = useRef(null);

  const navigatePikachu = (e) => {
    if (e.key === "ArrowDown") {
      console.log("down");
    } else if (e.key === "ArrowUp") {
      console.log("up");
    } else if (e.key === "ArrowRight") {
      console.log("right");
    } else if (e.key === "ArrowLeft") {
      console.log("left");
    }
  };
  window.addEventListener("keydown", navigatePikachu);

  return <div className="Pikachu" ref={pikaRef}></div>;
};

export default Pikachu;
