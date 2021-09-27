class StoreString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class StoreNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class StoreAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const storeAnything = new StoreAnything<string>(["a"]);
