"use strict"; //it must be at the begiining of the code to write secure code and avoid accential error.

//ACTIVATING STRICT MODE
/*
"use strict";
let hasDriverLicense = false;
const passtest = true;


const interface = "hello";
const new = "hello";        //strict mode reserved the reserving word ,if we used reserving word as variable.. it give error
if (passtest) hasdricver = true; //in this line there is a bug(hasdricver not declared before) bt this error cant be highlighted during compile unless we use strict mode becoz we havent use strict mode,if we use strict mode then it will be highlighted.
if (hasDriverLicense) console.log("i can drive");
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION(also called method,is a reusable block of code that perform a specific function task)
/**/
//without parameter without return value
function logger() {
  console.log("my name is shreya");
}
logger(); //calling  /running /invoking the function    //my name is shreya

//with parameter with return value
function fruitprocesssor(apples, oranges) {
  console.log(apples, oranges); //1 5
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  console.log(juice); //juice with 1 apples and 5 oranges.
  return juice;
}

const applesjuice = fruitprocesssor(1, 5);
console.log(applesjuice); //juice with 1 apples and 5 oranges.

console.log(fruitprocesssor(93, 5)); //juice with 93 apples and 5 oranges.

const num = Number("98"); //another example
console.log(num); //98
/**/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION DECLARATION AND FUNCTION EXPRESSION
/**/
//Function Declaration(we can also call fuction before defining )
//here birthyear is parameter i.e placeholder

const age1 = claAge(2002); //here it is argument 2002
console.log(age1); //20

function claAge(birthyear) {
  return 2022 - birthyear;
}

//Function Expression(Cannot access/function call  before initialization)
//anoynomous function i.e function without name

const calAgee2 = function (birthyear) {
  return 2022 - birthyear;
};

const age2 = calAgee2(2000); //here it is argument 2002
console.log(age2); //22
console.log(age1, age2); //20 22

/**/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ARROW FUNCTION(shorthand to use function expression)
/**/
const calAge2 = function (birthyear) {
  return 2022 - birthyear;
};
//using arrow function
const calAge3 = (birthyear) => 2022 - birthyear;

const age3 = calAge3(2001);
console.log(age3); //21

const yearUntilRetirmnt = (bdayYear, name) => {
  const age = 2022 - bdayYear;
  const retirement = 75 - age;
  return `${name}  retires in ${retirement} years`;
};
console.log(yearUntilRetirmnt(2002, "shreya")); //shreya  retires in 55 years

console.log(yearUntilRetirmnt(2000, "Shreya Singh")); //Shreya Singh  retires in 53 years
/**/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION CALING OTHER FUNCTION
/**/
function cutPieces(fruit) {
  return fruit * 4;
}
function fruitprocessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);
  const fruits = `juice with ${apples} apples and ${oranges} oranges.`;
  const juice = `juice with ${applePieces} apples and ${orangesPieces} oranges.`;

  return juice + fruits;
}
console.log(fruitprocessor(3, 5)); //juice with 12 apples and 20 oranges.juice with 3 apples and 5 oranges.
/**/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
