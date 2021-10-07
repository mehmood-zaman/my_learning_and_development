import { User } from "./models/User";
console.log("Hi there!");

const user = new User({ name: "Mehmood", age: 25 });

// user.set({name:"test"})

// console.log(user.get("name"));
// console.log(user.get("age"));

user.on("change", () => {})

console.log(user)