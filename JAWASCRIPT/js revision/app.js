// var a = 10;
// function fun (){
//       console.log(a);// unefined
//       var a=20;
//     function foo(){
//         a++;
//         console.log(a);//NaN
//         var a=30;

//     }
//     foo();
// }
// fun();

// console.log([]==0);//true
// console.log([]==[])// false .....address different
/* == campare after implicit type conversion in js (pahle same data type me leke ayega)
 === compare before type conversion(jis data type me hai woshi me change hoga)
implicit conversion done by engine
explicit conversion done by user
"+" used for concat or addition cncat has high priority
1+ +"6"=7
.................................................................
Explicit type conversion:-
 *Number-> Number(data you want to convert in number)
 *String--> String()
 *boolean--> Boolean()
 --> kishi bhi chiz ke agae + or - lag jane se wo number me change ho gyega 
 Difference b/w == and === :-
 console.log(1=="1") // true
 console.log([]=="")// true.. array will change to empty array
 console.log(0=="")// true... string will change to 0;
 console.log(0=="    ")// true...space is also give 0;
 java script me ASCII value nhi hoti hai
 console.log(""=="  ") false 
 console.log([]==[]) //false 
 pass by value=primitive data type {string}
 pass by reference=not primitive data type {[]} // address gyega


*/
// difference b/w undefined, not defined , null and NaN:-
// let num=Number("a")
// console.log(num);// NaN (not a number)

// console.log(1+"a"); // 1a
// var a="e"
// console.log(a++) // NaN
/*
Hoisting:-
it is a default behaviour of js,where all the declearation(function,varable, class) are move to the top of their scope.
console.log(a);
var a=10;

var a ;
console.log(a);
a=10;
 */
// *******************************************************************

/*
How js engine execute js file:-
memory creation phase
code execution phase
>> js never compile run time error ata only not compile time error

*/
// function expression ki hosting nhi hoti hai
// fun()
// var fun=function(){
//     console.log("hello world")
// }
// // when you want to find the unicode of any character then you will find the this by using
// .unicode(a);

/****************************************************************************************************/
/* closure :- A closure is the combination of a function bundled together (enclosed) with 
references to its surrounding state (the lexical environment). In other words, a 
closure gives a function access to its outer scope. In JavaScript, closures are created
every time a function is created, at function creation time.*/
// function fun() {
//   var a = 10;
//   var b = 20;
//   function foo() {
//     console.log(a);
//     console.log(b);
//   }
//   // foo();
//   return foo();
// }
// f = fun();
// console.log(f);

// function outer(){
//   var a=10;
//   function inner(){
//     a++;
//     var b=20;
//     function innermost(){
//       b++;
//       console.log(b);

//     }
//     return innermost;

//   }
//   return inner;
// }
// let f1=outer(); // f1....> inner
// let f11=f1() ; // f11....> innermost
// f11();
// let f12=f1();
// f12();

// note:- jis scope ka closure ban chuka hai woshka closure dubara nhi banega...


