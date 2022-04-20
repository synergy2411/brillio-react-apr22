// Explicit Type
// let username : string = "John Doe";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var age = "Thirty-Two";
age = 32;
// tuple type
var user = ["John Doe", 32];
user = ["", 34];
user = ["", 35];
var demo = function () {
    console.log("Void function");
};
var demoNever = function () {
    throw new Error("Something went wrong");
};
var address = "Marathahalli";
address = 201;
var bunny = {
    legs: 4,
    species: "Rabbit"
};
var kitty = {
    legs: 4,
    species: "Cat"
};
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var Bar = /** @class */ (function () {
    function Bar() {
    }
    return Bar;
}());
var Bam = /** @class */ (function () {
    function Bam(foo, bar) {
    }
    return Bam;
}());
new Bam(new Foo(), new Bar());
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
var TekkenFighter = /** @class */ (function () {
    function TekkenFighter() {
    }
    TekkenFighter.prototype.move = function () {
        console.log("Fatality Kick");
    };
    return TekkenFighter;
}());
var Paul = /** @class */ (function (_super) {
    __extends(Paul, _super);
    function Paul() {
        return _super.call(this) || this;
    }
    Paul.prototype.fight = function () {
        return "consumed 30% energy";
    };
    return Paul;
}(TekkenFighter));
var paul = new Paul();
paul.move();
console.log(paul.fight());
