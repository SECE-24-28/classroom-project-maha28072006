// let students=["Anu" ,"Ravi","Sita","mona"];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }

// let a=[1,2,3,4];
// a.push(6);
// console.log(a);

// a.pop(6);
// console.log(a);


// a.unshift(1,2);
// console.log(a);
// a.shift();
// console.log(a);

// let y=[10,20,30,40];
// console.log(y.length);

// let x=["a","b","c"];
// console.log(x.includes("b"));






// let user={
//     name:"Nithra",
//     age:18,


// }
// user.city="Bangalore";
// console.log(Object.keys(user));
// console.log(Object.values(user));
// user.age=19;
// user.city="Chennai";
// console.log(user);
// delete user.city;
// console.log(user);






let arr=[10,20,30,40,50];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let arr1=[100,200,300,400,500];
arr1.forEach((array=>{
    console.log(array);
}));

//ForEach loop
// take each value one by one and print
//not return new array

let arr2=[100,200,300,400,500];
arr2.forEach((array=>{
    console.log(array);
}));

let mark=[45,67,89];
mark.forEach(marks=>{
    console.log("marks:"+marks);
});

//map method
//take each value one by one,do some operation and return new array
let mark1=[45,67,8];
let newmark=mark1.map(marks=>marks+10);
console.log(newmark);

//filter method

let mark2=[45,67,89,34,23,78,90];
let newmark1=mark2.filter(marks=>marks>50);
console.log(newmark1);


//find method
let mark3=[45,67,89,34,23,78,90];
let newmark2=mark3.find(marks=>marks>50);
console.log(newmark2);
