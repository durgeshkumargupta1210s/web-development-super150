


axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function(resp){
           console.log(resp.data);
    })
    .catch(function(){
        console.log(err);
    })