// Class Object

class Car{
    // properties
    constructor(color,make,model,condition,price){
        this.color = color
        this.make = make
        this.model = model
        this.condition = condition
        this.price = price
    }
    // methods
    getSummary = function(){
        return `car color ${this.color}, model ${this.model}, maker ${this.make}`
    }

    getCondition = function(){
        return `car condition is ${this.condition}`
    }

    // only for parent use
    static staticInClass = function(){
        console.log("Static In Class") 
    }
}

const car = new Car('yellow','kia','sportage',"new")

console.log(car.getSummary()); 

//car.consoleSum()  give the error because static only call directly
Car.staticInClass() // output: Static In Class
