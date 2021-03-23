// Almost everything is Object in JS :P

// const s1 = "s1"

// s1 have bunch of methods eg: toUpperCase but how?
// console.log(s1.toUpperCase());

// Type will be String. But how it have bunch of methods like ** s1.toUpperCase() **??
// console.log(typeof s1);

// Let's understand the above!! < A bit hard to get :( >

// This is what JS doing behind the scene when i use:  ** s1.toUpperCase **
// const s2 = new String("s2")

// Now s2 has all the method so s1 has..
// console.log(s2.toUpperCase());

// Type will be Object because by default it actual object!
// console.log(typeof s2);

// Want to add car summary
const car1 = {
  color: "red",
  make: "honda",
  model: "civic",
  getSummary: function () {
    return `car color ${this.color}, model ${this.model}, maker ${this.make}`;
  },
};
console.log(car1.getSummary());

// Want to add another car summary
const car2 = {
  color: "yellow",
  make: "sportage",
  model: "kia",
  getSummary: function () {
    return `car color ${this.color}, model ${this.model}, maker ${this.make}`;
  },
};

console.log(car2.getSummary());
console.log(Object.keys(car1)); // get all keys of object as an array
console.log(Object.values(car2)); // get all values of object as an array

// There is a better way to add another car summary which is in: ** 02_constructor **
