// primitive
let myName: string;
let pageNum: number;
let isLoading: boolean;

myName = 'string';
myName = 'Hopago';

pageNum = 1;

isLoading = false;



// function
function sum(a: number, b: number) {
    return a + b;
};
console.log(sum(pageNum, 2)); // 3

// union type
let changeable: string | number;
changeable = '1';
console.log(changeable); // '1';
changeable = 1;
console.log(changeable); // 1


let postId: string | number;
let isAdmin: number | boolean;

let regex: RegExp = /\w+/g;



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
let stringArray: string[] = [];
let snArray: (string | number)[] = [];
stringArray.push('String');
snArray.push('Number');
snArray.push(1);

// tuple
let arrTuple: [string, number, boolean] = ['String', 1, true];
let sameMixedArray = ['Hopago', 1, false];
// arrTuple = mixedData; sameMixedArray could be have fewer element... (string | number | boolean)



// obj
let firstObj: object;
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

// obj type constructor
type developer = {
    name?: String,
    active?: boolean,
    projects: (string | number)[];
};
let hopago: developer = {
    name: 'Hopago',
    active: false,
    projects: ['social', 5150]
};
let gbth: developer = {
    name: 'gbth',
    active: true,
    projects: []
};
hopago = gbth;
// hopago.birthday = 19990712 not work...

const helloToDev = (developer: developer) => {
    return `Hello, ${developer.name?.toUpperCase()}!`;
};
console.log(helloToDev(hopago));

interface Human {
    name: string,
    age: number,
    isHuman: boolean
};

let person:Human = {
    name: 'person',
    age: 25,
    isHuman: true
};
console.log(person.name.toLowerCase());



// enums
enum Grade {
    F = 50,
    D,
    C,
    B,
    A
}
console.log(Grade);



// type aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type hamster = {
    name?: string,
    active: boolean,
    speciesType: stringOrNumberArray
};
type UserId = stringOrNumber;



// literal types
let userName: 'houi_99' | 'hopago' | 'Hopago';
userName = 'Hopago';



// functions
const add = (a: number, b: number):number => {
    return a + b;
};

const logMsg = (message: any):void => {
    console.log(message);
};

logMsg('Typescript!');
logMsg(add(1, 2));

let subtract = function (c: number, d: number): number {
    return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));

interface interfaceMathFunction {
    (a: number, b: number): number
};

// optional params
const addTwoOrThreeParameterAsNumber = (a:number, b:number, c?:number):number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};

const sumAll = (a: number, b: number, c: number = 3): number => {
    return a + b + c;
};

const useUndefined = (a: number = 10, b: number) => {
    return a + b;
};

logMsg(addTwoOrThreeParameterAsNumber(1,2)); // 3
logMsg(addTwoOrThreeParameterAsNumber(1,2,3)); // 6
logMsg(sumAll(1,2)); // 6
logMsg(useUndefined(undefined, 10));

// rest params
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr);
}; // ...nums = ([...nums]) in pure js

logMsg(total(1,2,3,4,5,6,7,8,9,10));

const createError = (errMsg: string): never => {
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
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
      ? true
      : false
};

// break with never type function
const numberOrString = (value: number | string): string  => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createError('Could not happened...');
};

type One = string;
type Two = string | number;
type Three = 'hello'; // literal

// convert to more or less specific
let a: One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;
// typescript sees no problem...
let nextVal: number = addOrConcat(2, 2, 'concat') as number; // return string

// over rule typescript
(10 as unknown) as string | number;



// DOM
const img = document.querySelector('img')!;
const userImg = document.querySelector('#userImg')! as HTMLImageElement;
const postImg = document.getElementById('#postImg');

// img.src = "";
// userImg.src = "";

