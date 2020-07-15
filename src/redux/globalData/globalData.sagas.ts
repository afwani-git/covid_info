import { takeEvery, call, put, all } from "redux-saga/effects";
import { Types } from "./globalData.types";
import {
  fetchDataSuccess,
  fetchDataError,
  fetchDataSuccessD,
  fetchDataErrorD,
  countryListFetchDataSuccess,
  countryListFetchDataError
} from "./globalData.actions";
import { fetchDataGlobalApi, fetchDataGlobalDailyApi, fetchListCountryApi } from "../../module/client";

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


export function* fetchListCountry(){
  const { error,data } = yield call(fetchListCountryApi);
  if(error){
    yield put(countryListFetchDataError(error));
  }else{
    yield put(countryListFetchDataSuccess(data));
  }
}

export function* onFetchData(){
    yield takeEvery(Types.FETCH_START,fetchData);
}

export function* onFetchDataDaily(){
  yield takeEvery(Types.FETCH_START_D,fetchDataDaily)
}

export function* onFetchCountryList(){
  yield takeEvery(Types.FETCH_COUNTRYLIST_START,fetchListCountry);
}

export function* globalDataSagas(){
  yield all([
    call(onFetchData),
    call(onFetchDataDaily),
    call(onFetchCountryList)
  ]);
}
