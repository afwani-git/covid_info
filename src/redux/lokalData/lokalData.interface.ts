export interface ILocalDataByProv{
	attributes:{
		FID: number,
		Kode_Provi: number,
		Provinsi: string,
		Kasus_Posi: number,
		Kasus_Semb: number,
		Kasus_Meni: number
	}
}

export interface ILocalData{
	name: string,
	positif: number,
	sembuh: number,
	meninggal: number
}


export interface ILocalDataState{
	localDataByProv:ILocalDataByProv[],
	locaLData:ILocalData[],
	isLoad:boolean,
	error?:Error
}
