import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("navy");

  useEffect(() => {
    document.body.style.background = color;
    document.body.style.color = "white";

    window.addEventListener("keydown", handleEnterButton);
    return () => {
      window.removeEventListener("keydown", handleEnterButton);
    };
  }, [color]);

  function changeColor() {
    setColor("gold");
  }

  function handleEnterButton(event) {
    if (event.keyCode === 13) {
      setColor("red");
    }
  }
  return (
    <div className="App">
      <h2>Learning a new language called </h2>

      <p>I have been learning it for years now</p>
      <button onClick={changeColor}>change</button>
    </div>
  );
}

export default App;
