import axios from "axios";

export async function fetchDataGlobalApi(){
  try {
    let result= [];
    let category: string[] = ["positif","sembuh","meninggal"]
    for(let params of category){
      const { data } = await axios.get(`https://api.kawalcorona.com/${params}`);
      result.push(data);
    }
    return { result };
  } catch (error) {
    return { error };
  }
}

export async function fetchListCountryApi(){
  try{
    const { data } = await axios.get("https://api.kawalcorona.com/");
    return { data };
  }catch(err){
    return { err };
  }
}


export async function fetchDataGlobalDailyApi(){
  try {
    const { data } = await axios.get("https://covid19.mathdro.id/api/daily/");
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function fetchDataLocalByProvApi(){
  try{
    const { data } = await axios.get("https://api.kawalcorona.com/indonesia/provinsi");
    return { data }
  }catch(error){
    return { error }
  }
}


export async function fetchDataLocalApi(){
  try{
    const { data } = await axios.get("https://api.kawalcorona.com/indonesia");
    return { data }
  }catch(error){
    return { error }
  }
}
