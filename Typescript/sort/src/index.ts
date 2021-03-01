import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { LinkedList } from "./LinkedList";

// import { CharactersCollections } from "./CharactersCollections";
// const numbersCollection = new NumberCollection([32, 56, 33, 3, 2, 7, 1]);
// numbersCollection.sort();

// console.log(numbersCollection);
// // console.log(numbersCollection.data);

// const characterCollection = new CharactersCollections("Xaayb");

// const sorter = new Sorter(characterCollection);
// sorter.sort();

// console.log(characterCollection.data);

const linkedList = new LinkedList();

linkedList.sort();
linkedList.add(40);
linkedList.add(34);
linkedList.add(323);
linkedList.add(54);
linkedList.add(546);

linkedList.print();
