import { style } from "./counterStyle";
import { increment, decremenet, reset } from "../redux/counterSlice";
import {type RootState, type AppDispatch } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import React from "react";


const Counter: React.FC = () => {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="absolute h-screen w-screen flex justify-center items-center bg-black/80">
      <div className="relative h-[80vh] w-[25vw] rounded-2xl bg-white shadow-sm flex flex-col justify-center">
        <p className={style.displayCounter}>Current Value {count}</p>
        <button className={style.button} onClick={() => dispatch(increment())}>Increment by 1</button>
        <button className={style.button} onClick={() => dispatch(decremenet())}>Decrement by 1</button>
        <button className={style.button} onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Counter