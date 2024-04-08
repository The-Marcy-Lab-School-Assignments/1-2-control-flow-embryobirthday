//question 1
//good forum post about this https://forum.freecodecamp.org/t/i-dont-get-the-range-concept-math-random-max-min-1-min/170630/4
// really good visualization for this post https://forum.freecodecamp.org/t/i-dont-get-the-range-concept-math-random-max-min-1-min/170630/6
const getRandomIntInRange = (min, max) => {
console.log(min) //comment out when done, just checking
  if (min > max) throw new Error('min must be less than max');
  return Math.floor(Math.random() * (max - min) + min);
};

//when the max number is the number range we want, this is equal to (10 - 0) +1
//(max - min) becomes the amount of numbers we want, + min becomes starting point
// console.log(getRandomIntInRange(5, 9)) //test

//question 2
//Just needed to flip the sign.
const coolnessGauge = (numOfFridges) => {
  return numOfFridges < 4 ? 'You need more fridges.' : 'You are downright chilly!';
};

// console.log(coolnessGauge(9)) //test

//question 3
//had to make the conditions way more strict, the conditions were repeatedly making any funkopop number more than
//the supposed restriction a problem instead of printing their respective numbers. If their numbers are less than 
//or **equal to** their restriction, they'd then fall into the right category. Had to look at the tests to 
//determine what number would need to be exceeded to go into "you need an intervention" territory.
const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops <= 10) { 
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops <= 20) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops <= 30) { //the number was thirty btw ^^
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

// funkoPopAddictionLevel(31); //test

//question 4
//Had to move the return weather report and "And that's your report" into the insides of the conditionals rather than out.
// I had to rearrange the order of the conditionals as well, stricter conditionals (meaning it descends small to big integers)
const getWeatherReport = (temperature) => {
 if (temperature <= 31) {
  let weatherReport = "Wow, it's cold out.";
  console.log(weatherReport);
  console.log("And that's your report!");
  return weatherReport;
} else if (temperature <= 70) {
  let weatherReport = "It's not too bad!";
  console.log(weatherReport);
  console.log("And that's your report!");
  return weatherReport;
} else if (temperature <= 90) {
  let weatherReport = "At least it's a dry heat.";
  console.log(weatherReport);
  console.log("And that's your report!");
  return weatherReport;
} else if (temperature > 90) {
 let weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
    console.log("And that's your report!");
    return weatherReport;
}
};

getWeatherReport(100)


//question 5
const returnPositiveNegativeZero = (num) => {
  return num > 0 ? "Positive" 
  : num < 0 ? "Negative"
  : "Zero"
};

console.log(returnPositiveNegativeZero(-9))
//file exports to the tests
module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
