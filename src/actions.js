import { createAction } from "redux-actions";

export const PLUS = "PLUS";
export const MINUS = "MINUS";

export const increment = createAction(PLUS);
export const decrement = createAction(MINUS);
