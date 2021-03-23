//Object Create

const ObjectProtoTypes = {
    getSummary : function(){
        return `car color ${this.color}, model ${this.model}, maker ${this.make}`
    },
    getPrice : function(){
        return `car color ${this.color}, model ${this.model}, maker ${this.make} and price ${this.price}`
    }
}

const car1 = Object.create(ObjectProtoTypes)

// define Constructor
car1.color = "red"
car1.model = "alto"
car1.make = "suzuki"
car1.price = "100k"

// another way to define Constructor
const car2 = Object.create(ObjectProtoTypes,{
    color:{value:"red"},    
    model:{value:"civic"},    
    make:{value:"honda"},    
    price:{value:"400k"},    
})

// output: car color red, model alto, maker suzuki
console.log(car1.getSummary());

// output: car color red, model civic, maker honda and price 400k
console.log(car2.getPrice());

// There is a better way to define methods(prototype) and constructor with ** 06_classes ** 
// class Object although under the hood JS classes is doing same
// but  you provide a synthetic sugar of using classes 
// in other language like eg: java, c#