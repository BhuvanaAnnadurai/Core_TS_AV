// Types Of Operaters - Arithmetic Operator, Assignmenet Operators, Comperison Operators, Logical Operator, Increment/Decrment Operator, Ternery Operators, Type Operator, 

// 1. Arithmetic Operator - Addition , Subraction, Mutiplication, Division, Mosules, Exponentials

// var a:number = 10;
// var b:number = 30;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

//2. Assignment Operator 

// var x:number = 10;
// // var x = x+5;///
// x += 5 ;//addition assignment Operator - x=x+5
// console.log(x)
// x -=3 ; // Subtraction Assignment Operator
// console.log(x)

// Mutiplication Assignment Operator
// Division Assignment Operator
// Remainder Assignment Operator %
// Exponential Assignment Operator **
// Left shift Assignment Operator
// Right Shift Assignment Operator
// UnAssigned Right Shift Assignment Operator
// Bitwise AND Assignment Operator
// BitWise OR Assignment Operator
// Bitwise XOR Assignment Operator
// Logical AND Assignment Operator
// Logical OR Assignment Operator

// 3. Comparison Operator 

// == ---- Equal (Loose)

// var x:number = 10;
// var y:string = "10";


// console.log(x == y);
// console.log(x === y);


// === --- Strict Equal
// != --- Not Equal
// !== --- Strict Not Equal
// > --- Greater Than
// < ---Less than
// >= --- Greater than or equal
// <= --- Less than or equal


// Logical Operator - Logical AND, Logical OR, Logical NOT

// Logical AND 

// var age = 30;
// var haslicence = true;

// if(age >= 18 && haslicence){
//     console.log("Car Drive")
// }else{
//     console.log("Canot run a car")
// }


// Logical OR

// var isstudent = false;
// var isEmployee = false;

// if(isstudent || isEmployee){
//     console.log("Discount available")

// }else{
//     console.log("Discuount not available")
// }

// Logical NOT

// var isloggin = true;

// if(!isloggin){
//     console.log("Please login")

// }else{
//     console.log("you are already logged in")
// }

// Incremental / Decremental Operator 
// ++ Incremental Operator

// var count:number = 5;

// count++ // count = count+1

// console.log("Post fix Incremental ; " + count)


// for(var i=5; i>0; i--){

//     console.log(i)

// }

// -- Decremental Operator

// var count:number = 10;

// count--

// console.log("Postfix Decremental : " +count)


// // Prefix 

// // Incremental Prefix

// var count = 20;

// ++count

// console.log("Prefix Incremental: "+count)

// Difference b/w Postfix and Prefix incremental Decremental 

// Postfix - Return the current value , than update the variable

// Prefix - Update the variable first and return the new Value 

// var x = 5;

// var y = ++x;

// console.log(y)


// var ticketid = 100;

// function creatticket(){

//     return ticketid++
// }

// console.log(creatticket())
// console.log(creatticket())
// console.log(creatticket())


// function creatticket1(){

//     return ++ticketid
// }

// console.log(creatticket1())
// console.log(creatticket1())
// console.log(creatticket1())

// var c;

// function add(){

//      c=5+4

//     return c;
// }

// console.log(add())
// console.log(c)


// var ticketid = 100;

// function creatticket(){

//     return ticketid--
// }

// // console.log(creatticket())
// // console.log(creatticket())
// // console.log(creatticket())

// var ticketid = 0;

// function creatticket1(){

//     return --ticketid
// }
// console.log(ticketid)
// console.log(creatticket1());
// console.log(ticketid)
// console.log(creatticket1());
// console.log(ticketid)
// console.log(creatticket1());
// console.log(ticketid)
// console.log(ticketid)

// Ternery Operator

// Syntax -  condition ? valueTrue : valueFalse

// If 

// var age =26;

// // if(age>=18){
// //     console.log("Person is Adult")

// // }else{
// //     console.log("Person is Minor")
// // }

// var eligibility = age>=18 ? "Adult" : "Minor"
// console.log(eligibility)


// var x:number = 10;
// console.log(typeof x);


type person = {

    name : "Anbu",
    age : 10,
    results : true

}

type UserKeys = keyof person;



