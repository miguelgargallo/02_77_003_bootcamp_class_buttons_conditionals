import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const WarningNotUse = () => {
  return <h1>Todavía no se ha usado el contador</h1>;
};

const App = () => {
  //  const [left, setLeft] = useState(10);
  //  const [right, setRight] = useState(20);

  const ListOfClicks = ({ clicks }) => {
    return <p>{clicks.join(", ")}</p>;
  };

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = (event) => {
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  const handleReset = () => {
    setClicks([]);
  };

  const left = clicks.filter((clicks) => clicks === "L");
  const right = clicks.filter((clicks) => clicks != "L");

  return (
    <div>
      {left.length}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {right.length}
      <p>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUse />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
