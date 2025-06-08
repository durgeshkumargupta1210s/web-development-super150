// add(5)(3)(2);
// function add(a,b,c){
//     return a+b+c;
// }
//  let ans=add(5,3,2);
//  console.log(ans);

function add(a){
    return function add2(b){
        return function add3(c){
            return a+b+c;
        }
    }
} 
let ans=add(5)(3)(2);
console.log(ans)

let add2=add(5);
let add3=add2(6);
let result=add3(4);

// partial application
let some=add(3)(2);
console.log(some);
 let ans1= some(4);
 console.log(ans1);
some(5);
some(1);

// function add(a){
//     return function add2(b){
//         return function add3(c){
//             return function  add4(d){
//                 return function add5(e){
//                     return a+b+c+d+e;
//                     }
//                 }
//             }
            
//     }
// } 
// let ans=add(5)(3)(2)(2)(2);
// console.log(ans)


// sorting ....
// let arr=["1","123","2","234","1111"];
// console.log(arr.sort(function(a,b){return a-b}));

const allGlobalParcels =[
    {
        created:234567894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234566694000,
        location:"Us",
        properties:{
            name:"Samsung"
        }
    },
    {
        created:234537894000,
        location:"India",
        properties:{
            name:"Samsung"
        }
    }
]

function sortParcelBycountry(data,country,order){
    const countryParcel= data.filter(d=>d.location==country);
    const sortedResult =countryParcel.sort((a,b)=>{
        if(order=="asc"){
            return a.created-b.created;
        }
        return b.created-a.created
    })
    return sortedResult;
    
}

// console.log(sortParcelBycountry(allGlobalParcels,"India","asc"));
// console.log(sortParcelBycountry(allGlobalParcels,"India","dsc"));


function data(data){
    return function country(country){
        const countryParcel= data.filter(d=>d.location==country);
        return function order(order){
            const sortedResult =[...countryParcel].sort((a,b)=>{
                if(order=="asc"){
                    return a.created-b.created;
                }
                return b.created-a.created
            })
            return sortedResult;

        }
    }
}

let order=data(allGlobalParcels)("India");
console.log(order("asc"));
console.log(order("des"));


// let arr =["1","123","2","234","1111"];
// console.log(arr.sort(function(a,b){ return a-b}));

 66

//


