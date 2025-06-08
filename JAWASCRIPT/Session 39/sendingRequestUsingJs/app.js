
let ul=document.querySelector('ul');

// XMLHttpsRequest -- methods 1

let req=new XMLHttpRequest();

// connection bana hai basically
req.open('GET','[GET] https://api-mobilespecs.azharimm.dev/brands');

// bhejni hai apni request/demand
req.send();

// jab sahi salamat data mile or jab sare kamm sahi se ho jaye
req.onload=function(){
    // console.log(this, 'sam');
    let samachaar=JSON.parse(this.response);
    // console.log(samachaar);
    for(let d of samachaar.data){
        document.createElement('li');
        li.innerHtml=`
        <img src='${d.imageUrl}' height="100px">
        <span>${d.title}</span>
        `
        ul.appendChild(li);
    }
}

// but if any error
req.onerror=function(){
    console.log(this);
}
