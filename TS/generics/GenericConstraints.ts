interface Printable {
  print(): void;
}

class Car {
  print() {
    console.log("My Car");
  }
}

class House {
  print() {
    console.log("My House");
  }
}

function printHouseAndCar<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseAndCar([new Car(), new House()]);
