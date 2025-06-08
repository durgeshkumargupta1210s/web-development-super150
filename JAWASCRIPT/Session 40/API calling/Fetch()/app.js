



fetch('https://pokeapi.co/api/v2/pokemon/ditto')
   .then(function(response){
       return response.json();// returns a promise
    //    console.log(response);
   })
   .then(function(data){
         console.log(data);
   })
   .catch(function(err){
        console.log(err)
   })