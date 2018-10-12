import { fork, take } from "redux-saga/effects";
import { PLUS, MINUS } from "./actions";

function* handleCountPlus() {
  while (true) {
    yield take(PLUS);
  }
}

function* handleCountMinus() {
  while (true) {
    yield take(MINUS);
  }
}

export default function* rootSaga() {
  yield fork(handleCountPlus);
  yield fork(handleCountMinus);
}
