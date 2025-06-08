let div1=document.createElement('div')

let div2=document.createElement('div')

let arti=document.getElementById('arti')

div1.innerText='i am div1 element'
div2.innerText='i am div2 element'
div1.classList.add('div1')
div2.classList.add('div2')
// append :- add element to the last of the class 
// arti.appendChild(div1);
// arti.appendChild(div2);

// arti.append(div1,div2)


// prepend:- add element to the first of the class
arti.prepend(div1,div2);






