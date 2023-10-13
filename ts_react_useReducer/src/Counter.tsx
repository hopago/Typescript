import { ReactNode, useReducer } from "react";

const initialState = {
  count: 0,
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
};

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });

  return (
    <section>
      <h1>{children(state.count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </section>
  );
};

export default Counter;
