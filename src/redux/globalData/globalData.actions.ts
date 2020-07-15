import {
  Types
} from "./globalData.types";

import {
  IglobalData,
  IdataDialy
} from "./globalData.interface";

export const fetchStart = () => ({
  type:Types.FETCH_START
})

export const fetchDataSuccess = (data: IglobalData[]) => ({
  type:Types.FETCH_SUCCESS,
  payload:data
})

export const fetchDataError = (data: Error) => ({
  type:Types.FETCH_ERROR,
  payload:data
})

export const fetchStartD = () => ({
  type:Types.FETCH_START_D
})

export const fetchDataSuccessD = (data: IdataDialy[]) => ({
  type:Types.FETCH_SUCCESS_D,
  payload:data
})

export const fetchDataErrorD = (data: Error) => ({
  type:Types.FETCH_ERROR_D,
  payload:data
})

export const countryListFetchStart = () => ({
  type:Types.FETCH_COUNTRYLIST_START
})

export const countryListFetchDataSuccess = (data: IdataDialy[]) => ({
  type:Types.FETCH_COUNTRYLIST_SUCCESS,
  payload:data
})

export const countryListFetchDataError = (data: Error) => ({
  type:Types.FETCH_COUNTRYLIST_ERROR,
  payload:data
})
