import { createSelector } from "reselect";
import { IGlobalDataState } from "./globalData.interface";

const selectGlobalState = (state: IGlobalDataState) => state;

export const selectDataSummary = createSelector(
  [selectGlobalState],
  (selectGlobalState) =>  selectGlobalState.dataSummary
)

export const selectDataDaily = createSelector(
  [selectGlobalState],
  (selectGlobalState) => selectGlobalState.dataDaily
)

export const selectCountryList = createSelector(
  [selectGlobalState],
  (selectGlobalState) => selectGlobalState.listCounty
)

export const mappingData = createSelector(
  [selectDataDaily],
  (dataDaily) => ({
      totalConfirmedXChina:dataDaily.map(_dat => _dat.otherLocations),
      totalConfirmedInChina:dataDaily.map(_dat => _dat.mainlandChina),
      totalDeath:dataDaily.map(_dat => _dat.deaths.total),
      reportDate:dataDaily.map(_dat => _dat.reportDate)})
)
