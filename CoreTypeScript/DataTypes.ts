// Typescript Data Types - Definition and usage - TypeScript provides various data types to define the type of values that variables can hold. These data types include:
// Primitive Data Types - number, string, boolean, null, undefined, symbol, BIGINT,
// 1. Number: Represents numeric values, including integers and floating-point numbers.
var num: string = "42";
console.log(num);

// 2. String: Represents textual data enclosed in single or double quotes.
var str  = "Hello, TypeScript!";
var str: string = 'TRUE'; // This is also valid
console.log(str);

// 3. Boolean: Represents a logical value that can be either true or false.
var isTrue: boolean = true;
console.log(isTrue);

// 4. Null: Represents the intentional absence of any object value. It is often used to indicate that a variable has no value.
var nullValue: null = null;
console.log(nullValue);

// 5. Undefined: Represents a variable that has been declared but has not been assigned a value. It indicates the absence of a value.
var undefinedValue: undefined = undefined;
console.log(undefinedValue);

// 6. bIgInt: Represents large integers that cannot be represented by the number type. It is denoted by appending 'n' to the end of an integer literal.
var bigIntValue: bigint = 234654353363634643n;
console.log(bigIntValue);


// Non Primitive Data Types - object, array, tuple, enum, any, void, never
// 1. Object: Represents a collection of key-value pairs. It can be used to store and organize data.