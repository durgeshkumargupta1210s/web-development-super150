//  prototype :- a object itself , act as a fall back source to our objects
// fallbacks:- 
// jab koi property object ke ander nhi hoti the output is undefined
// jab koi function class me nhi hai or woshko call kiya gye to error ata hai

let obj={
    a:10,
    fn:function(){
        console.log("hello");
    }
}
console.log(obj.a);
console.log(obj.sam);
obj.fun()
obj.fn();
