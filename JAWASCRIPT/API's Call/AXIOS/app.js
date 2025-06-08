
// axioms with promise

axios.get("https://api.tvmaze.com/search/shows?q=girls")
.then(function(resp){
    console.log(resp.data);
    
})


// axios with await-async

async function call(){
    let data=await axios.get("https://api.tvmaze.com/search/shows?q=girls")
    console.log(data.data)
}