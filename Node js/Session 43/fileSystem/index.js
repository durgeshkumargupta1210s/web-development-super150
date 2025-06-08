


let fs=require('fs');

// console.log(fs);

// we will perform CRUD {CREATE, READ, UPDATE, DELETE};

// create/write in fs

// let data='i am durgesh';
// let data2='i am durgesh kumar gupta';

// fs.writeFile('abc.txt', data, {
//     encoding:'utf-8',
//     flag:'w'
// }, (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("file written succesfully")
// })

// or

// fs.writeFileSync('abc.txt', data);


//***************************************************** */

// READ

// fs.readFile('abc.txt',{
//     encoding:'utf-8',// to avoid buffer
//     flag:'r'
// }, (err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data);

// })

// or

// let data=fs.readFileSync('abc.txt');
// console.log(data.toString());// to make data readable


// ***************************************************************************

//UPDATE

// fs.appendFile('abc.txt','bhaukal hai mera', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('file updated')
// })

//or

// fs.appendFileSync('abc.txt', 'aag lage basti me monu bhaiya masti me');

// fs.unlink('abc.txt', (err)=>{
//     if(err){throw err};
//     console.log("delete kar diya bhai ");

// })

// or

fs.unlinkSync('abc.txt');