



var a=10;// global
let b=20;// script
const c=30;// script

if(true){
    var d=100;// global
    let e =200;// block
    const f =300;// block

}

function sam(){
    var g=1000;// function
    let h=2000;// block
    const i=3000;// block
}

//-------------------------------------------------------------
// scope/ lexical scope:- accessbility of a variable ()
// scopes :-types of scopes 
// kishi bhi variable ka scope tab decide hota hai jab woshko create karte hai na ki tab jab woshko use karte hai

/*
-global , script ..... same level
-function , block  ..... same level

case1:-
kya apka var{} ke ander hai 
if(not):- global , script
{
case1.1- which declearative is used
 var-global
 let/contant-script
}

if(yes):- block , ffunction and global
{
case2.1-{} kya function ke karan bana hai
if(no):-which declearative is used 
{
var-global
let/constamt-block
}

if(yes):-which declearative is used 
{
var-function
let/cons-block
}

}

functional + block = local


*/
