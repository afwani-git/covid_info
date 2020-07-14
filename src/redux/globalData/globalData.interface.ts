export interface IglobalData{
  name:string;
  value:number
}

export interface IGlobalDataState{
  globalData:IglobalData[],
  isLoad:boolean,
  error?:Error
}
