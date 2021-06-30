interface Vehicle {
    summary(): string;
}

const oldCivic = {
    name:'civic',
    year:new Date(),

    broken:true,
    summary():string{
        return `Name: ${this.name}`
    }
}

const drink = {
    name:"cola",
    year:new Date(),
    summary():string{
        return `This is the summary`
    }
}

const printVehicle = (vehicle:Vehicle)=>{
   vehicle.summary();

}

printVehicle(drink)