let para1=document.querySelector('#para1')
let arti=document.querySelector('#arti')
let div3=document.querySelector('#div3')


// property
// 1.parentElement

// console.log(para1.parentElement());// wrong 
console.log(para1.parentElement.parentElement);

// 2.childElement

// console.log(arti.children)

// let coll=arti.children;
// for(let item of coll){
//     item.style.fontSize='24px'
// }

//3.nextElementSibling

console.log(div3.nextElementSibling);

// 4.previousElementSibling

console.log(div3.previousElementSibling);



 

