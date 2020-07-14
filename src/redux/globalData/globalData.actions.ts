import {
  Types
} from "./globalData.types";

import {
  IglobalData
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
