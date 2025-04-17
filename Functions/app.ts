// //Functions 
// //Fucntion types
// //Rest parameters
// //overloads
// //Optional and default parameters


// function abcd(name:string,callback:(value:number)=>void):void{
//     callback(12);
// }

// abcd("bhino",function(value:number){
//     console.log(value,"hello");
// }  )

// function some(name:string,age:number,cb:()=>void):void{

// }

// some("bhino",23,()=>{
//     console.log("hello");
// }  )


// //parameters

// function add(gender:string = "Rather not say"/*Default params */){
//     console.log(gender);
// }

// function something(age?:number) {
//  console.log(age)   
// }

// something(21);
// something()//both are valid

// add("male")
// add();

// //Rest Parameters

// function rest(...args:number[]){// useful when you don't need to know the number of parameters
//     console.log(args);
// }

// rest(1,2,3,4,5,6,7,8,9,10);


// //spread operator
// let arr = [1,2,3,4,5,5,6];
// let arr2 = [...arr];
// let obj = {
//     ...arr2
// }

// let st:string = "hello"
// // let objst = {works in js but not in ts
// //     ...st
// // }
// let arrst = [...st];

// console.log(arrst);
// // console.log(objst);
// console.log(obj)



// // overloading functions

// function IloveJS(a:string):void;
// function IloveJS(a:number,b:string):string;

// function IloveJS(a:any,b?:any):any{
//     if(typeof a === "string" && b === undefined){
//         console.log("I love JS");
//     }
//     else if(typeof a === "number" && typeof b === "string"){
//         return `I love ${a} ${b}`;
//     }
    
// }


// IloveJS("bhino");
// IloveJS(23,"bhino");
// // function overloading is a way to define multiple functions with the same name but different parameters
