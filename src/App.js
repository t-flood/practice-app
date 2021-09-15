import "./App.css";
import { useState } from "react";
import Name from "./Components/name";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  const handleClick = () => {
    if (color === "black") {
      setColor("red");
    } else {
      setColor("black");
    }
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h2 style={{ color }}>Hi!</h2>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={handleClick}>Change color of welcome to red</button>
        <Name />
      </div>
    </>
  );
};

export default App;
