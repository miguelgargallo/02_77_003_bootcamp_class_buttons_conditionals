import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const WarningNotUse = () => {
  return <h1>Todavía no se ha usado el contador</h1>;
};

const INITIAL_COUNTER_STATE = {
  left: 2,
  right: 4,
  mensaje: "Mensasasasd"
};

const App = () => {
  //  const [left, setLeft] = useState(10);
  //  const [right, setRight] = useState(20);

  const ListOfClicks = ({ clicks }) => {
    return <p>{clicks.join(", ")}</p>;
  };

  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);
  const [clicks, setClicks] = useState([]);
  const handleClickLeft = (event) => {
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

  const handleReset = () => {
    setCounters(INITIAL_COUNTER_STATE);
    setClicks([]);
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
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
