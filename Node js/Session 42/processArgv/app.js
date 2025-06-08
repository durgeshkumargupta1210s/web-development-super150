

let pi=3.14;
let magicNum=68;

console.log('i am starting node js')

function sqr(num){
    return num*num;
}

let obj={
    First:'durgesh',
    last:"gupta",
    age:21,
    getname:function (){
        console.log(this.First +" "+this.last);
    }

}

console.log(pi);
console.log(magicNum);
console.log(sqr(6));
console.log(obj.getname());
