import { useReducer } from "react";

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
        <p className="h-10 w-[80%] flex justify-center items-center mx-auto bg-blue-500 mb-2 rounded-sm cursor-pointer hover:bg-blue-900 font-bold text-white">Current Value {state.count}</p>
        <button className="h-10 w-[80%] mx-auto bg-blue-500 mb-2 rounded-sm cursor-pointer hover:bg-blue-900 font-bold text-white" onClick={() => dispatch({ type: "incrementByValue", payload: 5 })}>increment by 5</button>
        <button className="h-10 w-[80%] mx-auto bg-blue-500 mb-2 rounded-sm cursor-pointer hover:bg-blue-900 font-bold text-white" onClick={() => dispatch({ type: "increment" })}>increment by 1</button>
        <button className="h-10 w-[80%] mx-auto bg-blue-500 mb-2 rounded-sm cursor-pointer hover:bg-blue-900 font-bold text-white" onClick={() => dispatch({ type: "decrement" })}>decrement by 1</button>
      </div>
    </div>
  )
}

export default Counter


