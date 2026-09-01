import "./styles.css";
import { useState } from "react";
import useCustomMemo from "./hooks/use-custom-memo";
export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);
  const squaredValue = () => {
    //if (counter1 === 0) return 0;
    console.log("Expensive calculation...");
    return counter1 * counter1;
  };
  const memoiseSquaredVal = useCustomMemo(squaredValue, [counter1]);
  return (
    <div className="App">
      <h2>Counter: {counter1}</h2>
      <h2>Squared Counter: {memoiseSquaredVal}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment</button>
      <h2>Counter2: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}
