// printing a message to the console
//console.log("Hi. My name is Kaia Baker");

// This will activate an alert box
//alert("THIS IS AN ALERT");

//////////////////// Variables / Types ////////////////////

/*
  What is a variable?
  a place to store data:
  string, integers (whole numebrs) & floats(decimal), boolean(true/false)
*/

//// defining variables
//// string: uses quotation marks to literally mark a string

// var firstName = "Lil";
// var lastName = "Yeet";
// var space = " ";
//
// //// concatinating variables
//
// console.log(firstName);
// console.log(firstName + " " + lastName); //option 1 for creating a space
// console.log(firstName, lastName); //option 2
// console.log(firstName + space + lastName); //option 3
// console.log(firstName + lastName);
//
// //// storing integers
//
 //var num1 = 5;
//
// //// storing floats
//
 //ar num2 = 5.4;
 //var num3 = 4;
 //console.log(num1 + num2 + num3);
//
// //// 55.44-concatination if we don't use parenthesis
// //// 59.4-math if parenthesis are added to num2 + num3
//
// /*
//   math:
//   addition +
//   subtraction -
//   multiply *
//   divide /
// */
//
// //////////////////// Arrays ////////////////////
//
// //// creating arrays
// //// what is an array? an array is a COLLECTION of items
//
// /*
//   NOTE:
//   Items in an array are referenced by their "index"
//   which starts at ZERO, not ONE.
// */
//
 //var firstArray = ["Lil", "Big", "DJ", "Dr.", "Dark", "Social"];
 //var secondArray = ["Yeet", "Xan", "Kitten", "Corona", "Zoom", "Distancing", "Nook"];
//
// //// Print entire array...
 //console.log(firstArray); //console log of the full array
 //console.log(secondArray);
//
// //// Print one item from the array...
 //console.log(firstArray[1]);
// console.log(secondArray[0]);
//DJ
//Dr. Distancing
//
// //////////////////// LOGIC with CONDITIONALS ////////////////////
//
// /*
//   Set up control flow with if/else statements
//   < or >
//   <= or >=
// */
//
// //// js accepts equality as == or ===. When you use === you are ensureing TRUE equality.
//


 //QUESTION #1
 //let num = 15;
 //if (num == 15){
 //   alert('You are correct! These two numbers are equal!');
 //} else{
 //   alert('Try Again.');
 //}


// QUESTION #2
 //let num = 14;
 // if (num == 15){
   //  alert('You are correct! These two numbers are equal!');
 // } else if (num > 15){
  //   alert('This number is greater than 15.');
 // } else{
  //   alert('Try Again.');
// }





// //////////////////// FUNCTIONS ////////////////////

// /*
//   There are many functions in JavaScript for modifying values, math, etc...
// */
//
// //// Random FLOAT from 0-1
 //console.log(Math.random());
//
// //// Random FLOAT from 0-50
// // console.log(Math.random() * 50);
//
// //// Random INTEGER from 0-length of an array, giving us an INDEX...
// var secondArray = ["Animal Crossing", "Zoom Party", "Toilet Paper", "Yoga", "Netflix Party", "Bops"];
// var randomIndex = Math.floor( Math.random() * secondArray.length );
 //console.log(randomIndex);
//
// //// Random item from array using our random index
// console.log(secondArray[randomIndex]);
//
//
// //////////////////// CUSTOM FUNCTIONS ////////////////////
//
// /*
//   to make a procedure, set of instructions that make things easier
//   compartamentalize setting up a small machine that performs a simple procedure
// */
//
// //// Setting it up
 //function sayHello() {
 //    console.log('I am successfully running my function!! Woohoo!');
 //}
//
// //// Calling the function
//
 //sayHello();
//
// //// Setting up a function with arguments / parameters
//



 //function addNumber(numberOne, numberTwo){
 //    console.log("Result: " + (numberOne + numberTwo));
 //}
// addNumber(40, 60);





// //// RETURNING values from a function



////QUESTION 3
 //function addNumberAndReturn(numberOne, numberTwo) {
   // console.log ("returning the function...") 
    //return numberOne + numberTwo;
 //}
 //console.log(addNumberAndReturn(400,200));






// //////////////////// LOGICAL OPERATORS ////////////////////
//
// /*
//   create a function that acts like a virtual door
//   if we call door #1, we will return Hall of Mirrors
//   if we call door #2, we will return Mummy Bathroom
//   if we call door #3, we will return Witchy Kitchen
// */
//
// //// function that contains an if/else statement
// //// test each of your doors by calling the function at least 3 times



//QUESTION 4
// function rainbow(num){
//   if (num == 1){
//     return "Flowers";
//   }
//   else if (num == 2){
//     return "Plants";
//   }
//   else if (num == 3){
//     return "Garden";
//   }
//   else {
//       return "There are only 3 options!";
//   }
// }
//
// console.log(door(1));
// console.log(door(2));
// console.log(door(3));
// console.log(door(5));