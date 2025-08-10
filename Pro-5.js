// javascript variable 
let fruits = "mango";
console.log(`${fruits} is my fav, ${fruits} I like eat`);
//var variable 
/*! you can re declare
!Global scooped 
! var is hosted
! you can re assaign
*/
var a =10;
var a =15;
a = 20;
console.log(a);

{var a =9;
var a =18;
a = 30;}
console.log(a);

var a =1;
var a =2;
a = 11;
{console.log(a);}
// let variable 
/*
you can not re declare 
block scooped 
reassing
let is not hosted
*/
let b =2;
//let b =1;
b = 4;
console.log(b);

/*{let b =2;}
console.log(b);
let b =2;

{console.log(b);}*/
//const variable 
/*
you can not declare
you can not re assaign
block scooped 
const is not hosted
*/


const c ="s";
//const c ="v";
//c =`5'
console.log(c);
