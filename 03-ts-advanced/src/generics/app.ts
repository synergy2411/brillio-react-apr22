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