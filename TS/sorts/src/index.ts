import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([0, 3, -3, 5]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection("Xaayb");
// const sorter = new Sorter(charactersCollection);

// sorter.sort();

// console.log(charactersCollection.data);

const linkList = new LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);
linkList.add(0);

const sorter = new Sorter(linkList);

sorter.sort();

linkList.print();
