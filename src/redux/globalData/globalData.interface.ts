export interface IglobalData{
  name:string;
  value:number
}

export interface IdataDialy{
      totalConfirmed: number,
      mainlandChina: number,
      otherLocations: number,
      deltaConfirmed: number,
      totalRecovered: number,
      confirmed: {
        total: number,
        china: number,
        outsideChina: number
      },
      deltaConfirmedDetail: {
        total: number,
        china: number,
        outsideChina: number
      },
      deaths: {
        total: number,
        china: number,
        outsideChina: number
      },
      recovered: {
        total: number,
        china: number,
        outsideChina: number
      },
      active: number,
      reportDate: string
}


export interface IGlobalDataState{
  dataSummary:IglobalData[],
  dataDaily:IdataDialy[],
  isLoad:boolean,
  error?:Error
}
