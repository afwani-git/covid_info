import { createSelector } from "reselect";
import { ILocalDataState } from "./lokalData.interface";

const localDataState = (state: ILocalDataState) => state;


export const selectDataProv = createSelector(
  [localDataState],
  state =>   state.localDataByProv
)

export const selectDataSummary = createSelector(
  [localDataState],
  state => state.locaLData
)
