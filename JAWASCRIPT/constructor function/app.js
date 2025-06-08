//  function sam(){

// }
// console.log(sam());

function sam(name, number){
    this.name=name;
    this.mob=number;
    this.greet=function(){
        console.log("good morning");
    }

}
console.log(sam());
console.log(new sam());  // constructor function
// role of constructor function to create an object

let p1=new sam("durgesh",9304357100);
let p2=new sam("kumar",9304357100);
console.log(p1);
console.log(p2);
// if object is created throgh constructor or class them its protype is class or constructor name.prototype 