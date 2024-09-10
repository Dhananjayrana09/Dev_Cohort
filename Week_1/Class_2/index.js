function getLengthOf (str) {
    console.log("original str: " + str);
    console.log("str length: " + str.length);
}

getLengthOf("Hello World");
// str.length(str)

function indexOfString (str, target) {
    console.log("original str: " + str);
    console.log("index of target: " + str.indexOf(target));
}
indexOfString("Hello World", "world");
// str.indexOf(target)

function sliceString (str, start, end) {
    console.log("original str: " + str);
    console.log("sliced str: " + str.slice(start, end));
}
sliceString("Hello World", 6, 11);
// str.slice(start, end)

function sliceLogic (str, start, end) {
    let newStr = ""
    for (let i = 0; i < str.length;  i++) {
        if ( i >= start && i < end) {
            newStr += str[i]
        }
    }
    return newStr;
}
let ans =  sliceLogic("Hello World", 0, 5);
console.log(ans);

// Replace String

function replaceString (str, target, replacement) {
    console.log("original str: " + str);
    console.log("replaced str: " + str.replace(target, replacement));
}
replaceString("Hello World", "World", "Universe");
// str.replace(target, replacement)

function replaceLogic (str, target, replacement) {
    let newStr = ""
    for (let i = 0; i < str.length;  i++) {
        if (str[i] === target) {
            newStr += replacement
        } else {
            newStr += str[i]
        }
    }
    return newStr;
}

let ans2 = replaceLogic("Hello World", "o", "a");
console.log(ans2);

// split function 

    function splitString (str, delimiter) {
        console.log("original str: " + str);
        console.log("splitted str: " + str.split(delimiter));
    }
    splitString("Hello, World", ", ");
    // str.split(delimiter)

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

// ***************************For Numbers***************************

// ParseInt

function explainParseInt(value) {
  console.log('Original Value:', value)
  let result = parseInt(value)
  console.log('After parseInt:', result)
}

// Example Usage for parseInt
explainParseInt('42')
explainParseInt('42px')
explainParseInt('3.14')
// so basically it is used to convert any string to number

// ParseFloat similarly work like the pardeInt but it is used to convert string to float

function explainParseFloat(value) {
  console.log('Original Value:', value)
  let result = parseFloat(value)
  console.log('After parseFloat:', result)
}

// Example Usage for parseFloat
explainParseFloat('3.14')
explainParseFloat('42')
explainParseFloat('42px')

// Arrays Handbook
// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

function pushExample(arr, element) {
    console.log("Original Array:", arr);
    arr.push(element);
    console.log("After Push:", arr);
}
pushExample([1, 2, 3, 4, 5], 6);
// push the element in the last place

function popExample(arr) {
    console.log("Original Array:", arr);
    arr.pop();
    console.log("After Pop:", arr);
}
popExample([1, 2, 3, 4, 5]);
// pop the last element of the array

function shiftExample(arr) {
    console.log("Original Array:", arr);
    arr.shift();
    console.log("After Shift:", arr);
}
shiftExample([1, 2, 3, 4, 5]);
// shift the first element of the array 

function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
    arr.unshift(element);
    console.log("After Unshift:", arr);
}
unshiftExample([1, 2, 3, 4, 5], 9);
// unshift the element in the first place

function spliceExample(arr, index, howMany,...elements) {
    console.log("Original Array:", arr);
    arr.splice(index, howMany,...elements);
    console.log("After Splice:", arr);
}
spliceExample([1, 2, 3, 4, 5], 2, 0, 6, 7, 8);
// splice the array from index to howMany and add the elements

function sliceExample(arr, start, end) {
    console.log("Original Array:", arr);
    console.log("Sliced Array:", arr.slice(start, end));
}
sliceExample([1, 2, 3, 4, 5], 1, 3);
// slice the array from start to end

function concatExample(arr1, arr2) {
    console.log("Original Array1:", arr1);
    console.log("Original Array2:", arr2);
    console.log("After Concat:", arr1.concat(arr2));
}
concatExample([1, 2, 3, 4, 5],[6, 7, 8, 9])
// concat the two arrays

function forEachExample(arr, callback) {
    console.log("Original Array:", arr);
    arr.forEach(callback);
    console.log("After forEach:", arr);
}

function callback(element) {
    console.log("hello i am " + element);
}

forEachExample([1, 2, 3, 4, 5], callback);

// Date Methods
function dateMethods() {
  const currentDate = new Date()
  console.log('Current Date:', currentDate)

  // Getting various components of the date
  console.log('Date:', currentDate.getDate())
  console.log('Month:', currentDate.getMonth() + 1) // Months are zero-indexed, so adding 1
  console.log('Year:', currentDate.getFullYear())
  console.log('Hours:', currentDate.getHours())
  console.log('Minutes:', currentDate.getMinutes())
  console.log('Seconds:', currentDate.getSeconds())

  // Setting components of the date
  currentDate.setFullYear(2022)
  console.log('After setFullYear:', currentDate)

  currentDate.setMonth(5) // Setting month to June (zero-indexed)
  console.log('After setMonth:', currentDate)

  // Getting and setting time in milliseconds since 1970
  console.log('Time in milliseconds since 1970:', currentDate.getTime())

  const newDate = new Date(2023, 8, 15) // Creating a new date
  console.log('New Date:', newDate)
}

// Example Usage for Date Methods
dateMethods()

// Math Methods

function mathMethods(value) {
  console.log('Original Value:', value)

  let rounded = Math.round(value)
  console.log('After round():', rounded)

  let ceiling = Math.ceil(value)
  console.log('After ceil():', ceiling)

  let flooring = Math.floor(value)
  console.log('After floor():', flooring)

  let randomValue = Math.random()
  console.log('After random():', randomValue)

  let maxValue = Math.max(5, 10, 15)
  console.log('After max():', maxValue)

  let minValue = Math.min(5, 10, 15)
  console.log('After min():', minValue)

  let powerOfTwo = Math.pow(value, 2)
  console.log('After pow():', powerOfTwo)

  let squareRoot = Math.sqrt(value)
  console.log('After sqrt():', squareRoot)
}

// Example Usage for Math Methods
mathMethods(4.56)
mathMethods(9)
mathMethods(25)

// object methods 

// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);