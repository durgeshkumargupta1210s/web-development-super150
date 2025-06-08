


// file1

let pi=Math.PI;
console.log(pi);

// let ans=(num)=>{return num*num}

let ans1=  num => num*num;
let ans2=(a,b)=>a+b;

console.log(ans1);
console.log(ans2);

// export behaviour show karega becoz require dekh liya

// by default exports an empty object {}

// module.exports={} // by default

// module.exports = {pi , ans1 , ans2 };// why not this be a key-value pair

// module.exports={
//     pi:pi,
//     ans1:ans1,
//     ans2:ans2
// }



// module.exports={
//     pi:pi,
//     ans1:ans1,
//     ans2:ans2
// }


// kya hum object ki jagah kuch bhej sakte hai ? ----> YES

module.exports='durgesh web learner'





