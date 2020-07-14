import { call, put, all, takeEvery  } from "redux-saga/effects";
import { Types } from "./lokalData.types";
import { fetchDataLocalApi, fetchDataLocalByProvApi } from "../../module/client";
import {
  localDataFetchSuccess,
  localDataByProvFetchSuccess,
  localDataFetchError,
  localDataByProvFetchError
} from "./lokalData.actions";

//fetch lokal data (total)
export function* fetchDataLocal(){
  const { data, error } = yield call(fetchDataLocalApi);
  if(error){
    yield put(localDataFetchError(error));
  }else{
    yield put(localDataFetchSuccess(data));
  }
}

export function* onFetchLocalDataStart(){
  yield takeEvery(Types.FETCH_START_PROV,fetchDataLocal)
}

//fetch lokal data (byProv)

export function* fetchDataLocalByProv(){
  const { data, error } = yield call(fetchDataLocalByProvApi);
  if(error){
    yield put(localDataByProvFetchError(error));
  }else{
    yield put(localDataByProvFetchSuccess(data));
  }
}

export function* onFetchLocalDataByProvStart(){
    yield takeEvery(Types.FETCH_START_PROV,fetchDataLocalByProv);
}

export function* lokalDataSagas(){
  yield all([
    call(onFetchLocalDataStart),
    call(onFetchLocalDataByProvStart)
  ])
}
