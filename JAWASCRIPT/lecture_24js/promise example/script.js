function download(){
    console.log("download started");
    let res =true;
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (res){
                resolve("download finished")
            }else{
                reject("unable to download")
            }
        },2000);
    })
}

function print(msg){
    console.log(msg);
    console.log("print started");
    let res =false;
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (res){
                resolve("print finished")
            }else{
                reject("unable to print")
            }
        },1000);
    })
}

function upload(msg){
    console.log(msg);
    console.log("upload started");
    let res =true;
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (res){
                resolve("upload finished")
            }else{
                reject("unable to upload")
            }
        },3000);
    })
}


// download()
//     .then((msg)=>{
//         console.log(msg);
//         return print()
//     })
//     .then((msg)=>{
//         console.log(msg);
//         return upload();
//     })
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((msg)=>{
//         console.log(msg);
//     })

download()
    .then(print)
    .then(upload)
    .then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })    