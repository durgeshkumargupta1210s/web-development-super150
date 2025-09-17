import { useEffect, useState } from "react";
import axios from 'axios'
function Api(){
    const [data,setData] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/todos";

    useEffect(()=>{
        async function apicalling(){
            let data=await axios.get(API)
            setData(data.data)
        }
        apicalling()
    },[] )
    // },[data]


    return(
        <div>
            <h1>API</h1>
            {
                data.map((item,index)=>{
                    return(
                        <div>
                            <h1>Title : {item.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Api;



// ------------------------------------------------------------------------------------------------------
// import { useEffect, useState } from "react";
// import axios from 'axios'
// function Api(){
//     const [data,setData] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos";

//     useEffect(()=>{
//         axios.get(API)
//        .then((data)=>{
//           setData(data.data)
//        })
//        .catch((err)=>{
//            console.log(err,"err");   
//        })
//     },[] )
//     // },[data]


//     return(
//         <div>
//             <h1>API</h1>
//             {
//                 data.map((item,index)=>{
//                     return(
//                         <div>
//                             <h1>Title : {item.title}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Api;


// -------------------------------------------------------------------------------------------------------
// import { useEffect, useState } from "react";

// function Api(){
//     const [data,setData] = useState([]);
//     const API = "https://jsonplaceholder.typicode.com/todos";

//     // fetch(API)
//     // .then((data)=>{
//     //     return data.json();
//     // })
//     // .then((resp)=>{
//     //     setData(resp);
        
//     // })
//     // .catch((err)=>{
//     //     console.log(err);
        
//     // })

//     useEffect(()=>{
//        fetch(API)
//        .then((data)=>{
//           return data.json();
//        })
//        .then((resp)=>{
//           setData(resp)
//        })
//        .catch((err)=>{
//            console.log(err,"err");   
//        })
//     },[] )
//     // },[data]


//     return(
//         <div>
//             <h1>API</h1>
//             {
//                 data.map((item,index)=>{
//                     return(
//                         <div>
//                             <h1>Title : {item.title}</h1>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Api;