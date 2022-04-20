// Explicit Type
// let username : string = "John Doe";

// username = true;

// console.log(username);

// Implicit Type | Type inference
// let age = "";

// age = "";


// Various Types
// let age : number = 32;
// let isAdmin : boolean = true;
// let demo : Function = () => console.log("Function");
// let user : Object = {name : "john", age : 32};

// let friends : Array<string> = ["jack", "jill", "james"];

// let dob : Date = new Date("Dec 21, 1998");

// // enum
// enum userType {
//     ADMIN,
//     EMPLOYEE,
//     CUSTOMER
// }

// let john : userType = userType.ADMIN;
// let james : userType = userType.CUSTOMER;



// any

// let xyz : any = "String value";
// xyz = 101;
// xyz = true;
// xyz = {};
// xyz = [];

// unknown - assign after checking the unknown type

// let x : unknown = "alice";

// xyz = x;

// let str : string = "";
// if(typeof x === 'string'){
//     str = x;
// }

// let age : number = 32;
// if(typeof x === 'number'){
//     age = x;
// }



// union type

let age: string | number = "Thirty-Two";

age = 32;


// tuple type

let user: [string, number] = ["John Doe", 32];

user = ["", 34];

user = ["", 35];


let demo = (): void => {
    console.log("Void function")
}

let demoNever = (): never => {
    throw new Error("Something went wrong");
}

// Custom Type
type myType = string | number;
let address: myType = "Marathahalli";
address = 201;

// Structural Type - interface | classes

interface Animal {
    legs: number;
    species: string;
}

let bunny: Animal = {
    legs: 4,
    species: "Rabbit"
}

let kitty: Animal = {
    legs: 4,
    species: "Cat"
}

class Foo { }
class Bar { }

class Bam {
    constructor(foo: Foo, bar: Bar) { }
}
new Bam(new Foo(), new Bar());


interface CourseType {
    courseId : string;
    courseName : string;
    courseDuration : number;
}

// Classes
// class Course {

//     // private courseId : string;
//     // private courseName : string;
//     // private courseDuration : number;

//     // constructor(courseId : string, courseName : string, courseDuration : number){
//     //     this.courseId = courseId;
//     //     this.courseName = courseName;
//     //     this.courseDuration = courseDuration;
//     // }

//     // constructor injection
//     // constructor(
//     //     private courseId: string, 
//     //     private courseName: string, 
//     //     private courseDuration: number
//     //     ) { }

//     constructor(private course : CourseType){}

//     getCourseDetail(): string {
//         return `${this.course.courseId} - ${this.course.courseName} | ${this.course.courseDuration}`;
//     }

// }

// let reactObj : CourseType = {
//     courseId : "C103",
//     courseName : "Awesome React",
//     courseDuration : 60
// }

// // let react = new Course("C102", "Angular for Beginner", 40);
// let react = new Course(reactObj);
// console.log(react.getCourseDetail())



// inheritance
abstract class TekkenFighter{
    abstract fight() : string;
    
    move(){
        console.log("Fatality Kick")
    }
}

class Paul extends TekkenFighter {
    fight(): string {
        return "consumed 30% energy";
    }
    constructor(){
        super()
    }
}

let paul = new Paul();
paul.move()
console.log(paul.fight())