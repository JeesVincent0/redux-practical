import { useReducer } from "react";
import { style } from "./counterStyle";

interface InitialState {
  count: number;
}

interface Action {
  type: string;
  payload?: number;
}

const InitialState: InitialState = {
  count: 0,
}

function reducer(state: InitialState, action: Action) {

  switch (action.type) {
    case "incrementByValue":
      if (action.payload) return { count: state.count + action.payload };
      return state;

    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:

      return state
  }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <div className="absolute h-screen w-screen flex justify-center items-center bg-black/80">
      <div className="relative h-[80vh] w-[25vw] rounded-2xl bg-white shadow-sm flex flex-col justify-center">
        <p className={style.displayCounter}>Current Value {state.count}</p>
        <button className={style.button} onClick={() => dispatch({ type: "incrementByValue", payload: 5 })}>increment by 5</button>
        <button className={style.button} onClick={() => dispatch({ type: "increment" })}>increment by 1</button>
        <button className={style.button} onClick={() => dispatch({ type: "decrement" })}>decrement by 1</button>
      </div>
    </div>
  )
}

export default Counter


