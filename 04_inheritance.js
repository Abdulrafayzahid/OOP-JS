// Inheritance

function Car(color, make, model){
    this.color = color
    this.make = make
    this.model = model
}

Car.prototype.getSummary = function(){
    return `car color ${this.color}, model ${this.model}, maker ${this.make}`
}

// Inherit properties of Car
function Price(color, make, model, price){
    // this is how I can inherit the properties of Car
    Car.call(this,color, make, model)

    this.price = price
    // return `car color ${this.color}, model ${this.model}, maker ${this.make} and price is $${price}`
}

// Inherit prototype of Car
Price.prototype = Object.create(Car.prototype)

Price.prototype.getPrice = function(){
    return `car color ${this.color}, model ${this.model}, maker ${this.make} and price ${this.price}`
}

// Instantiate Price Object
const price1 = new Price('red','honda','civic','400k')

// Call Car prototype method from price1
console.log(price1.getSummary()); // output: car color red, model civic, maker honda

// output: car color red, model civic, maker honda and price 400k
console.log(price1.getPrice());

// There is another way to define Object and which is ** 05_object_create **
