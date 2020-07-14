import { takeEvery, call, put } from "redux-saga/effects";
import { Types } from "./globalData.types";
import {
  fetchDataSuccess,
  fetchDataError
} from "./globalData.actions";
import { fetchDataGlobalApi } from "../../module/client";

export function*  fetchData(){
    const { result, error } = yield call(fetchDataGlobalApi);
    if(error){
      yield put(fetchDataError(error));
    }else{
      yield put(fetchDataSuccess(result));
    }
}


export function* onFetchData(){
    yield takeEvery(Types.FETCH_START,fetchData);
}


export function* globalDataSagas(){
  yield call(onFetchData);
}
