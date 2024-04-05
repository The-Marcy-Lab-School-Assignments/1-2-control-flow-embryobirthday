//
const measureRain = (inches) => {
  if (inches === 0) {
    console.log("drought")
  } else if (inches < 2) {
    console.log("dry")
  } else if (inches < 4) {
    console.log("average")
  } else if (inches < 6) {
    console.log("rainy")
  } else if (inches >= 6){
    console.log("flood")
  }
  return
};

console.log(measureRain(0));
//
const happyBirthdayPet = (breed, age) => {
  if (breed === "snake"){
    console.log("Hiss hiss!")
  } else if (breed === "cat" && age <= 4) { //checking if the cat's age is less than five!
    console.log("Mew mew!")
  } else if (breed === "cat" && age >= 5) { 
    console.log("Meow meow!")
  } else if (breed === "dog" && age < 5) {
    console.log('Arf arf!')
  } else if (breed === "dog" && age < 10 ) { //age is less than 10 would count every age below it if it weren't for the conditions set above
    console.log('Woof woof!')
  } else if (breed === "dog" && age >= 10) {
    console.log('Boof!')
  } else {
    console.log("Happy birthday!") //make sure everything is spelled exactly as the test's reference (what answer it's looking for)
  }
};

console.log(happyBirthdayPet("bird", 1))

const funTypes = (jsType) => {
  if (typeof jsType === "string") {
    console.log("That's just some text.")
  } else if (typeof jsType === null){
    console.log("Nothing, and I did set that." )
  } else if (Number.isNaN(jsType)){ //NaN needs to be before the number 
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === undefined){
    console.log("Nothing, but I didn't set that.")
  } else if (typeof jsType === "number"){
    console.log("That's a good number.")
  } else if (typeof jsType === "boolean"){
    console.log("To bool, or not to bool?")
  } else if (typeof jsType === "object"){
    console.log("Anybody got the key?")
  } else if (typeof jsType === "array"){
    console.log("I order you to be indexed.")
  } 
  return "what."
};

console.log(funTypes(undefined))

const rounder = () => {
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
