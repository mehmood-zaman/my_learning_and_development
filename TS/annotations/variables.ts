//Primitive values
let a: number = 3;
let b: string = "Hi TS";
let c: boolean = false;
let d: Date = new Date();
let e: null = null;
let f: undefined = undefined;

//Arrays
let g: string[] = ["red", "green", "yellow"];
let h: number[] = [10, 20, 30];
let i: boolean[] = [false, true, true];

//Classes
class Car {}
let car: Car = new Car();

//Objects
let points: { x: number; y: number } = {
  x: 10,
  y: 10,
};

//Functions
let logNumbers: (i: number) => void = (i: number) => {};
