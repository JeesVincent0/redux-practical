import { type Middleware} from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware = () => (next) => (action) => {
    if(action.payload === 5) {
        action.payload = 10;
    }
    next(action);
}