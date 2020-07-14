import { all, call } from "redux-saga/effects";
import { globalDataSagas } from "./globalData/globalData.sagas";
import { lokalDataSagas } from "./lokalData/lokalData.sagas";

export function* rootSaga(){
    yield all([
      call(globalDataSagas),
      call(lokalDataSagas)
    ])
}
