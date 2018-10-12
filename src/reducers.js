import { combineReducers } from "redux";
import { PLUS, MINUS } from "./actions";

const initial = {
  value: 0
};

function count(state = initial, { type }) {
  console.log(type);

  switch (type) {
    case PLUS:
      return { ...state, value: state.value + 1 };
    case MINUS:
      return { ...state, value: state.value - 1 };
  }
  return state;
}

export default combineReducers({ count });
