import { ILocalData } from "../redux/lokalData/lokalData.interface";

export const instanceOfA =  (obj: any):obj is ILocalData => {
  return "value" in obj;
}
