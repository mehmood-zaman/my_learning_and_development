import { User } from "./models/User";

const mehmood = new User({ id: 1 });
mehmood.set({ name: "Ali", age: 23 });
mehmood.save();
