// let btn=document.querySelector('button');

// function lolipop(){
//     console.log("lalan top lolipop");
// }

// function icecream(){
//     console.log("hello i am durgesh")
// }

// btn.onclick=lolipop;
// btn.onclick=icecream;
// // function overide so it runs only last function


// *********************************************************************************************************

// add eventListner
// it allows you to run multiple events listneer on the same element
// :--- first argumrrnt=events
// :--- second argument=function which tells about event


let btn=document.querySelector('button');
function fun1(){
    console.log("happy birthday")
}

function fun2(){
    console.log("to you")
}

btn.addEventListener('click',fun1)
btn.addEventListener('click',fun2)

// mouseenter event

btn.onmouseenter=function(){
    btn.style.backgroundColor='blue';
}
btn.onmouseleave=function(){
    btn.style.backgroundColor='white';
}
// btn.onmousemove=function(){
//     btn.style.backgroundColor='blue';
// }

