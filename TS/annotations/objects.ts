let profile = {
    name:"Mehmood",
    age: 25,
    coords:{
        lat:20,lng:5
    },
    setAge(age:number){
        this.age = age;
    }
}

let {age}:{age:number} = profile;
let {coords:{lat,lng}}:{coords:{lat:number,lng:number}}=profile