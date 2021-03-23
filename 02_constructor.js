// Constructor

// A better way do define what we have in 01_basic_literals with Constructor
 function Car(color, make, model){
    this.color = color
    this.make = make
    this.model = model
    this.getSummary = function(){
        return `car color ${this.color}, model ${this.model}, maker ${this.make}`
    }
}

// Instantiate an Object
const car1 = new Car('red','honda','civic')
const car2 = new Car('yellow','kia','sportage')

console.log(car1.getSummary()); // output: car color red, model civic, maker honda
console.log(car2.getSummary()); // output: car color yellow, model sportage, maker kia


// if you see ** console.log(car1) ** getSummary() is also added in property as a function. And 
// it's a good example where we should use "03_prototype", instead of putting in constructor
console.log(car1); 

