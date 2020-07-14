import { IAction } from "../root.interface";
import { IGlobalDataState } from "./globalData.interface";
import { Types } from "./globalData.types";


const INITIAL_STATE: IGlobalDataState = {
    globalData:[],
    isLoad:false,
}

export function globalDataReducer(state = INITIAL_STATE,action: IAction):IGlobalDataState {
  switch (action.type) {
    case Types.FETCH_START:
      return{
        ...state,
        isLoad:true
      }
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        isLoad:false,
        globalData:action.payload
      }
    case Types.FETCH_ERROR:
      return{
        ...state,
        isLoad:false,
        error:action.payload
      }
    default:
      return state;
  }
}
