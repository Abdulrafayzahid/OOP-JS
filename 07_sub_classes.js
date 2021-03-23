// Class Object

class Car{
    // properties
    constructor(color,make,model){
        this.color = color
        this.make = make
        this.model = model
    }
    // methods
    getSummary = function(){
        return `car color ${this.color}, model ${this.model}, maker ${this.make}`
    }
}

class Condition extends Car {
    constructor(color,make,model,condition){
        super(color,make,model)
        this.condition = condition
    }
    // methods
    getCondition = function(){
        return `car color ${this.color}, model ${this.model}, maker ${
        this.make} and condition is ${this.condition}`
    }
} 

const condition = new Condition('yellow','kia','sportage',"new")
console.log(condition.getCondition()); 