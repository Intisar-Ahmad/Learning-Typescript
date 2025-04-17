"use strict";
// // Class definitions
// constructors
// access modifiers (public,private ,protected)
// readonly properties
// optional properties
// parameter preperties
// getters and setters
// static members
// abstract classes and methods
// class hello {
//     //class definition
// }
// const obj = new hello();//obj initialization
// // i know what a constructor is so if you don't search it up
// class bottleMaker{
//     constructor(public name: string, public price:number){
//     }
// }
// let b1 = new bottleMaker("nestle",30);
// class Human{
//     age = 0;
//     constructor(public name:string,public isHandsome:boolean = false){
//     } 
// }
// const human = new Human("bhino",true);
// const anotherHuman = new Human("anota",false); 
// const aThirdHuman = new Human("kashi")
// class Music{
//     // properties can also be defined like this
//     public name: string;
//     public artist: string;
//     public thumbnail: string;
//     public length: number; 
//     // the shorthand way is written above
//     constructor( name:string, artist:string, thumbnail: string = "default.jpg",length:number){
//         this.name = name;
//         this.artist = artist;
//         this.thumbnail = thumbnail;
//         this.length = length;
//     }
// }
// const music1 = new Music("blah","bhino",undefined ,34);
// this keyword
// this keyword is used to refer to the current instance of the class
// its example is above I already know it so its a you problem
// access modifiers
// class Person{
//     protected halwa = "halwa";
//     constructor(public name:string){}//,public allows everything
//     // constructor(private name:string){}//,private allows only the class to access it
// }
// let c1 = new Person('bhino')
// // c1.name = "hulu";//only possible with public 
// // c1.halwa = "hulu";//not possible with private
// // protected
// // protected allows the class and its subclasses to access it
// class Student extends Person{
//     constructor(public name : string){
//         super(name);
//     }
//     getVal(){
//         console.log(this.name,this.halwa)// but here halwa is accessible due to protected
//     }
// }
// let s1 = new Student("chacha");
// s1.getVal();
//optional properties
// class User{
//     constructor(public readonly  name:string,public gender?:string){}//gender is now optional
//      /*to make name readonly use the word readonly*/
//     // changeName(){
//     //     this.name = "hello";//invalid with readonly
//     // }
// }
// let u1 = new User("bhino");
// u1.changeName();
//getters and setters are easy but there are special keywords in ts
// class user{
//     constructor(private name:string,public age:number){
//         this.name = name;
//         this.age = age;
//     }
//     get getName(){//getname will now act as a property
//         return this.name;
//     }
//     set setName(name:string){
//         this.name = name;
//     }
// }
// let u1 = new user("bhino",45);
//static members
class Person {
    constructor(name) {
        this.name = name;
        Person.count++; //increment the count every time a new instance is created
    }
    static getRand() {
        console.log(Person.count * Math.random());
    }
}
Person.count = 1; //static members are shared across all instances of the class
//abstract classes and methods
class Payment {
    constructor(amount, accountNumber) {
        this.amount = amount;
        this.accountNumber = accountNumber;
    }
}
class Paytm extends Payment {
    constructor(amount, accountNumber) {
        super(amount, accountNumber);
    }
    isPaymentAllowed(amount) {
        return this.amount > amount;
    }
}
