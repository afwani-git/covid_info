import { combineReducers } from "redux";
import { globalDataReducer } from "./globalData/globalData.reducer";
import { lokalDataReducer } from "./lokalData/lokalData.reducer";
import { IRootStore } from "./root.interface";


const rootReducer = combineReducers<IRootStore>({
  globalData:globalDataReducer,
  lokalData:lokalDataReducer
})

export default rootReducer;
