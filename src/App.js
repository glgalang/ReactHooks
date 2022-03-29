import { useState } from "react";
import "./styles.css";

// word "use" + whatever so that react doesn't complain
const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return {
    count,
    increment,
    decrement
  };
};

function Counter(props) {
  const { count, increment, decrement } = useCounter(props.initialCount);
  return (
    <div className="counter">
      <h1>Counter {props.number}</h1>
      <h1>
        Count {props.number}: {count}
      </h1>
      <button onClick={increment}>Increment {props.number}</button>
      <button onClick={decrement}>Decrement {props.number}</button>
    </div>
  );
}

const CounterApp = () => {
  return (
    <div className="App">
      <Counter initialCount={0} number={1} />
      <Counter initialCount={100} number={2} />
      <Counter initialCount={6} number={3} />
    </div>
  );
};

export default CounterApp;
