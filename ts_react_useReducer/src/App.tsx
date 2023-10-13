import {

} from "react";
import Counter2 from "./Counter2";

function App() {
  return (
    <main>
      <Counter2>{(num: number) => <>Current Count: {num}</>}</Counter2>
    </main>
  );
}

export default App
