/* this.... points to the current object
this depends on how it is being called

1.function caling 
2.method calling
3.constructor calling
4.indirect calling
      call()
      apply()
      bind()
5.arraw function

this-->global object given by browser ..every thing is in window

int the case of direct calling of function this key word ointed the window i.e global object


*/

// function calling
// function sam(){
//     console.log(this);// window
// }
// sam()

// method calling ... object calling
// in the case of method calling it pointed object of that particular method
// let obj={
//     a:10,
//     fn:function(){
//         console.log(this);
//     }
// }
// obj.fn()


// let obj1={
//     a:10,
//     fun:function(){
//         console.log(this,"1"); // object
//         function ans(){
//             console.log(this,"2"); // window
//         }
//         ans();
//     }

// }
// obj1.fun()

// let obj2={
//     a:10,
//     fun:function(){
//         console.log(this,"1"); // object
//         function answ(){
//             console.log(this,"2"); // window
//         }
//         answ();
//     }

// }
// let  dur=obj2.fn
// dur()

// constructor calling
// function sam(naam){
//     this.naam=naam;
//     this.kaam="student";
// }

// let p1=new sam("baba")
// let p2=new sam("kumar")

// let obj1={
//     a:10,
//     fn:function(x,y,z){
//         console.log(this.a,x,y,z);
//     }
// }
// let obj2={
//     a:50
// }
// obj1.fn()
// obj1.fn.call(obj2,10,20,30) // Argument accepeted in comma seperated 
// obj1.fn.apply(obj2,[10,20,30]) // Argument accepeted in List
// let fncopy =obj1.fn.bind(obj2,10,20,30)  // creates a copy of that function
// fncopy();


//......................................
/*
// arraw function 

function sqr(x){
    return x*x
}
console.log(sqr(7));
// type 1..
let sqr1= (x)=>{
    return x*x
}
console.log(sqr1(7));

// type 2
let sqr2=(x)=>x*x;
console.log(sqr2(7));

// type 3
let sqr=x=> x*x
 */

// let obj3 = {
//     a:10,
//     fun : function(){
//         console.log(this);//obj

//         let ans = ()=>{
//             console.log(this); // obj
            
//         }
//         ans();
//     }
// }
// obj3.fun();





// let obj3 = {
//     a:10,
//     fun : function(){
//         console.log(this);//window

//         let ans = ()=>{
//             console.log(this); // window
            
//         }
//         ans();
//     }
// }
// let out = obj3.fun;
// out();





let obj3 = {
    a:10,
    fun : ()=>{
        console.log(this);//window // here this point toward its parent , its parent is obj which points towards window

        let ans = ()=>{
            console.log(this); // window
        }
        ans();
    }
}
obj3.fun();



