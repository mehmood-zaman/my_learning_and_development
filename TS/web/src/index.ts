import axios from 'axios';
import { User } from "./models/User";

console.log("Hi there!");

const user = new User({ id:1 });

user.set({name:"New Name",age:5555});

user.events.on("change",()=>{
    console.log("Change event");
})

user.events.trigger("change");
user.save()



