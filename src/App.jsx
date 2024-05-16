/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import GrassArea from "./components/GrassArea/GrassArea.jsx";
import "./App.css";
import {useRef} from "react";

const App = () => {
  const keyboardInputRef = useRef(null);

  return (
    <>
      <GrassArea></GrassArea>
      <input className="keyboardInput" autoFocus ref={keyboardInputRef}></input>
    </>
  );
};

export default App;
