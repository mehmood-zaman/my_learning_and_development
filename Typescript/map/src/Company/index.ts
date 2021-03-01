import faker from "faker";
export class Company {
  catchPhrase: String;
  companyName: String;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.catchPhrase = faker.company.catchPhrase();
    this.companyName = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
