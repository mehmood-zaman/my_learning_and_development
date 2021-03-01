const profile = {
  name: 'mehmood',
  age: 20,
  setAge: (age: number) => {
    this.age = age;
  },
  coords: {
    lat: 12,
    lng: 13,
  },
};

const { name, age }: { name: string; age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
