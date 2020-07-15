import { IAction } from "../root.interface";
import { IGlobalDataState } from "./globalData.interface";
import { Types } from "./globalData.types";


const INITIAL_STATE: IGlobalDataState = {
    dataSummary:[],
    dataDaily:[],
    listCounty:[],
    isLoad:false,
}

export function globalDataReducer(state = INITIAL_STATE,action: IAction):IGlobalDataState {
  switch (action.type) {
    case Types.FETCH_START:
    case Types.FETCH_START_D:
    case Types.FETCH_COUNTRYLIST_START:
      return{
        ...state,
        isLoad:true
      }
    case Types.FETCH_SUCCESS:
      return {
        ...state,
        isLoad:false,
        dataSummary:action.payload
      }
    case Types.FETCH_SUCCESS_D:
      return{
        ...state,
        isLoad:false,
        dataDaily:action.payload
      }
    case Types.FETCH_COUNTRYLIST_SUCCESS:
      return{
        ...state,
        isLoad:false,
        listCounty:action.payload
      }
    case Types.FETCH_COUNTRYLIST_ERROR:
    case Types.FETCH_ERROR_D:
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
