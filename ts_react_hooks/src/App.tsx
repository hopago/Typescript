import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number,
  username: string
}

function App() {

  console.log("render...");

  // const [user, setUser] = useState<User>({} as User);

  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null!);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting...");

    console.log("Users: ", users);
    
    return () => console.log("unmounting...");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((prev) => prev + 2);
      console.log(e);
    },
    []
  );

  type fibFunc = (n: number) => number

  const fib: fibFunc = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  };

  const myNum: number = 29;

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <main>
      <section>
        <h1>{count}</h1>
        <button onClick={addTwo}>Add</button>
        <p>{result}</p>
        <input type="text" ref={inputRef} />
      </section>
    </main>
  );
}

export default App
