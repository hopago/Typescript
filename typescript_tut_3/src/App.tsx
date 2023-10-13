import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter";

import { useState } from 'react';
import List from "./components/List";

function App() {

  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="Hello" />
      <Section>This is my children</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["1", "2", "3"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App
