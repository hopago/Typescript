import { ReactNode } from "react";
import { useCounter } from "./context/CounterContext";
import { useCounterText } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {

  const { count, increment, decrement } = useCounter();

  const { text, handleTextInput } = useCounterText();

  return (
    <section>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <input type="text" onChange={handleTextInput} />
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Counter;
