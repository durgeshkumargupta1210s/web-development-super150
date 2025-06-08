let API_Key = '378b49d2c6ec0f620bf9e6e07358ff0f'
 
let city_name = prompt("please enter you city name")
let geoCodingAPI = (city_name , API_Key) => (`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_Key}`)

let weatherAPI = (lat,lon,API_Key) => (`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}`)

// function getLocation(){
//     fetch(geoCodingAPI(city_name,API_Key))
//         .then((data)=>data.json())
//         .then((data)=>{
//             return {'lat':data[0].lat , 'lon':data[0].lon};       
//         })
//         .catch((ele)=>{
//             console.log(ele);
            
//         })
// }

function getWeatherDetails(API_Key,lat,lon){

    fetch(weatherAPI(lat,lon,API_Key))
        .then((data)=>data.json())
        .then((data)=>{
            console.log(data.list[0]);
            
        })
        .catch((ele)=>{
            console.log(ele);
            
        })
}


// method -1
fetch(geoCodingAPI(city_name,API_Key))
        .then((data)=>data.json())
        .then((data)=>{
            return {'lat':data[0].lat , 'lon':data[0].lon};       
        })
        .then((data)=>{
            getWeatherDetails(API_Key , data.lat , data.lon)
        })
        .catch((ele)=>{
            console.log(ele);
            
        })

        
// fetch with promise
fetch("")
.then(function(data){
    console.log(data);
    return data.json()
})
.then(function(res){
    console.log(res);
})


// fetch with async- await
async function callAPi(){
    let data=await fetch("")
    let resp= await data.json();
    console.log(resp);
}