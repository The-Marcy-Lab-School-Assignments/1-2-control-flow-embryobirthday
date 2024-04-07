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

// measureRain(3);
// console.log(measureRain(0)); //test

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

// console.log(happyBirthdayPet("bird", 1)) //test

//I need to draw a diagram here because IDK where tf I went wrong
const funTypes = (jsType) => {

  // console.log(typeof jsType) //logs actual type!

  if (typeof jsType === 'string'){ //typeof will never empty string, it's still a string
    console.log("That's just some text.")
  } else if (Number.isNaN(jsType) === true) { //for some reason, NaN is counted as a number, and thus produces the "that's a good number" response. I have to check for NaN first before we get to a number condition.
    console.log("Well, now you're just showing off.")
  } else if (typeof jsType === 'number') {
    console.log("That's a good number.")
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?")
  } else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.")
  } else if (Array.isArray(jsType) === true) { //issue //
    console.log("I order you to be indexed.")
  } else if (jsType === null) { //issue //null is an obj that "claims emptiness," you're
    console.log("Nothing, and I did set that.")
  } else if (typeof jsType === 'object') {
    console.log("Anybody got the key?")
  } 
};

//specific condition goes before general, it's like creating a filter on a filter


// console.log(funTypes(true)) //test

//using the Math. methods to round up or down based on the string argument passed into roundSetting parameter 
const rounder = (float, roundingSetting) => {
  if (roundingSetting === "up") {
    return Math.ceil(float)
  } else if (roundingSetting === "down") {
    return Math.floor(float)
  } else if (roundingSetting === "honest") {
    return Math.round(float)
  } 
};

// console.log(rounder(4.3, "up")); //test


const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 !== 0) {
    console.log("fizz")
  } else if (num % 5 === 0 && num % 3 !== 0) {
    console.log("buzz")
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzBuzz!")
  } else {
    console.log(num)
  }
};

// console.log(fizzBuzzish(12)) //test

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
