let products=document.querySelectorAll('section figure')
// in the arrow function this key word depend up on the parent so it gives undefined
// so we need to chnage the functon in to normal function
// for(let item of products){
//     item.addEventListener('click',()=>{
//         console.log(this.innerText);
//     })
// }

// // not the optimise way to do it
// for(let item of products){
//     item.addEventListener('click',function(){
//         console.log(this.innerText);
//     })
// }


// ************************************************
// event delegation:- applying event loop on parent rather than child

let section=document.getElementById('container');

section.addEventListener('click',(e)=>{
    //   console.log(e);
    if(e.target.nodeName === 'FIGURE'){
        console.log(e.target.innerText);
    }
      
})

