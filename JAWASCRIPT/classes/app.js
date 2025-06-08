// classes are syantactical sugar of constructor function...
// whatever the contructor can do classes will also do ..

class sam{
    constructor (){

    }
}

// normal function making---> first letter small in function name
// constructor function making---> first letter capital in constructor name
// constructor making
function Person(name, age,favcolor){
    this.naam=name;
    this.age=age;
    this.favcolor=favcolor;
}

let p1=new Person("mav",25,"brown");
let p2=new Person("durgesh",21,"red");
console.log(p1);
console.log(p2);

// classes making

class Person2{
    constructor(name, age,favcolor){
        this.naam=name;
        this.age=age;
        this.favcolor=favcolor;
    }
    greet(){
        console.log("good morning");
    }
    greet(){
        console.log("good morning");
    }

}
class Student extends person2{
    constructor(name,age,favcolor,rollno){
        super(name,age,favcolor)
        this.rollno=rollno;
    }
    bye(){
        console.log("good bye");
    }
}
let p3=new Student("mav",25,"brown",420);
let p4=new Student("durgesh",21,"red",421);
console.log(p3);
console.log(p4);