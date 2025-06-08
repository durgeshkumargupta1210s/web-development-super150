


function calculate(){
let arr=[];
 return function multi5(a){
    if(arr[a]!=undefined){
        return arr[a];
    }
    else{
        let res=a*5;
        arr[a]=res;
        console.log(arr);
        return res;
    }
}
return multi5;

}
let multi5=calculate();
console.log(multi5(4));
console.log(multi5(5));
console.log(multi5(6));