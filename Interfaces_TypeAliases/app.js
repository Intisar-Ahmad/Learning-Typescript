"use strict";
// //Interfaces and type aliases
// //Defining Interfaces 
// //Using interfaces to define object shapes
// // Extending Interfaces
// //Type Aliases
// //Intersection Types
// //Union Types
// //ok so an interface is like a class or a structure in C or C++ , what it does is that it allows you to make a specfic blueprint for an object and then we can use it for validation
// //example
// interface User{// any object that is annotated with this interface must have these properties
//     name:string
//     email:string
//     password:string
//     gender?:string// now this is optional
//     func(n:string):string
// }
// function abcd(obj: User){
//     //Now obj must be of type User
//     //Try it for yourself 
// }
// // abcd();//this is wrong
// // abcd({name:"bhino"});//this is wrong
// // abcd({something:"bhino"});//this is wrong
// abcd({
//     name: "John",
//     email:"some",
//     password:"some", // gender doesn't cause error
//     // gender:"some",
//     func:(n:string):string=>{//noice
//         console.log(n)
//         return n;
// }
// })
// //how to make an array with this
// interface UserArray{
//     [index:number]: string
// }
// const arr:UserArray = ["hi","bye"];
// console.log(arr[0]);//hi
// console.log(arr[1]);//bye
// //Extending Interfaces
// interface Person{
//     name:string,
//     age:number
// }
// interface Student extends Person{
//     gpa:number,// this sort of works like inheritance but with interfaces now Student has all the propeties of person
// }
// function check(obj:Student){
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.gpa);//can access everything
// }
// //interfaces of different names can exist they actually merge
// //type aliases
// type hinsa = number;// give a custom name to a type 
// let alias:hinsa;//funny , hinsa is number in urdu
// //this is useful when
// type someType = string | number | boolean | null;
// // now
// let x:someType;// now x can be string or number or boolean or null
// //union
// let someVar: string | number | boolean | null = 5;// this is a union type
// //intersection
// type User = {
//     name:string,
//     email:string
// }
// type Admin =  User & {
//     getDetails(user:string):User
// }
// function some(a:Admin) {
//    //some code
// }
//now types and interfaces have a few differences
// type ab = string;
// type ab = number; not allowed but it is allowed in interfaces
//type is used to give aliases to types when interfaces are used to shape objects
