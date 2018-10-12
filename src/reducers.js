import { combineReducers } from "redux";
import { PLUS, MINUS } from "./actions";

const initial = {
  count: 0
};

function count(state = initial, { type, payload }) {
  switch (type) {
    case PLUS:
      return { ...state, count: state.count + 1 };
    case MINUS:
      return { ...state, count: state.count - 1 };
  }
  return state;
}

export default combineReducers({ count: count });
