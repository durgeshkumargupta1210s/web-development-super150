/*
higher order function:- (accepting )---foreach, map, filter , reduce, every, some
forEach - method , it does not return anythig bydefault udefined
methods --> function inside an object
everything inside a JS is an object. like array, string.
methods of array JS--->
 foreach, map, filter, reduce, sort, every, some.
all of this are higher order function accepts a call back function
 foreach function is a higher oeder function which accept a call back function which 
contain two argument item and index and foreach method does not return anything.
*/

// let arr=[10,20,30,40,50];
// arr.forEach();
// arr.forEach(function(){});

// arr.forEach(function(item,index){
//     console.log(item*item);
// });

// let ret=arr.forEach(function(item,index){
//     console.log(item*item);
//     return item*item;
// });
// console.log(ret);

/*
map generates a new array as a returned 
method , call back function , 
map returned array size is as same as original array size.



let arr=[10,20,30,40,50];
let ret=arr.map(function (item, index){
          return item+index
})

console.log(ret);

*/


/*
filter:-array method accept aa call 

// filter --> array method accept a call back function need two argument item and index.
//  it also returns a new array but the only catch is it only return truthy
//  value so their is possibility that our previous array and returned array are not of the same length.




let arr=[10,20,25,35,50];
let ret=arr.filter(function(item,index){
   if(item%10==0){
    return item
   }
})

console.log(ret);
*/


/*

 practice question
let arr=[1,2,3,4,5,6]
let ret=arr.map(function(item,index){
            return 2*item;
})
let ans=ret.filter(function(item,index){
    if(item>=10){
        return item;
    }
})
console.log(ans);
*/

/*
constructor functions:-
normal function me (new) keyword lag jane se wo constructor
function and its role is to create objects.
whenever you call a function with anew keyword in front of it then that
1.function is not just a general function it is known as constructor function
the role of the constructor function is to create a objects.
2. generally in order to dustinuish between a normal functon and a constructor we start a
constructor function with a capital letter(not cupulsary just convenction)

*/

function sam(){

}
console.log(sam());
console.log(new sam());


