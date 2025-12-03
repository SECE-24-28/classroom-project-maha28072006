// var a=10;
// console.log("The value of a is:"+a);

// var a=20;
// console.log("The new value of a is:"+a); // Re-decleration of variable 'a'

// a=30;
// console.log("The updated value of a is:"+a); // Re-assignment of variable 'a'

// let b=15;
// console.log("The value of b is:"+b);

// b=25;//Re-assigning 'b'
// console.log("The updated value of b is:"+b);

// //let b=35; 
// //error because let can't be re-declared

// //console.log("The new value of b is:"+b);

// const c=50;
// console.log("The value of c is:"+c);
// //const c=60;
// //c=80;
// //re-declaring or re-assigning 'c' will give error

let name ="Alice";
let age = 25;
let isStudent = true;
let x;
console.log("type of name:", typeof name); // string
console.log("type of age:", typeof age);// number
console.log("type of isStudent:", typeof isStudent); // boolean
console.log("type of x:", typeof x); // undefined

function add(){
    console.log("Hello, World!");
}
add();

let a=10;
let b=15;
let sum=a+b;
console.log("The sum is:"+sum);
a=20;

function greet(){
    console.log("Good Morning!");
}
greet();
function multiply(num1, num2){
    multiply=num1*num2;
    console.log("The product is:"+multiply);
}
multiply(5,4);