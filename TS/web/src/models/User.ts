import axios,{AxiosResponse} from 'axios';
import {Eventing} from './Eventing'
import config from '../../config.json'
const baseURL = config.baseURL;
interface UserProps {
  id?:number;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }



  fetch(): void{
    axios.get(`/${this.get('id')}`).
    then((response:AxiosResponse):void => {
      this.set(response.data)
    })
  }
  save(): void{
    if(this.get('id')){
      axios.put(`${baseURL}/${this.get('id')}`,this.data)

    }else{
      axios.post(baseURL,this.data)
    }
  }
}
