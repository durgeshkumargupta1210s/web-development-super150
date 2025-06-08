// callback hell

function step1(fn){
    console.log("please wait i am selecting image");
    setTimeout(function(){
        console.log("image selected successfully");
        
        fn("selected image");
    },4000);
}

function step2(image,fn){
    console.log(`please wait i am applying filter to ${image}`);
    setTimeout(function(){
        console.log("filter applied successfully");
        fn("filtered image");
    },2000);
}

function step3(filtered_image,fn){
    console.log(`please wait i am waiting to apply caption on ${filtered_image}`);
    setTimeout(function(){
        console.log("caption added successfully");
        fn("captioned image")
    },5000);
}

function step4(caption){
    console.log(`please wait i am uploading ${caption}`);
    setTimeout(function(){
        console.log("image uploaded successfully");
    },3000);
}

step1(function(image){   // pyramid of dome or callback hell
    step2(image,function(filtered_image){
        step3(filtered_image,function(caption){
            step4(caption)
        })
    });
});