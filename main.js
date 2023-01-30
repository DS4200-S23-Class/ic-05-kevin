/*
// print to console
console.log("hello world");

// constants
// -- cannot be reset later on
const myCourse = "DS4200";
console.log(myCourse);

// THIS WILL NOT WORK
// myCourse = "DS4300";

// variables

let season = "Winter"
console.log(season)

season = "Spring"
console.log(season)

// deprecated - do not use ever!
var x = 7;

// loosely typed language


function tenTimes(num) {
  let result = num * 10;
  return result;
}

let ans = tenTimes(6);
console.log(ans);
*/

//=========================================
let numClicks = 0;

function buttonClicked() {
  numClicks++;

  // new Text
  let buttonDiv = document.getElementById("buttondiv");

  buttonDiv.innerHTML = "Number of times button clicked: " + numClicks;
}
