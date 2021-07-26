import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([0, 3, -3, 5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
