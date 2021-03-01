interface Vehicle {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: false,
  summary() {
    return 'Hello';
  },
};

const showCar = (car: Vehicle): void => {
car.summary()
};

showCar(oldCivic);
