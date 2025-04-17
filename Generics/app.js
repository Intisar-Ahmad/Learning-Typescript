"use strict";
// //Generics
// //Generic functions
// // Generic classes
// //generic interfaces
// function abcd<T>(a:T): T{
//     return a;
// }
// abcd<string>("something")//generics
// function test<T>(a:T){
//     console.log(a);
// }
// test("hello")//automatically detects the type
// interface halwa<T>{
//     name:string;
//     age:number;
//     key : T
// }
// let obj:halwa<string> = {
//     name:"abc",
//     age:23,
//     key:"xyz"
// }
// class bottleMaker<T>{
//     constructor(public name:T){}
// }
// let b = new bottleMaker<string>("water");
//Type assertions
let nums = 12;
// (nums as number) or <number>nums//type assertion
//type guards
