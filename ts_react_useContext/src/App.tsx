import Counter from "./Counter";
import { CounterContextProvider, initialState } from "./context/CounterContext";

function App() {
  return (
    <CounterContextProvider 
      count={initialState.count} 
      text={initialState.text}
    >
      <main>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </main>
    </CounterContextProvider>
  );
}

export default App
