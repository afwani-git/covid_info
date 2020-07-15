import { Types } from "./lokalData.types";
import { IAction } from "../root.interface";
import { ILocalData, ILocalDataByProv } from "./lokalData.interface";
//fetch lokal data

export const localDataFetchStart = ():IAction => ({
  type:Types.FETCH_START_TOTAL
});

export const localDataFetchSuccess = (data:ILocalData):IAction => ({
  type:Types.FETCH_SUCCESS_TOTAL,
  payload:data
});

export const localDataFetchError = (err: Error):IAction => ({
  type:Types.FETCH_ERROR_TOTAL,
  payload:err
});

//fetch lokal data by prov

export const localDataByProvFetchStart = ():IAction => ({
  type:Types.FETCH_START_PROV
});

export const localDataByProvFetchSuccess = (data: ILocalDataByProv[]):IAction => ({
  type:Types.FETCH_SUCCESS_PROV,
  payload:data
});

export const localDataByProvFetchError = (err: Error):IAction => ({
  type:Types.FETCH_ERROR_PROV,
  payload:err
});
