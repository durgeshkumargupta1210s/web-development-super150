// function fun(){

// }
// console.log(fun());
// return undefined




// let p1=new function(){

// }
// console.log(p1)
// return a empty object


// ************************************************


// async function some(){

// }
// console.log(some());

// return promise

async function some(){
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3 second ho gye");
            resolve()
        },3000)

    })

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log("2 sec ho gye")
          resolve()
        },2000)
    }) 

    console.log("dono kam ho gye");

    
}
some();

// await only work with async function
// await says-jab tak mera kam khatam na ho gye tab tak tum ruko raho


// ********************************************

async function sam(){
    console.log(10);
    console.log(20);
    let data= await fetch()
    console.log(data);
    console.log(30);
}
console.log(50);
sam()
console.log(60);


async function sam2(){
    console.log(10);
    console.log(20);
    let data= await fetch()
    console.log(data);
    console.log(30);
}
console.log(50);
sam2()
console.log(60);
