// Typescript Variables - Definition and usage - Declariing a variable by givingg its name a type and assigning a value to it

// Core Typescript -  var , const 

// var a =10;
// console.log(a); Javascript allows us to declare a variable without specifying its type, and it will infer the type based on the assigned value. However, in TypeScript, we can explicitly declare the type of a variable to ensure type safety.

var a:number = 10;
var a:number = 30;
console.log(a);

// Const is used to declare a variable that cannot be reassigned after its initial assignment. It is a read-only variable. Once a value is assigned to a const variable, it cannot be changed.
const a1:number = 20;
const a2:number = 30; // This is allowed - different variable name
console.log(a1);
console.log(a2);



