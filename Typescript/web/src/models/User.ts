import axios, { AxiosResponse } from "axios";

interface dataProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  constructor(private data: dataProps) {}

  //Get data
  get(prop: string): string | number {
    return this.data[prop];
  }

  //Set Data
  set(props: dataProps): void {
    Object.assign(this.data, props);
  }

  //save Event

  //Fetch data from Server
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      });
  }

  //Save record
  save(): void {
    if (this.get("id")) {
      axios.put(`http://localhost:3000/users/${this.get("id")}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
