import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decremenet: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
});

export const { increment, decremenet, reset } = counterSlice.actions;

export default counterSlice.reducer;