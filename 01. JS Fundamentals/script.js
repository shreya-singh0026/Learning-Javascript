/*
Javascript is a high level , object-oriented,multi-paradigm programming language. It is also a multi-paradigm language, meaning that it's so flexible and versatile, that we can use all kinds of different programming styles, such as imperative and declarative programming.
*/

//////////////////////////////////////////////////////////////////

//EXTERNAL.JS LINKING JS
/*
let js = "amaze";
if (js == "amaze") alert("javaScript is Fun!"); //alert appear
40 + 90 - 9;
console.log(40 + 190 - 9); //to print anything on console. console.log("Shreya");//221
console.log(16); //16
let firstName = "Shreya Singh";
console.log(firstName); //Shreya Singh
*/

//////////////////////////////////////////////////////////////////

//VARIABLE NAME CONVENTIONS  VALUE AND VARIABLE-->camelCase
// variable names can only contain number,letters, underscores, or the dollar assign.no reserved keyword used
//starting can be {$,a-z,_} {A_Z -->used only in oops nameing}
//in between ,it can be {A_Z,a-z,1-9,_}

/*
let _functi$on = 230;
console.log(_functi$on);  //230
let PI = 3.1415; //real constant variable use uppercase.

let myFirstJob = "student"; //prefer this
let mySecondJob = "programmer";

let Job1 = "student"; //not this
let Job2 = "Programmer";
*/

///////////////////////////////////////////////////////////////////

//DATA TYPES
//7 primitive data types-->Number(Floating Point Number),String,Boolean,null,symbol,undefined,bigInt

/*
let javascript = true;
console.log(javascript); //true
console.log(typeof javascript); //typeof identify the type of data type  //boolean

javascript = "Yes";
console.log(javascript); //yes
console.log(typeof javascript); //typeof identify the type of data type   //string

console.log(typeof true); //boolean
console.log(typeof 23); //number
console.log(typeof "true"); //string

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 2022;
console.log(typeof year); //number
console.log(typeof null); //bug in js   //object
console.log(typeof NaN); //number
console.log(null == null); //true
console.log(NaN == NaN); //false , never returns true when compared with other values using the equality operator even with itself.
*/

//Dynamic programic means no need to define the datatype of the value stored in a variable..It is determined automatically

/////////////////////////////////////////////////////////////////////

//LET, VAR,CONST
//var(old way)-->redeclare,reassign--> hoisted with a default initialization (initialization after printing--undefined)
//let(ECMA-6)-->reassign only---> hoisted without a default initialization (initialization after printing--ReferenceError)
//const(ECMA-6)-->always constant---> hoisted without a default initialization (initialization after printing--ReferenceError)

/*
let age = 20; //let can only be reassign not redeclare
console.log(age); //20
age = 22; //reassign
console.log(age); //22

//always use const
const bdayYear = 2002; //const neither reassign not redeclare
//bdayYear =2000; //cant reassign ,gives error
console.log(bdayYear); //2002

var job = "coder";
console.log(job); //coder
job = "student";
console.log(job); //student
var job = "programmer";
console.log(job); //programmer

lastName = "singh"; //global
console.log(lastName); //singh;

console.log(v); //refernce error
const v = "sd";

console.log(c); //undefined
var c = "sd";
*/

/////////////////////////////////////////////////////////////////////////

//BASIC OPERATOR

/*
//arithmetic operator +,-,/,*,**,++,--
const n = 200;
const anni = n - 30;
const boby = n + 30;
console.log(anni, boby); //170 230
console.log(anni * 2, boby / 10); //340 23
//2**3==2*2*2
const fn = "shreya";
const ln = "singh";
console.log(fn + "  " + ln); //shreya  singh

//assignmnt operator
let x = 10 + 5; //15
x += 10; //x=15+10=25
x *= 4; //25*4=100
x++; //101
++x; //102
x--; //101
console.log(x); //101

//comparison operator >,>=,<,<=,==,!=
console.log(anni > boby); //f
console.log(anni < boby); //t
console.log(anni != boby); ///t
const isFullAge = anni >= 18;
console.log(isFullAge); //t
console.log(n - 2007 < n - 2012); //f
*/

//follow MDN for operator precedence

///////////////////////////////////////////////////////////////////////////////

//STRING AND TEMPLATES LITERALS-- A template string is defined by wrapping a sequence of characters into a pair of backticks `I'm template string` .

/*
const fn = "shreya";
const job = "CODER";
const bdyear = 2002;
const year = 2022;
const name =
  "I'am " + fn + " " + "a " + (year - bdyear) + " year old " + job + " ! ";
console.log(name); //I'am shreya a 20 year old CODER !

const mame = `I'am ${fn}, a ${year - bdyear} year old ${job} .`; //template string
console.log(mame); //I'am shreya, a 20 year old CODER .

console.log(
  "string with \n\
multiple\n\
lines"
);

console.log(`string with
multiple
lines`);

//string with 
//multiple
//lines

*/
//////////////////////////////////////////////////////////////////////

//IF ELSE STATEMENT
/*
const age = 10;
if (age > 18) {
  console.log("he is older than 18");
} else {
  const year = 18 - age;
  console.log(`he is too young ${year}`); //he is too young 8
}

const bdyear = 2002;
let century;
if (bdyear >= 2029) {
  century = 2022;
} else {
  century = 2007;
}
console.log(century); //2007
*/

///////////////////////////////////////////////////////////////////////////
//TYPE CONVERSION AND COERCION
//type conversion/Explicit-->manually converted from one type to another

/*
const yr = "9000";
console.log(Number(yr), yr); //convert string to number  //9000 '9000'
console.log(yr + 19); //900019

console.log(Number("shreya")); //NaN
console.log(typeof NaN); //NaN--invalid number //number

console.log(String(123)); //123

console.log(typeof String(123)); //string

//type coercion/Implicit-->automatically by the javascript converted from one type to another
console.log(" I am " + 23 + " year old"); // I am 23 year old
console.log("23" - "10" - "3"); //here -,*,/ converted to number  //10
console.log("23" + "10" + "3"); //here + converted into string // 23103

let n = "1" + 1;
n = n - 1;
console.log(n); //10

console.log(2 + 3 + 4 + "5"); //95
console.log("10" - "4" - "3" - 2 + "5"); //15
console.log(2 + 3 + 4 - "5"); //4
console.log("2" * 3); //6
console.log("102" / 3); //34
*/

////////////////////////////////////////////////////////////////////////////////

//TRUTHY AND FALSY
//5 FALSY VALUES:-0," ",undefined,null,NaN-->always give false

/*
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean("john")); //true
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false

const money = 0;
if (money) {
  //o is a falsy value so else get executed
  console.log("dont spend at all");
} else {
  console.log("get a job"); //get a job
}

const moy = 100;
if (moy) {
  console.log("dont spend at all"); //dont spend at all
} else {
  console.log("get a job");
}

let monney;
if (monney) {
  //undefined is a falsy value so else get executed
  console.log("dont spend at all");
} else {
  console.log("money is undefined"); //money is undefined
}
*/

///////////////////////////////////////////////////////////////////

//EQUALITY == OR === OPERATOR

//== follow type corcion ,we noticed that it converts both the operands to the common data type except null and undefined and then performs the equality comparison,
//=== dont follow type coercion

/*
const age = "18";
if (age === 18) console.log("you got output if it is strict1"); //not run
if (age == 18) console.log("you got output if it is loose1"); //this will run

const agee = 18;
if (agee === 18) console.log("you got output if it is strict2"); //true
if (agee == 18) console.log("you got output if it is loose2"); //true

const favourites = prompt("Whats your favourite number ? ");
console.log(favourites); //16
console.log(typeof favourites); //string
if (favourites == 16) console.log("loosely type  becoz  favourite is string"); //true
if (favourites === 16)
  console.log(
    "strictly type becoz favourite is string so it doesnot give output"
  );

const favourite = Number(prompt("Whats your favourite number ? "));
console.log(favourite); //16
console.log(typeof favourite); //number
if (favourite == 16) console.log("loosely type  becoz  favourite is string"); //true
if (favourite === 16)
  console.log(
    "strictly type becoz favourite is string so it doesnot give output"
  ); //true

  */

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//LOGICAL LOGIC  AND , OR NOT

/*
const hasDriverlicense = true;
const hasGoodVision = true;
console.log(hasDriverlicense && hasGoodVision);   //true
console.log(hasDriverlicense || hasGoodVision);  //true
console.log(!hasDriverlicense && hasGoodVision);   //false
console.log(!hasDriverlicense);  //false
console.log(hasDriverlicense && !hasGoodVision);   //false

if (hasDriverlicense && hasGoodVision) {
  console.log("Sarah is able to drive");  //true
} else {
  console.log("someone else should drive");
}
const isTired = false;
console.log(hasDriverlicense && isTired && hasGoodVision);  //false
*/

/////////////////////////////////////////////////////////////////////////////////////////////////

//SWITCH OPERATION
/*

const day = "Friday";
switch (day) {
  case "Monday":
    console.log("PlanCourse Structure");
    console.log("go to cooding meetup");
    break;
  case "Tuesday":
    console.log("prepare theory video");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code");
    break;
  case "Friday":
    console.log("DataCourse Structure");  //DataCourse Structure
    break;
  case "Saturday":
  case "Sunday":
    console.log("prepare video lectures");
    break;
  default:
    console.log("Not a valid day");
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////////

//Expression produces values and Statement are like Full Statements
//Expression:-   3+4 ;   true&&false ; 1234;
//Statement:- const str = "23 is a bigger ";

//TERNARY OPERATOR
/*
const age = 18;
const drink = age >= 18 ? "wine" : "water";
console.log(drink); //wine

console.log(`I like to drink ${age >= 20 ? "wine" : "water"} `); //I like to drink water

*/
