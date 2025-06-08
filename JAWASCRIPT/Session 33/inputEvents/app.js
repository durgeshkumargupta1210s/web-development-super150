


let inEl=document.querySelector('input');

// inEl.addEventListener('input', function(){
//     console.log("hello i am durgesh") 
// })
// function funn(event){  // anyname will work generally (e/event)
// console.log(event.target.value);
// }
// inEl.addEventListener('input',funn);

let inp=document.querySelector('input');
let h2=document.querySelector('h2');

inp.addEventListener('input',function(event){
       h2.innerText=event.target.value
})








