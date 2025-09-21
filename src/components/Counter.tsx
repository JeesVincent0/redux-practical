import { counterStyle } from "./couter.style"
import { increment, decrement, reset } from "../redux/couterSlice";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";

const Counter = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={counterStyle.mainDiv}>
            <div className={counterStyle.innerDiv}>
                <p className={counterStyle.counterDisplay}>Count = {count}</p>
                <button onClick={() => dispatch(increment())} className={counterStyle.button}>Increment</button>
                <button onClick={() => dispatch(decrement())} className={counterStyle.button}>Decrement</button>
                <button onClick={() => dispatch(reset())} className={counterStyle.button}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
