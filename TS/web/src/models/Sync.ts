import axios,{AxiosPromise} from 'axios';
import config from '../../config.json'
import {UserProps} from './User'
const baseURL = config.baseURL;

interface HasId{
  id?:number
}

export class Sync<T extends HasId>{

    fetch(id:number): AxiosPromise{
      return  axios.get(`${baseURL}/${id}`)
      }
      save(data:T): AxiosPromise{
        const {id} = data;
        if(id){
         return axios.put(`${baseURL}/${id}`,data)
    
        }else{
         return axios.post(baseURL,data)
        }
      }

}