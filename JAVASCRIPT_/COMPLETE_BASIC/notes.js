//* 1) Way to print in JavaScript
// console.log("This will be on Console");
// alert("This is Alert");
// document.write("This Will be on Page")
// console.log("love JavaScript")

//* 2) JavaScript Variable
// //? variable
// var num1 = 4;
// var num2 = 5;
// var str = "sum";
// var result = true;
// console.log(str + " = " + num1 + num1 + " is "+ result);

// //? Objects
// var marks = {
//     ravi: 34,
//     shivam: 88,
//     harry: 99
// }
// console.log(marks);

// //? undefined variable
// var und; 
// var und2 = undefined;
// console.log(und2);

// var nu = null;
// console.log(nu);

//* 3) var vs Let vs const
//?           Scope              overwrite           redeclare
//? var       function Scoped    can   be overwrite  can be redeclare
//? let       Block Scoped       can   be overwrite  cant be redeclare
//? const     Black Scoped       can't be overwrite  cant be redeclare

//? Tips
//? Never use var
//? Always Use let
//? use const when you dont need to overwrite value

//* 4) TWO TYPES OF DATATYPE
//? Primitive data types : undefined, null, number, string, boolean, symbol
//? Reference data types : Arrays and Objects

//* 5) Conditional-> Same as c++
// var age = 15;
// if(age>=18) console.log("you are adult")
// else console.log("you are kid")

//* 6) Function
// function avg(a,b){
//     return (a+b)/2;
// }
// var avg1 = avg(3,6);
// var avg2 = avg(3,5);
// console.log(avg1,avg2);

//* 7) Arrays and Loop
// //? For loop
var arr = [1,2,"bablu",4,true];
// console.log(arr)
// console.log(arr[0])
// console.log(arr[4])
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// //? For Each loop
// arr.forEach(function(element){
//     console.log(element);
// })

//? While loop 
// let j = 5
// while (j!=1) {
//     console.log(j);
//     j--;
// }

//* 8) Arrays Methods
// let myarr = ["hi","hello",43,null,true]
// console.log(myarr); console.log(myarr.length);
// myarr.push("the");// push back + return newlen
// console.log(myarr);
// myarr.pop(); console.log(myarr);
// myarr.shift(); console.log(myarr);
// myarr.unshift("unshift"); console.log(myarr); 
// console.log(myarr.unshift("length")); // return new len + push fornt
// console.log(myarr.shift()); // return shifted + pop front
// console.log(myarr);
// console.log(myarr.toString()); // just return to string
// myarr.sort(); console.log(myarr); // sort

//* 9) String Methods
// let str = "Hello i am good boy am"
// console.log(str.length);
// console.log(str.indexOf("am")); // return first occ of string in str
// console.log(str.lastIndexOf("am")); // return last occ of string in str
// console.log(str.slice(1,5));
// console.log(str.replace("good","bad")); // replace first occ only

//* 10) Dates
// let mydate = new Date();
// console.log(mydate.getTime());
// console.log(mydate.getDay());
// console.log(mydate.getFullYear());
// console.log(mydate.getHours()-12);
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());

// typeof
// console.log(typeof(true));

//* 11) Dom manupliation

//* a) getElementBy Id and ClassName
// let elem = document.getElementById('click')
// console.log(elem);

// let eleclass = document.getElementsByClassName('container') // gebc
// console.log(eleclass);

// eleclass[0].style.background = "pink"; // add css
// eleclass[0].classList.add("para-text") // add css class
// eleclass[1].classList.add("classbyjs") 

// console.clear();
// console.log(elem.innerHTML);
// console.log(eleclass[1].innerText);

//* b) find element by tag name
// tn = document.getElementsByTagName('button')
// tn = document.getElementsByTagName('div')
// console.log(tn);

//* c) create ele and append
// createdElement = document.createElement('p')
// createdElement.innerText = "This para element created by JS"
// tn[0].appendChild(createdElement); // first div append child

