// // Typescript Data Types - Definition and usage - TypeScript provides various data types to define the type of values that variables can hold. These data types include:
// // Primitive Data Types - number, string, boolean, null, undefined, symbol, BIGINT,
// // 1. Number: Represents numeric values, including integers and floating-point numbers.
// var num1:number = 67;
// var num1:number = 3.14
// var num1:number = 75657656.5343

// const num2:number = 3343;
// const num3:number = 3343;

// console.log("Hey this is a Number :  "+ num1);

// // 2. String: Represents textual data enclosed in single or double quotes.
// var str: string  = "Hello, TypeScript!";
// console.log("Hey This is a String : "+str);

// // // 3. Boolean: Represents a logical value that can be either true or false.
// var isTrue: boolean = true;
// var isTrue: boolean = false;
// console.log(isTrue);

// // // 4. Null: Represents the intentional absence of any object value. It is often used to indicate that a variable has no value.
// var nullValue: null = null;
// console.log(nullValue);

// // 5. Undefined: Represents a variable that has been declared but has not been assigned a value. It indicates the absence of a value.

// var x;
// console.log(x)

// // // 6. bIgInt: Represents large integers that cannot be represented by the number type. It is denoted by appending 'n' to the end of an integer literal.
// var bigIntValue: bigint = 44564646546n;
// console.log(bigIntValue);

// // 7. Symbol: Create a unique identifier

// var id:symbol = Symbol("id")

// const id1:symbol = Symbol("id")
// const id2:symbol = Symbol("id")



// Non Primitive Data Types - object, array, tuple, enum, any, void, never
// 1. Object: Represents a collection of key-value pairs. It can be used to store and organize data.

// const student = {

//     name: "Anbu",
//     age: 6,
//     DOB: '16 April'
// }


// console.log(student)
// console.log(student.age)




// // 2. Array - One dimentional Array

var nums:number[] = [10, 40, 56, 90]
var fruits:string[] = ["Apple", 'Orange', 'Banana']

var abc:any[] = ["Apple", 'Orange', false, undefined, null, 89]

//3. Function

// function greet():String{

//    return "Hello"

// }

// function student1():string{

//     return "name"

// }

// function addition(a:number, b:number):number{

//     return a*b;
// }

// console.log(addition(10,20))

// Tuples - A Tuple is a special type of array where the number of elements and their types are fixed

// var product1:[number, string, boolean] = [101, "iPhone", true]
// var product1:[number, string, boolean] = [101, "iPhone", true]
// var product1:[number, string, boolean] = [101, "iPhone", true]
// var product1:[number, string, boolean] = [101, "iPhone", true]
// var product1:[number, string, boolean] = [101, "iPhone", true]
// var product1:[number, string, boolean] = [101, "iPhone", true]

// Enum - An enum (Shor for enumeration), Is a way to define a set of named constants

// enum Direction {
//     up, down, right
// }

// var move: Direction = Direction.up;
// var move: Direction = Direction.right;
// console.log(move)

class person{



}

// Interface - An Interface defines the structure (Shape) of an Object. It specifies what properties and methodss an object should have 


// interface person{
//     name: string,
//     age: number,
//     det: any
// }


const Person ={
    name:"Person1",
    age : 30,
    det: true,



}


