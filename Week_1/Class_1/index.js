console.log("Hello World");

// Data Types, Variables concept grasping and questions

// write a programe to greet a person given their first and last name 

let firstName = "John";
let lastName = "Dey";
console.log(`Hello ${firstName} ${lastName}`);

// write a programe to greet a person based on their gender

let gender = "FeMale";
if(gender == "Male") {
    console.log("Good Morning Sir");
}else {
    console.log("Good Morning Madam");
}

// write a programe that counts from 0-1000 and prints them

for (let i = 0; i <= 1000; i++) {
    console.log(i);
}

// Arrays, Object concept grasping and questions

// write a prograne to print alll the even numbers in an array

let numberArray = [2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = 0; i < numberArray.length; i++) {
    if(numberArray[i] % 2 == 0) {
        console.log(numberArray[i]);
    }
}

// write a programe to print all the biggest numbers in an array

let numberArray2 = [2, 3, 20, 25, 11, 13, 4, 55, 16]
let biggestNumber = numberArray2[0]
for (let i = 0; i < numberArray2.length; i++) {
    if(numberArray2[i] > biggestNumber) {
        biggestNumber = numberArray2[i];
    }
}
console.log(biggestNumber);


// write a programe to print all the male people firstname given a complex object

let people = [
    { firstName: "John", lastName: "Doe", gender: "Male" },
    { firstName: "Jane", lastName: "Smith", gender: "Female" },
    { firstName: "David", lastName: "Johnson", gender: "Male" },
    { firstName: "Sarah", lastName: "Williams", gender: "Female" }
];

for (let i = 0; i < people.length; i++) {
    if(people[i].gender == "Male") {
        console.log(people[i].firstName);
    }else {
        console.log("stree")
    }
}

// write a programe that reserved all the elements in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseArray(arr) {
  // Initialize two pointers, one at the start and one at the end of the array
  let start = 0
  let end = arr.length - 1

  // Loop to swap the elements from the start and end, moving towards the center
  while (start < end) {
    // Swap the elements
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    // Move the pointers towards the center
    start++
    end--
  }
  return arr
}

let reversedArray = reverseArray(array)
console.log(reversedArray)



// Function, Callbackfunctions concept grasping and questions

function sum(num1, num2, funcToCall) {
    let result = num1 + num2;
    funcToCall(result);
}

function displayResult (data) {
    console.log(`Result of the sum is ${data}`);
}

function displayResultPassive (data) {
    console.log(`Sum's result is ${data}`);
}

// you are only allowed to call the sum function here
// how will you displayResult of a sum

// solution:- So basically we have to use callback function here to do this 

    sum(5, 10, displayResult);

// A function passed in another function as an argument is called a callback function

// Another Example for better understanding

function calculateArithmetic (num1, num2, type) {
    if(type == "add") {
        return num1 + num2;
    }
    if(type == "subtract") {
        return num1 - num2;
    }
}

const ans = calculateArithmetic(5, 10, "subtract");
console.log(ans);

function calculateArithmetic (num1, num2, arithmeticFinalFunction) {
    const ans = function arithmeticFinalFunction(num1, num2);
    return ans;
}

function sum (num1, num2,) {
    return num1 + num2;
}

const value = calculateArithmetic (5, 10, "sum");
console.log(value);