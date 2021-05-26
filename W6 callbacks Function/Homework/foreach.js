// This is a list of words
// let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// // TODO: implement this function to return a string containing all words in a paragraph.
// function createParagraph(words) {
//   let paragraph = '';

//   words.forEach((word) => {

//     paragraph += word + '  ';


//   });
  
//   return paragraph;
// }



// Prints paragraph to console
//console.log(createParagraph(words));

// don't change this line
// if (typeof module !== 'undefined') {
//   module.exports = createParagraph;
// }

// let seasons = ['summer','fall','winter','spring']
 
// function printSeason(season){
//     console.log(season);
// }
 
// seasons.forEach((season) => printSeason(season));
// expected result:
// "summer"
// "fall"
// "winter"

// var callMeBack = function() {
//     console.log("I'm a callback!");
// }
 
// setTimeout(callMeBack, 5000);

// This is the array that contains numbers for you to work with
var myArray = [1, 2, 5, 6, 12, 23, 15, 31];

// This array should only contain even numbers
var evenArray = [];

// This code will call your function when the page loads up
// Don't edit this function!


function filterArray(myArray, isEvenCallBack) {
  // TODO: use filterArray to determine if a number is even or odd.
  //If the number is even, add it to the array 'evenArray'

myArray.forEach( (number) => {
  if (isEvenCallBack(number)){ evenArray.push(number)}
});
  return evenArray;
}


// This function should return 'true' if a number is even and 'false' if a number is odd
function isEvenCallBack(number) {
  // TODO: use the mod operator (%) to determine if number is even or odd
  // if (number%2 === 0)return true;
  // else return false;
  return(number%2== 0) ? true : false ;
  }

  console.log(filterArray(myArray, isEvenCallBack));