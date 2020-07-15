import { ILocalDataState } from "./lokalData.interface";
import { IAction } from "../root.interface";
import { Types } from "./lokalData.types";
const INTIAL_STATE: ILocalDataState = {
  localDataByProv:[],
  locaLData:[{
    name:"",
    positif:0,
    sembuh:0,
    meninggal:0
  }],
  isLoad:false
}

export function lokalDataReducer(state = INTIAL_STATE,action: IAction): ILocalDataState{
  switch (action.type) {
    case Types.FETCH_START_PROV:
    case Types.FETCH_START_TOTAL:
      return{
        ...state,
        isLoad:true
      }
    case Types.FETCH_SUCCESS_PROV:
      return{
        ...state,
        isLoad:false,
        localDataByProv:action.payload
      }
    case Types.FETCH_SUCCESS_TOTAL:
      return{
        ...state,
        isLoad:false,
        locaLData:action.payload
      }
    case Types.FETCH_ERROR_PROV:
    case Types.FETCH_ERROR_TOTAL:
      return{
        ...state,
        error:action.payload
      }
    default:
      return state
  }
}
