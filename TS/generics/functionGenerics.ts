function printString(arr: string[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumber(arr: number[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnythings<T>(arr: T[]): void {
  for (let i: number = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnythings<number>([1,2,3,4,5,6,7,8,9])