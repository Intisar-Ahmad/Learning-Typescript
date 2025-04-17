"use strict";
// //Basic Types
// // Primitive Types
// // Array
// // Object
// // Tuple
// // Enum
// // any,undefined,null,unknown,never,void
// let a = 10; // number
// // a = "bhino" // string which is wrong or not allowed
// let arr = [1, 2, 3, "bhino"]; // number | string array
// let arr2 = [1,2,{name:"bhino"}] //  this is allowed if you don't specify the type of array
// let nums:number[] = [1,2,3,4,5] // this is a number array and a string or anything else is not allowed
// //tuples
let tuple = ['bhino', 1]; //a tuple is a fixed length array with a fixed type
// //enum
// enum Color {
//     Red = 'red',
//     Green = 'green',
//     Blue = 'blue'
// }
// let any;//this is type any
// let unknown:unknown; // this is type unknown the only difference between unknown and any is that with unknown you must perform checks before doing anything with the variable
// //void
// // if a function does not return anything then it is of type void
// function some():void{
//     console.log("hello")
// }
// //null
// // null is a type that represents the deliberate absence of any value
// // let nullvar = null;// this is type any not null to specify it you must use :
// let nullvar2:null; // this is type null
// //undefined
// let undef:undefined; // this is type undefined
// //undefined is a type that represents the absence of a value
// //never
// // never is a type that represents a value that never occurs
// function error():never{
//     while(true){
//         console.log("fuck you");
//     }
// }
// // error() don't
//Type Inference
//Type annotations
// basically what happens is that typescript will infer the type of a variable based on the value that is assigned to it
let num = 12; //will be a number
let str = "bhino"; // will be a string
// type annotations
let a; //explicitly assigning types to variables
function abcd(a, b) {
    //also an example
}
