
let input=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.querySelector('#list');


// 

btn.addEventListener('click',function(){
    let searchText=input.value;
    // console.log(searchText);
    fetchData(searchText);
    input.value='';
    
});


// api call karna and show karna
function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then(function(response){
            console.log(response.data);
            manipulateDom(response.data);
        })

}


//  DOM change karega cheeze
function manipulateDom(datas){ // datas ke ander hai array
     // remove already present movies
     while(list.firstChild){
        list.firstChild.remove();
     }
    // add 
    for(let data of datas){
        let figure=document.createElement('figure');
        if (data.show.image) {
          figure.innerHTML = `
            <img src="${data.show.image.original}" alt="${data.show.name}" />
            <h2>${data.show.name}</h2>
            <h4>Genere :-</h4> <p>${data.show.genere}</p>
            <h4>Summary</h4>
            <p>${data.show.summary || 'No summary available.'}</p>
          `;
          list.appendChild(figure);
        }
        
    }

}

