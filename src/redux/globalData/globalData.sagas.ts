import { takeEvery, call, put, all } from "redux-saga/effects";
import { Types } from "./globalData.types";
import {
  fetchDataSuccess,
  fetchDataError,
  fetchDataSuccessD,
  fetchDataErrorD
} from "./globalData.actions";
import { fetchDataGlobalApi, fetchDataGlobalDailyApi } from "../../module/client";

export function*  fetchData(){
    const { result, error } = yield call(fetchDataGlobalApi);
    if(error){
      yield put(fetchDataError(error));
    }else{
      yield put(fetchDataSuccess(result));
    }
}

export function* fetchDataDaily(){
  const { data, error } = yield call(fetchDataGlobalDailyApi);
  if(error){
    yield put(fetchDataErrorD(error))
  }else{
    yield put(fetchDataSuccessD(data))
  }
}

export function* onFetchData(){
    yield takeEvery(Types.FETCH_START,fetchData);
}

export function* onFetchDataDaily(){
  yield takeEvery(Types.FETCH_START_D,fetchDataDaily)
}


export function* globalDataSagas(){
  yield all([
    call(onFetchData),
    call(onFetchDataDaily)
  ]);
}
