// attribute:- extra information , special information about the tag from the browser

// getAttribute
/* let anchor=document.querySelector('a');
 console.log(anchor.getAttribute('href'));
console.log(anchor.getAttribute('class')); */

// setAttribute
// let anchor=document.querySelector('a');
// anchor.setAttribute('href','http://facebook.com')

// let input=document.querySelector('input');
// input.setAttribute('type', 'color')
// input.setAttribute('type', 'date')

// input.setAttribute('type', 'color')
// input.setAttribute('type', 'checkbox')

let arr=[
    'https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww'
]
// we can not use loop in this...
let image=document.querySelector('img')
let n=0;
let idd=setInterval(function(){
    image.setAttribute('src',arr[n])
    n=(n+1)%arr.length;
},3000)


// image ko 30 sec ke bad rokna hai..

setTimeout(function(){
    clearInterval(idd);
},30000)



