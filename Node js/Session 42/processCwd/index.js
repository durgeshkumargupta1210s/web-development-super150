

// console.log(process.cwd());
// console.log(__dirname);

// approach 1 ---> rejected due to maximum no. of modulous operation
let arr=process.argv

let limit=arr[arr.length-1];


for(let i=1; i<=limit; i++){
    if(  i%3==0  && i%5==0){
        console.log("FizzBuzz");
    }

    else if(i%5==0){
        console.log("Buzz");
    }
    else if (i%3==0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
    
}

// Approach 2  ----> Little optimised

function FizzBuzz(n){
    for(let i=1; i<=n; i++){
        let str='';
        if(i%3==0){
            str+='Fizz';
        }

        if(i%5==0){
            str+='Buzz';
        }

        if(str===""){
            str+=i;
        }
        console.log(str);
    }

}

FizzBuzz(20);

// approach 3 ---->optimal approach


function FizzBuzz(n){
    let cnt3=1;
    let cnt5=1;
    for(let i=0; i<=n; i++){
        let str="";

        if(cnt3==3){
            str+='Fizz';
            cnt3=0;
        }
        if(cnt5==5){
            str+='Buzz';
            cnt5=0;
        }
        if(str==""){
            str+=i;
        }

        console.log(str);
        cnt3++;
        cnt5++;
    }
}
