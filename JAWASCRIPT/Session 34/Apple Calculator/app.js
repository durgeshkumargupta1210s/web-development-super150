
let buttons=document.querySelectorAll('button')

let input=document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click', function(event){
        let btnText= event.target.innerText;

        if(btnText==='AC'){
            input.value="";
        }
        else if(btnText==='='){
            try{
                input.value=eval(input.value); 
            }
            catch(err){
                input.value="Invalid Input"
            }
        }
        else{
            input.value+=btnText;
        }


        
    })
    
}

