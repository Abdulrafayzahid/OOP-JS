// Prototype

// A better way do define ** getSummary() ** we have in 02_constructor with Prototype 
function Car(color, make, model){
    this.color = color
    this.make = make
    this.model = model
    // this.getSummary = function(){
    //     return `car color ${this.color}, model ${this.model}, maker ${this.make}`
    // }
}

// Put getSummary in Object Prototype
Car.prototype.getSummary = function(){
    return `car color ${this.color}, model ${this.model}, maker ${this.make}`
}

// Now Put car condition in Constructor and getCondition in Object Prototype
Car.prototype.getCondition = function(condition){
    this.condition = condition
    return `car condition is ${this.condition}`
}

// Instantiate an Object
const car1 = new Car('red','honda','civic')
const car2 = new Car('yellow','kia','sportage')

// output: car color red, model civic, maker honda
// console.log(car1.getSummary()); 

// output: car color yellow, model sportage, maker kia
// console.log(car2.getSummary()); 

// output: car condition is new
console.log(car1.getCondition("new")); 

// car condition is slightly used
console.log(car2.getCondition("slightly used")); 


// Now if you see ** console.log(car1) ** getSummary() and getCondition() is not in property  
// as a function. And instead in prototype of Car. That is what 
// we want(color, make, model) for every Car but not getSummary and getCondition!! 
console.log(car1); 

