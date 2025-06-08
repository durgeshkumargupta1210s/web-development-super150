

// let arr=process.argv;
// console.log(arr);

// let arr=process.argv.slice(2);
// console.log(arr);

// for(let i=0; i<arr.length; i++){
//     console.log("hello from "+arr[i]);
// }

let arr=process.argv;
// let last=arr[arr.length-1];
let last=arr.pop();

for(let i=0; i<=last; i++){
    console.log(i);
}