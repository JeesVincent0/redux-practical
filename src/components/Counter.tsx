import { counterStyle } from "./counterStyle";
import { increment, decremenet, reset } from "../redux/counterSlice";
import { type RootState, type AppDispatch } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import React from "react";


const Counter: React.FC = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={counterStyle.mainDiv}>
            <div className={counterStyle.innerDiv}>
                <p className={counterStyle.counterDisplay}>Redux-Practical</p>
                <p className={counterStyle.counterDisplay}>Current Value {count}</p>
                <button className={counterStyle.button} onClick={() => dispatch(increment())}>Increment by 1</button>
                <button className={counterStyle.button} onClick={() => dispatch(decremenet())}>Decrement by 1</button>
                <button className={counterStyle.button} onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}

export default Counter