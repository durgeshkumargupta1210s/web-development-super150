import { useState } from "react";

function Counter(){
    let[count,setCount]=useState(0);

    function handleDec(){
        setCount(count-1);
    }
    function handleInc(){
       
        setCount((count)=count+1); //1 
        
        setCount((count)=count+1); //3

        setCount(count+2)        //2
       
        setCount((count)=count+1); // 3 callback function always remember previous value
        
    }
    return(
        <div>
          <button onClick={handleDec}>DEC</button>
          <h1>Count : {count}</h1>
          <button onClick={handleInc}>INC</button>
        </div>
    )
}







// import { useState } from "react";

// function Counter(){
//     let[count,setCount]=useState(0);

//     function handleDec(){
//         setCount(count-1);
//     }
//     function handleInc(){
//         console.log(count,"1") //0
//         setCount((count)=count+1); //1 
//         console.log(count,"1")
//         setCount((count)=count+1); //2 
//         console.log(count,"2")
//         setCount((count)=count+1); // 3 callback function always remember previous value
//         console.log(count,"3")
//     }
//     return(
//         <div>
//           <button onClick={handleDec}>DEC</button>
//           <h1>Count : {count}</h1>
//           <button onClick={handleInc}>INC</button>
//         </div>
//     )
// }

// bina call back ke akhiri wala predominant hota hai










// import { useState } from "react";

// function Counter(){
//     let[count,setCount]=useState(0);

//     function handleDec(){
//         setCount(count-1);
//     }
//     function handleInc(){
//         console.log(count,"0")
//         setCount(count+1);
//         console.log(count,"1")
//         setCount(count+1);
//         console.log(count,"2")
//         setCount(count+1);
//         console.log(count,"3")
//     }
//     return(
//         <div>
//           <button onClick={handleDec}>DEC</button>
//           <h1>Count : {count}</h1>
//           <button onClick={handleInc}>INC</button>
//         </div>
//     )
// }

export default Counter;

// batching- app jitna bhi usestate() ka use kar lo but ui re render 1 bar hi hoga 