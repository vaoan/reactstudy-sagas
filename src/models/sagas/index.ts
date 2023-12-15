import { all } from "redux-saga/effects";
import { Saga } from "redux-saga";
import * as sagas from "./";

function* rootSaga() {
  const sagaList: Saga[] = Object.values(sagas);
  yield all(sagaList.map((saga) => saga()));
}

export default rootSaga;
