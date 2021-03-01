class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  public startCar(): void {
    console.log('Starting Car...!');
  }

  stopCar(): void {
    console.log('Stopping Car');
  }
}

class Car extends Vehicle {
  constructor(public Modal: number) {
    super('');
  }
  startCarFunction(): void {
    this.startCar();
  }
  printModal(): void {
    console.log(this.Modal);
  }
}

const Toyota = new Car(2020);

Toyota.printModal();
