import { configureStore } from "@reduxjs/toolkit";
import counterReduer from '../redux/counterSlice';
import { loggerMiddleware } from "./middleware/loggerMiddleware";

export const store = configureStore({
    reducer: { counter: counterReduer },
    middleware: (getMiddleware) => getMiddleware().concat(loggerMiddleware),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;