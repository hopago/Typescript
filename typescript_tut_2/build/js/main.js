"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Coder {
    constructor(name, lang, age, hobby = ['Coding']) {
        this.name = name;
        this.lang = lang;
        this.age = age;
        this.hobby = hobby;
        this.name = name;
        this.lang = lang,
            this.age = age,
            this.hobby = hobby;
    }
    getAge() {
        return `Hello, ${this.name}: ${this.age}`;
    }
}
const Hopago = new Coder('Hopago', 'Javascript', 25, []);
console.log(Hopago.getAge());
class WebDev extends Coder {
    constructor(computer, name, lang, age) {
        super(name, lang, age);
        this.computer = computer;
        this.computer = computer;
    }
    getHobby() {
        return `${this.hobby}`;
    }
}
const dopago = new WebDev('Asus', 'Dopago', 'Javascript', 27);
console.log(dopago);
console.log(dopago.getAge());
class Mario {
    constructor(name, performance) {
        this.name = name;
        this.performance = performance;
    }
    play(action) {
        return `${this.name} always ${action}`;
    }
}
const mario = new Mario('mario', 'jump');
console.log(mario.play('jumping'));
class Friend {
    static getCount() {
        return Friend.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Friend.count;
    }
}
Friend.count = 0;
const someone = new Friend('someone');
const somebody = new Friend('somebody');
const someoneElse = new Friend('someoneElse');
console.log(someoneElse.id); // 3
console.log(Friend.count); // 3
class Crew {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Is not string...');
    }
}
const myCrew = new Crew();
myCrew.data = ['Hopago', 'Dopago'];
console.log(myCrew.data);
myCrew.data = [...myCrew.data, 'CHJ'];
console.log(myCrew.data);
myCrew.data = [''];
console.log(myCrew.data);
const todaysTransactions = {
    Books: -5,
    Pizza: 0,
    Job: 5
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "hopago",
    GPA: 3.5,
    classes: [7, 21]
};
console.log(student.test);
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
console.log(logStudentKey(student, 'name'));
const monthlyIncomes = {
    salary: 100,
    bonus: 10,
    sideHustle: 200
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
// generic
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj({}));
console.log(isObj(null));
console.log(isObj([]));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Hopago' }));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("String");
console.log(store.state);
store.state = "String2";
const myState = new StateObject([15]);
myState.state = (['Hello', 42, true]);
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "com1",
    title: "First Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 80 }));
const assignGraded = updateAssignment(assign1, { grade: 80 });
// required & readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    Hopago: "A",
    Dopago: "B"
};
const gradeData = {
    Hopago: { assign1: 90, assign2: 85 },
    Dopago: { assign1: 80, assign2: 75 }
};
const score = {
    studentId: "id123",
    grade: 90
};
;
const preview = {
    studentId: "s123",
    title: "Final Project"
};
console.log(preview);
// return type
// type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
