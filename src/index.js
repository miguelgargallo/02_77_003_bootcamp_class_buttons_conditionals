import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  //  const [left, setLeft] = useState(10);
  //  const [right, setRight] = useState(20);

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    clicks: 0
  });

  const handleClickLeft = () => {
    const newCountersState = {
      left: counters.left + 1,
      right: counters.right,
      clicks: counters.clicks + 1
    };
    setCounters(newCountersState);
  };

  const handleClickRight = () => {
    setCounters({
      left: counters.left,
      right: counters.right + 1,
      clicks: counters.clicks + 1
    });
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {counters.right}
      <p>Clicks totales</p>
      <span>{counters.clicks}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
