class Vehicle {
  constructor(public color: string) {}
  honk(): void {
    console.log(this.color);
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }
  honk = (): void => {
    console.log("Child Class");
  };
}

const grandy = new Vehicle("green");
grandy.honk();
