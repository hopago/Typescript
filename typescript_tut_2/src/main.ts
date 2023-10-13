class Coder {

    secondLang!: string

    constructor(
        public readonly name: string,
        public lang: string,
        private age: number,
        protected hobby: string[] = ['Coding']
    ) {
        this.name = name
        this.lang = lang,
        this.age = age,
        this.hobby = hobby
    }

    public getAge() {
        return `Hello, ${this.name}: ${this.age}`;
    }
}

const Hopago = new Coder('Hopago', 'Javascript', 25, []);

console.log(Hopago.getAge());

class WebDev extends Coder {
    constructor (
        public computer: string,
        name: string,
        lang: string,
        age: number,
        ) {
            super(name, lang, age)
            this.computer = computer
        }

        public getHobby() {
            return `${this.hobby}`
        }
}

const dopago = new WebDev('Asus', 'Dopago', 'Javascript', 27);

console.log(dopago);
console.log(dopago.getAge());



interface Player {
    name: string,
    performance: string,
    play(action: string): string
}

class Mario implements Player {
    name: string
    performance: string

    constructor(name: string, performance: string) {
        this.name = name
        this.performance = performance
    }

    public play(action: string) {
        return `${this.name} always ${action}`
    }
}

const mario = new Mario('mario', 'jump');

console.log(mario.play('jumping'));



class Friend {
    static count: number = 0

    static getCount(): number {
        return Friend.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Friend.count
    }
}

const someone = new Friend('someone');
const somebody = new Friend('somebody');
const someoneElse = new Friend('someoneElse');

console.log(someoneElse.id); // 3
console.log(Friend.count); // 3



class Crew {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState;
    }
    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        } else throw new Error('Is not string...');
    }
}

const myCrew = new Crew();
myCrew.data = ['Hopago', 'Dopago'];
console.log(myCrew.data);
myCrew.data = [...myCrew.data, 'CHJ'];
console.log(myCrew.data);
myCrew.data = [''];
console.log(myCrew.data);



// index signatures
interface TransactionObj {
    readonly [index: string]: number
}

const todaysTransactions: TransactionObj = {
    Books: -5,
    Pizza: 0,
    Job: 5
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 50; occurred error by readonly [index:string]: number



interface Student {
    [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "hopago",
    GPA: 3.5,
    classes: [7, 21]
}

console.log(student.test);

for (let key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
});

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`${key}: ${student[key]}`);
};

console.log(logStudentKey(student, 'name'));

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sideHustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 100,
    bonus: 10,
    sideHustle: 200
};

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}



// generic
const stringEcho = (arg: string): string => arg;
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};

console.log(isObj({}));
console.log(isObj(null));
console.log(isObj([]));

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
};

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg }
};

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user;
};

console.log(processUser({ id: 1, name: 'Hopago' }));

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
};

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("String");
console.log(store.state);
store.state = "String2";

const myState = new StateObject<(string | number | boolean)[]>([15]);

myState.state = (['Hello', 42, true]);



// utility types

// partial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studentId: "com1",
    title: "First Project",
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 80 }));
const assignGraded:Assignment = updateAssignment(assign1, { grade: 80 });

// required & readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
};

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
};

recordAssignment({ ...assignGraded, verified: true });

// record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};

type Students = "Hopago" | "Dopago";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Students, LetterGrades> = {
    Hopago: "A",
    Dopago: "B"
};

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Hopago: { assign1: 90, assign2: 85 },
    Dopago: { assign1: 80, assign2: 75 }
};



// pick and omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "id123",
    grade: 90
};;

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "s123",
    title: "Final Project"
};

console.log(preview);

// exclude & extract
type adjustedGrade = Exclude<LetterGrades, "F">
type highGrade = Extract<LetterGrades, "A" | "B">

// nonnullable
type AllPossibleGrades = 'A' | 'B' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

// return type
// type newAssign = { title: string, points: number }
const createNewAssign = (title: string, points: number) => {
    return { title, points }
};

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("Utility Types", 100);


// parameter
type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);

// await - return type of promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) console.log(err.message);
    })
    return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users));