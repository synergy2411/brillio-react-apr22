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

let age : string | number = "Thirty-Two";

age = 32;


// tuple type

let user : [string, number] = ["John Doe", 32];

user = ["", 34];

user = ["", 35];