"use strict";
// primitive
let myName;
let pageNum;
let isLoading;
myName = 'string';
myName = 'Hopago';
pageNum = 1;
isLoading = false;
// function
function sum(a, b) {
    return a + b;
}
;
console.log(sum(pageNum, 2)); // 3
// union type
let changeable;
changeable = '1';
console.log(changeable); // '1';
changeable = 1;
console.log(changeable); // 1
let postId;
let isAdmin;
let regex = /\w+/g;
// array
let stringArr = ['one', 'two', 'three'];
let numStringArr = ['one', 2, 'three'];
let mixedData = ['one', true, 3];
stringArr[0] = 'zero';
stringArr.push('four');
numStringArr[0] = 1;
numStringArr[2] = 3;
numStringArr.unshift('something');
let anyArray = [];
let stringArray = [];
let snArray = [];
stringArray.push('String');
snArray.push('Number');
snArray.push(1);
// tuple
let arrTuple = ['String', 1, true];
let sameMixedArray = ['Hopago', 1, false];
// arrTuple = mixedData; sameMixedArray could be have fewer element... (string | number | boolean)
// obj
let firstObj;
firstObj = [];
console.log(typeof firstObj);
firstObj = numStringArr; // reusable
firstObj = {};
const exampleObj = {
    stringProperty: 'Hello',
    booleanProperty: true,
};
// exampleObj.prop2 = '2'; not work
exampleObj.stringProperty = 'String';
let hopago = {
    name: 'Hopago',
    active: false,
    projects: ['social', 5150]
};
let gbth = {
    name: 'gbth',
    active: true,
    projects: []
};
hopago = gbth;
// hopago.birthday = 19990712 not work...
const helloToDev = (developer) => {
    var _a;
    return `Hello, ${(_a = developer.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
console.log(helloToDev(hopago));
;
let person = {
    name: 'person',
    age: 25,
    isHuman: true
};
console.log(person.name.toLowerCase());
// enums
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 50] = "F";
    Grade[Grade["D"] = 51] = "D";
    Grade[Grade["C"] = 52] = "C";
    Grade[Grade["B"] = 53] = "B";
    Grade[Grade["A"] = 54] = "A";
})(Grade || (Grade = {}));
console.log(Grade);
// literal types
let userName;
userName = 'Hopago';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Typescript!');
logMsg(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
;
// optional params
const addTwoOrThreeParameterAsNumber = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 3) => {
    return a + b + c;
};
const useUndefined = (a = 10, b) => {
    return a + b;
};
logMsg(addTwoOrThreeParameterAsNumber(1, 2)); // 3
logMsg(addTwoOrThreeParameterAsNumber(1, 2, 3)); // 6
logMsg(sumAll(1, 2)); // 6
logMsg(useUndefined(undefined, 10));
// rest params
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
}; // ...nums = ([...nums]) in pure js
logMsg(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// handle return type: never
// const infinite = () => {
//     let i: number = 1;
//     while (true) {
//         i++
//         if (i > 100) break;
//     }
// };
// reusable type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true
        : false;
};
// break with never type function
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('Could not happened...');
};
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// typescript sees no problem...
let nextVal = addOrConcat(2, 2, 'concat'); // return string
// over rule typescript
10;
// DOM
const img = document.querySelector('img');
const userImg = document.querySelector('#userImg');
const postImg = document.getElementById('#postImg');
// img.src = "";
// userImg.src = "";
