// const addAtBeginning = <T>(val : T, arr : Array<T>) : Array<T> => {
//     return [val, ...arr]
// }

// const fruits = addAtBeginning<string>("apple", ["guava", "banana"])

// fruits.push()

// const numbers = addAtBeginning<number>(101, [102, 103, 104])

// numbers.push()



// const newArray = addAtBeginning("alice", ["John", "James", "Jenny"])

// console.log(newArray);

// addAtBeginning(101, [102,103,104]);



// Generic Classes

class Student <T, U> {
    private studId : T;
    private studAge : U;
    private studName : string;

    constructor(studId : T, studName : string, studAge : U){
        this.studId = studId
        this.studName = studName
        this.studAge = studAge
    }

    getDetails(){
        return `${this.studId} - ${this.studName} | Age : ${this.studAge}`
    }
}

let john = new Student<string, number>("S001", "John Doe", 23 )
console.log(john.getDetails());

let jenny = new Student<number, string>(101, "Jenny Doe", "Twenty-Two");
console.log(jenny.getDetails());


// Generic Interface

// interface Resource <T, U>{
//     resourceId : T;
//     resourceName : U;
// }

// let server : Resource<number, string> = {
//     resourceId : 101,
//     resourceName : "Server 1"
// }

// class ServerOne implements Resource<string, string>{
    
//     constructor(public resourceId: string, public resourceName: string ){}

    
// }


interface Post <T> {
    postId : T;
    title : string;
    body : string;
}

let myPost : Post<number> = {
    postId : 101,
    title : "Awesome Post",
    body : "..."
}

let secondPost : Post <string> = {
    postId : "P102",
    title : "",
    body  : ""
}



// Extending Generics

interface User <T extends {firstName : string, lastName : string}> {
    name : T;
    email : string;
}


let userOne : User <{firstName : string, lastName : string, middleName : string}> = {
    name : {
        firstName : "",
        lastName : "",
        middleName : ""
    },
    email : ""
}

let userTwo : User<{firstName : string, lastName : string}> = {
    name : {
        firstName : "",
        lastName : ""
    },
    email : ""
}



interface Car {
    make : string;
    model : string;
}

interface MyCar <T extends Car> {
    car : T
}

let myAwesomeCar : MyCar<{make : string, model : string, engineNumber : number}> = {
    car : {
        make : "Audi",
        model : "Q5",
        engineNumber : 87654324
    }

}