// function ko as a argument js me bhej sakte hai ...
/*
Higher order function- 1. when you have two function fun()a and fun()b, assume that function
be is send as a it argument to the the other function() a then we say that the accepting fun()a
is your higher order function.. and fun() b is called call back function.

function outer() {
   var =a; 
   function inner(){

   }
   return inner;

}

2. when i have a outer function and inside that function i have anotheer function (inner)  and i am returing
   the inner function then the outer function is known as higher order funcion.


*/

/*
closures:- to answer
           whenever you return a function it is never returned alone it is always
            returned with its dependent lexical enviroment. no calling of function in closures..

    function a() {
          var x="gone"
          var lol=true;
          function b(){
              console.log(lol);
          }
          b();[when b execute it execute it function along with their lexical variable i.e var lol]



    }
*/

function a(){
    let ex=10;
    var ex2=100;
    function b(){
        console.log(ex2);
    }
    return b
}

let returnedval=a();
console.log(returnedval);
returnedval();
