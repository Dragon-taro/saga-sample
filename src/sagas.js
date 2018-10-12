import { put, fork, take } from "redux-saga/effects";
import { PLUS, MINUS, increment, decrement } from "./actions";

function* handleCountPlus() {
  while (true) {
    yield take(PLUS);
    yield put(increment);
  }
}

function* handleCountMinus() {
  while (true) {
    yield take(MINUS);
    yield put(decrement);
  }
}

export default function* rootSaga() {
  yield fork(handleCountPlus);
  yield fork(handleCountMinus);
}
