import { Action } from "redux";
import { IGlobalDataState } from "./globalData/globalData.interface"
import { ILocalDataState } from "./lokalData/lokalData.interface";

export interface IRootStore{
  globalData:IGlobalDataState,
  lokalData:ILocalDataState
}

export interface IAction extends Action{
  payload?:any
}
