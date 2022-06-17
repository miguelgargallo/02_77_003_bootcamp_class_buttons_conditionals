import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const WarningNotUse = () => {
  return <h1>Todavía no se ha usado el contador</h1>;
};

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>;
};

const App = () => {
  //  const [left, setLeft] = useState(10);
  //  const [right, setRight] = useState(20);

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: "Mensaje en el estado"
  });
  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const newCountersState = {
      ...counters,
      left: counters.left + 1
    };

    setCounters(newCountersState);
    setClicks((prevClicks) => [...prevClicks, "L"]);
  };

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1
    });

    setClicks((prevClicks) => [...prevClicks, "R"]);
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
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
