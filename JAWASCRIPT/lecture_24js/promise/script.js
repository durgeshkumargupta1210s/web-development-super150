// promises

// new Promise (function(){})
let p1 = new Promise (function(resolve,reject){
    let data = "10 rupee";
    let err = "chala ja brother";
    resolve (data);
    reject(err);
})

p1
.then(function(d){
    console.log(d);
}) // if resolved (successfully)
.catch(function(err){
    console.log(err);
}) // if rejected (err)
.finally(function(){
    console.log("End"); //****************************** */
}) // if any one of two (resolved or rejected) run then finally will run


// all these accept callback function
// anyone can work alone
// it can be only resolve or reject which is written first



function fun(){
    let condn = true;
    return new Promise ((resolve,reject)=>{
        if (condn){
            resolve("success")
        }
        else{
            reject("failure")
        }
    })
}
console.log(fun()); //  here if fun return promise then promise will execute by itself

// fun() // return promise
//     .then((msg)=>{
//         console.log("Yor are in 1st then"); 
//         return msg;  // it successfully completed(means resolved) then recieved in next then (known as chaining)otherwise recieved in catch
//     })
//     .then( (msg)=>{
//         console.log("You are in 2nd then",msg); 
//     })
//     .catch((msg)=>{
//         console.log("you are in catch", msg);
//     })


fun() // return promise
    .then((msg)=>{
        console.log("Yor are in 1st then"); 
        return new Promise ((resolve,reject)=>{ // return means resolved then recieved by next then
            if (msg){
                resolve(msg);
            }else{
                reject("failure"); // ******************
            }
        });  
    })
    .then( (msg)=>{
        console.log("You are in 2nd then",msg); 
    })
    .catch((msg)=>{
        console.log("you are in catch", msg);
    })
    .finally(()=>{
        console.log("you are in .finally");
    })