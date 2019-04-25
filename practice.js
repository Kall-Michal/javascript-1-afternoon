//////////////////PROBLEM 1////////////////////

//Create a variable called myName that is a string data type

const myName = "Michal";


//////////////////PROBLEM 2////////////////////

//Create a variable called myAge that is a number data type

let myAge = 24;
//////////////////PROBLEM 3////////////////////

//Create a variable called lovesCode that is a boolean data type

const lovesCode = true;

//////////////////PROBLEM 4////////////////////

//Create a variable called greatestFear that is undefined because we fear nothing

const greatestFear;

//////////////////PROBLEM 5////////////////////

//Create a variable called devMountainGoal that is null because we are just starting out

const devMountainGoal = null;

//////////////////PROBLEM 6////////////////////

//Create a function declaration called greeting that
//accepts name as its only parameter.
//greeting should return the string "Hello, "
//plus the value of the name parameter.

function greeting(name) {
    console.log(`Hello, ${name}!!!`)
};

//////////////////PROBLEM 7////////////////////

//Rewrite the function greeting as a function expression.
//Name it newGreeting.

var newGreeting = function(name){
    return (`Hello, ${name}!!!`)
};

//////////////////PROBLEM 8////////////////////

//Create an array called groceries with the values
//"apples", "milk", "eggs", "bread"

var groceries = ["apples", "milk", "eggs", "bread",];

//////////////////PROBLEM 9////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy (a boolean).
//...access the dog's name from the object and assign it to a
//variable called devMountainClassPet.

let dog ={
    name: "Kai",
    color: "white",
    age: 9,
    isGoodBoy: true,
};

const devMountainClassPet = dog.name;


//////////////////PROBLEM 10////////////////////

//Write a function called nameCheck that takes in a name parameter.
//nameCheck should check if the name equals 'Steven'. If it does,
// return 'What is up Steven?'
//If the name parameter is Bryan, return 'Hey Bryan!'
// If the name parameter is anything else, return 'Cool name, NAMEPARAM'
// with NAMEPARAM being the name parameter being passed in

function nameCheck(NAMEPARAM){
    if(NAMEPARAM === "Steven".){
        console.log(`What's up ${NAMEPARAM}`)
    } else if(NAMEPARAM === "Bryan"){
        console.log(`Hey ${NAMEPARAM}.`)
    } else {
        console.log(`Cool name, NAMEPARAM`)
    }
};

//////////////////PROBLEM 11////////////////////

// Create a function called add that takes in two parameters
// that will be numbers.
// The add function should return the two parameters added together

function add(a, b){
    sum = a + b
    return sum
};


//Now invoke add, passing in the numbers 3 and 4
//storing the result in the variable mathSum.

let mathSum = add(3, 4);

//////////////////PROBLEM 12////////////////////

//Write a function called faveColorFinder that takes in one parameter called color
// that will be a string.
// If the passed in color equals 'red', return 'red is a great color'
// If the passed in color equals 'green', return 'green is a solid favorite color'
// If the passed in color equals 'black', return 'so trendy'
// Otherwise, you should return the string 'you need to evaluate your favorite color choice'

function faveColorFinder(color){
    switch(color) {
        case "red":
            return "red is a great color";
            break;
        case "green":
            return "green is a solid favorite color";
            break;
        case "black":
            return "SO TRENDY!";
            break;
        default:
            return "You need to evaluate your favorite color choice"
            break;
    }
};


//////////////////PROBLEM 13////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
//all within different scopes.
//Given the functions and variables above, edit the arrays
//below to contain only the appropriate variable names
//as strings.

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];


//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

//////////////////PROBLEM 14////////////////////

//Create a variable called age with your age assigned to you

// Code Here

// FLASH FORWARD TO NEXT YEAR
// reassign the value of age to be one greater than it was, because, we all get older

// Code Here

// Good news! We can live forever. Set your age to 999

// Code Here
